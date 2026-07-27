import type { Field } from 'payload'
import { formatSlug } from '@/utils/formatSlug'

export const slugField = (fieldToUse: string = 'name', localized: boolean = false): Field => ({
    name: 'slug',
    label: 'Slug',
    type: 'text',
    required: true,
    unique: true,
    index: true,
    localized,
    admin: {
        position: 'sidebar',
        components: {
            Field: '@/components/SlugComponent',
        },
    },
    hooks: {
        beforeValidate: [
            formatSlug(fieldToUse),
        ],
    },
})
