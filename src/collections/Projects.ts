import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { revalidatePath } from 'next/cache'

export const Projects: CollectionConfig = {
    slug: 'projects',
    labels: {
        singular: 'Project',
        plural: 'Projects',
    },
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Project Name',
            type: 'text',
            required: true,
        },
        {
            name: 'releaseDate',
            label: 'Release Date',
            type: 'date',
            required: true,
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'public_link',
            label: 'Public Link',
            type: 'text',
            required: true,
            admin: {
                description: 'Must be a real link in production',
            },
        },
        {
            name: 'company',
            label: 'Company',
            type: 'relationship',
            relationTo: 'companies',
        },
        {
            name: 'technologies',
            label: 'Technologies',
            type: 'relationship',
            relationTo: 'technologies',
            hasMany: true,
        },
        {
            name: 'thumbnail',
            label: 'Thumbnail',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
            editor: lexicalEditor(),
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
    ],
    hooks: {
        afterChange: [
            ({ doc }) => {
                revalidatePath('/portfolio')
                revalidatePath(`/portfolio/${doc.slug}`)
                return doc
            },
        ],
        afterDelete: [
            ({ doc }) => {
                revalidatePath('/portfolio')
                return doc
            },
        ],
    },
    defaultSort: '-releaseDate',
}
