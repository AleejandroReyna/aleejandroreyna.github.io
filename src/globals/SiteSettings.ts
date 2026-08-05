import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    label: 'Site Settings',
    access: {
        read: () => true,
    },
    hooks: {
        afterChange: [
            () => {
                revalidatePath('/', 'layout')
            },
        ],
    },
    fields: [
        {
            name: 'social',
            label: 'Social & Contact Links',
            type: 'group',
            fields: [
                {
                    name: 'github',
                    label: 'GitHub',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'GitHub username or full URL',
                    },
                },
                {
                    name: 'linkedin',
                    label: 'LinkedIn',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'LinkedIn username or full URL',
                    },
                },
                {
                    name: 'instagram',
                    label: 'Instagram',
                    type: 'text',
                    admin: {
                        description: 'Instagram username (sin @)',
                    },
                },
                {
                    name: 'facebook',
                    label: 'Facebook',
                    type: 'text',
                    admin: {
                        description: 'Facebook page/profile slug',
                    },
                },
                {
                    name: 'tiktok',
                    label: 'TikTok',
                    type: 'text',
                    admin: {
                        description: 'TikTok username (sin @)',
                    },
                },
                {
                    name: 'calendly',
                    label: 'Calendly',
                    type: 'text',
                    admin: {
                        description: 'Calendly username or full URL',
                    },
                },
                {
                    name: 'email',
                    label: 'Contact Email',
                    type: 'email',
                    required: true,
                },
            ],
        },
    ],
}
