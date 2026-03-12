import type { Field } from 'payload'
import { formatSlug } from '@/utils/formatSlug'

export const slugField = (fieldToUse: string = 'name'): Field => ({
    name: 'slug',
    label: 'Slug',
    type: 'text',
    required: true,
    unique: true,
    index: true,
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
