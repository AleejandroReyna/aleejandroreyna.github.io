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
            name: 'metaTitle',
            label: 'Meta Title (SEO)',
            type: 'text',
            localized: true,
            admin: {
                description: 'Optional. Falls back to the Title above if left blank. Keep it under ~60 characters so Google doesn\'t truncate it in search results — useful when the real title is long or stylistic.',
            },
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
