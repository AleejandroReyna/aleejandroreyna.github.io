import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
    slug: 'companies',
    labels: {
        singular: 'Company',
        plural: 'Companies',
    },
    admin: {
        useAsTitle: 'name',
        group: 'Experience',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Company Name',
            type: 'text',
            required: true,
        },
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'url',
            label: 'Website URL',
            type: 'text',
            admin: {
                description: 'Company website URL',
            },
        },
    ],
}
