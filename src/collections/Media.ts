import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'
import { slugField } from '@/fields/slug'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        slugField('alt'),
    ],
    upload: {
        disableLocalStorage: true,
    },
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
