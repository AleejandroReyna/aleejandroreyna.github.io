import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { revalidatePath } from 'next/cache'
import { slugField } from '@/fields/slug'

export const Posts: CollectionConfig = {
    slug: 'posts',
    labels: {
        singular: 'Post',
        plural: 'Posts',
    },
    admin: {
        useAsTitle: 'title',
        group: 'Blog',
        defaultColumns: ['title', 'publishedDate'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'excerpt',
            label: 'Excerpt',
            type: 'textarea',
            localized: true,
            admin: {
                description: 'Short summary shown in blog listings',
            },
        },
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
            editor: lexicalEditor(),
            required: true,
            localized: true,
        },
        {
            name: 'categories',
            label: 'Categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
        },
        {
            name: 'publishedDate',
            label: 'Published Date',
            type: 'date',
            required: true,
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        slugField('title'),
    ],
    hooks: {
        afterChange: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                revalidatePath('/blog')
                if (doc.slug) {
                    revalidatePath(`/blog/${doc.slug}`)
                }
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
    defaultSort: '-publishedDate',
}
