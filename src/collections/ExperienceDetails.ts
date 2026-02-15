import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ExperienceDetails: CollectionConfig = {
    slug: 'experience-details',
    labels: {
        singular: 'Experience Detail',
        plural: 'Experience Details',
    },
    admin: {
        useAsTitle: 'role',
        group: 'Experience',
        defaultColumns: ['role', 'company', 'startDate', 'location'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'company',
            label: 'Company',
            type: 'relationship',
            relationTo: 'companies',
            required: true,
        },
        {
            name: 'role',
            label: 'Role / Position',
            type: 'text',
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'startDate',
                    label: 'Start Date',
                    type: 'date',
                    required: true,
                    admin: {
                        date: {
                            pickerAppearance: 'monthOnly',
                            displayFormat: 'MMMM yyyy',
                        },
                        width: '50%',
                    },
                },
                {
                    name: 'endDate',
                    label: 'End Date',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: 'monthOnly',
                            displayFormat: 'MMMM yyyy',
                        },
                        description: 'Leave empty if current position',
                        width: '50%',
                    },
                },
            ],
        },
        {
            name: 'location',
            label: 'Location Type',
            type: 'select',
            required: true,
            defaultValue: 'remote',
            options: [
                { label: 'Remote', value: 'remote' },
                { label: 'On-site', value: 'onsite' },
            ],
        },
        {
            name: 'content',
            label: 'Description',
            type: 'richText',
            editor: lexicalEditor(),
        },
        {
            name: 'achievements',
            label: 'Key Achievements',
            type: 'array',
            fields: [
                {
                    name: 'achievement',
                    label: 'Achievement',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
    hooks: {
        afterChange: [
            ({ doc }) => {
                revalidatePath('/')
                return doc
            },
        ],
        afterDelete: [
            ({ doc }) => {
                revalidatePath('/')
                return doc
            },
        ],
    },
    defaultSort: '-startDate',
}
