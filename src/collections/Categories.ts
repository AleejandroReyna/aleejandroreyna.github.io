import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'Category',
        plural: 'Categories',
    },
    admin: {
        useAsTitle: 'name',
        group: 'Blog',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            localized: true,
        },
        slugField('name'),
    ],
    hooks: {
        afterChange: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                revalidatePath('/blog')
                return doc
            },
        ],
        afterDelete: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                revalidatePath('/blog')
                return doc
            },
        ],
    },
}
