import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
    },
    admin: {
        useAsTitle: 'clientName',
        group: 'Content',
        defaultColumns: ['clientName', 'company', 'approved'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'quote',
            label: 'Quote',
            type: 'textarea',
            required: true,
        },
        {
            name: 'clientName',
            label: 'Client Name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            label: 'Role',
            type: 'text',
            admin: {
                description: 'Client position, e.g. "CTO"',
            },
        },
        {
            name: 'company',
            label: 'Company',
            type: 'text',
        },
        {
            name: 'approved',
            label: 'Approved',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Only approved testimonials are shown on the site',
            },
        },
    ],
    hooks: {
        afterChange: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                return doc
            },
        ],
        afterDelete: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                return doc
            },
        ],
    },
}
