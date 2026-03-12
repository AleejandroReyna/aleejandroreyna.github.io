import type { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
    slug: 'technologies',
    labels: {
        singular: 'Technology',
        plural: 'Technologies',
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
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'icon',
            label: 'Icon (React Simple Icon name, e.g. SiReact)',
            type: 'text',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
        },
    ],
}
