import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Capabilities: CollectionConfig = {
    slug: 'capabilities',
    labels: {
        singular: 'Capability',
        plural: 'Capabilities',
    },
    admin: {
        useAsTitle: 'title',
        group: 'Content',
        defaultColumns: ['title', 'experienceLabel', 'order'],
    },
    access: {
        read: () => true,
    },
    defaultSort: 'order',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
        },
        {
            name: 'experienceLabel',
            label: 'Experience Label',
            type: 'text',
            admin: {
                description: 'Shown top-right of the card, e.g. "12+ Years" or "Since 2023"',
            },
        },
        {
            name: 'stacks',
            label: 'Stack Lines',
            type: 'array',
            admin: {
                description: 'Each line renders as "/ LINE" at the bottom of the card',
            },
            fields: [
                {
                    name: 'line',
                    label: 'Line',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'order',
            label: 'Order',
            type: 'number',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                description: 'Cards are sorted ascending by this value',
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
