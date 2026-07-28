import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { revalidatePath } from 'next/cache'
import { slugField } from '@/fields/slug'

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
            name: 'metaTitle',
            label: 'Meta Title (SEO)',
            type: 'text',
            localized: true,
            admin: {
                description: 'Optional. Falls back to the Project Name above if left blank. Keep it under ~60 characters so Google doesn\'t truncate it in search results.',
            },
        },
        {
            // Deliberately not called `role`: SlugComponent falls back to a
            // field of that name when auto-generating slugs, and this one ships
            // with a default value, so a brand-new project would briefly slug
            // itself from the role text before the name is typed.
            name: 'projectRole',
            label: 'Role',
            type: 'text',
            localized: true,
            // Payload hands the active locale to a defaultValue function, so a
            // new project starts with the right wording per language instead of
            // one hardcoded string leaking into the other.
            defaultValue: ({ locale }) =>
                locale === 'es'
                    ? 'Arquitectura, desarrollo y traspaso'
                    : 'Architecture, build & handover',
            admin: {
                description:
                    'Shown in the project meta bar. Defaults per language; override for projects where the role was different.',
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
            localized: true,
        },
        slugField('name', true),
    ],
    hooks: {
        afterChange: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                revalidatePath('/portfolio')
                if (doc.slug) {
                    revalidatePath(`/portfolio/${doc.slug}`)
                }
                return doc
            },
        ],
        afterDelete: [
            ({ doc }) => {
                revalidatePath('/', 'layout')
                revalidatePath('/portfolio')
                return doc
            },
        ],
    },
    defaultSort: '-releaseDate',
}
