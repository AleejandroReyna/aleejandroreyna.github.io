'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2, 'Name is too short'),
    email: z.string().email('Invalid email address'),
    subject: z.string().optional(),
    phone: z.preprocess((val) => val === null ? undefined : val, z.string().optional()),
    message: z.string().min(10, 'Message is too short'),
})

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

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    }

    const validatedFields = contactSchema.safeParse(rawData)

    if (!validatedFields.success) {
        console.log('Validation failed:', validatedFields.error.flatten().fieldErrors)
        const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors).flat()
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: `Please fix the errors: ${errorMessages.join(', ')}`,
        }
    }

    try {
        const payload = await getPayload({ config })
        await payload.create({
            collection: 'contact-submissions',
            data: {
                ...validatedFields.data,
                status: 'new',
            },
        })

        return {
            success: true,
            message: 'Thank you! Your message has been sent.',
        }
    } catch (error) {
        console.error('Error saving contact submission:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        }
    }
}
