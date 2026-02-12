import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    label: 'Site Settings',
    access: {
        read: () => true,
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
