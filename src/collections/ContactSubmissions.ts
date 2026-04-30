import type { CollectionConfig } from 'payload'

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
            name: 'message',
            type: 'textarea',
            required: true,
            admin: {
                readOnly: true,
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
}
