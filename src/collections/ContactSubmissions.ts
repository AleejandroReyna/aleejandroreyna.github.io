import type { CollectionConfig } from 'payload'
import { buildOwnerNotification, buildUserConfirmation } from '@/lib/email/contactEmails'
import { envs } from '@/lib/envs'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'status', 'createdAt'],
    },
    access: {
        create: () => true,
        read: ({ req: { user } }) => !!user,
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => !!user,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        {
            name: 'subject',
            type: 'text',
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'phone',
            type: 'text',
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        {
            name: 'company',
            type: 'text',
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        {
            name: 'budget',
            type: 'text',
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
            admin: {
                readOnly: true,
            },
        },
        {
            // Which language the visitor was browsing in, so the confirmation
            // email can be sent in that language rather than defaulting to one.
            name: 'locale',
            type: 'text',
            defaultValue: 'en',
            admin: {
                readOnly: true,
                position: 'sidebar',
                description: 'Language the visitor submitted in',
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            options: [
                {
                    label: 'New',
                    value: 'new',
                },
                {
                    label: 'Contacted',
                    value: 'contacted',
                },
            ],
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'notes',
            type: 'textarea',
        },
    ],
    hooks: {
        afterChange: [
            async ({ doc, operation, req }) => {
                if (operation !== 'create') return doc

                // Mail must never break a submission: if SMTP is down or
                // misconfigured the visitor's message is already saved, and
                // losing it to a transport error would be far worse than
                // losing the notification.
                if (!envs.smtp.isConfigured) {
                    req.payload.logger.warn(
                        'Contact submission saved but SMTP is not configured — no email sent.',
                    )
                    return doc
                }

                const owner = buildOwnerNotification(doc)
                const user = buildUserConfirmation(doc)

                // Sent independently so one failure can't suppress the other.
                const results = await Promise.allSettled([
                    req.payload.sendEmail({
                        to: envs.smtp.notifyTo,
                        replyTo: doc.email,
                        subject: owner.subject,
                        html: owner.html,
                    }),
                    req.payload.sendEmail({
                        to: doc.email,
                        subject: user.subject,
                        html: user.html,
                    }),
                ])

                const labels = ['owner notification', 'visitor confirmation']
                results.forEach((result, i) => {
                    if (result.status === 'rejected') {
                        req.payload.logger.error(
                            { err: result.reason },
                            `Contact form: ${labels[i]} failed to send.`,
                        )
                    }
                })

                return doc
            },
        ],
    },
}
