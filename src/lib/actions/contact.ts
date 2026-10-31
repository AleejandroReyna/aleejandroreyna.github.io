'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { z } from 'zod'
import { getTranslations } from 'next-intl/server'
import { getLocale } from '@/lib/locale'

export type ContactFormState = {
    success: boolean
    errors?: {
        name?: string[]
        email?: string[]
        subject?: string[]
        phone?: string[]
        message?: string[]
    }
    message?: string
}

// Verifies the Cloudflare Turnstile token. Without a secret configured (local
// dev, Docker build) verification is skipped so the form keeps working.
async function verifyTurnstile(token: string): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
        console.warn('TURNSTILE_SECRET_KEY not set, skipping captcha verification')
        return true
    }
    if (!token) return false

    try {
        const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ secret, response: token }),
        })
        const data = await res.json()
        return data.success === true
    } catch (error) {
        console.error('Turnstile verification failed:', error)
        return false
    }
}

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const t = await getTranslations('contactForm')

    const contactSchema = z.object({
        name: z.string().min(2, t('nameTooShort')),
        email: z.string().email(t('invalidEmail')),
        subject: z.string().optional(),
        phone: z.preprocess((val) => val === null ? undefined : val, z.string().optional()),
        company: z.preprocess((val) => val === null ? undefined : val, z.string().optional()),
        budget: z.preprocess((val) => val === null ? undefined : val, z.string().optional()),
        message: z.string().min(10, t('messageTooShort')),
    })

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        budget: formData.get('budget'),
        message: formData.get('message'),
    }

    const validatedFields = contactSchema.safeParse(rawData)

    if (!validatedFields.success) {
        console.log('Validation failed:', validatedFields.error.flatten().fieldErrors)
        const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors).flat()
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: t('fixErrors', { errors: errorMessages.join(', ') }),
        }
    }

    const isHuman = await verifyTurnstile(String(formData.get('cf-turnstile-response') ?? ''))
    if (!isHuman) {
        return {
            success: false,
            message: t('captchaFailed'),
        }
    }

    try {
        const payload = await getPayload({ config })
        const locale = await getLocale()
        await payload.create({
            collection: 'contact-submissions',
            data: {
                ...validatedFields.data,
                locale,
                status: 'new',
            },
        })

        return {
            success: true,
            message: t('thankYou'),
        }
    } catch (error) {
        console.error('Error saving contact submission:', error)
        return {
            success: false,
            message: t('error'),
        }
    }
}
