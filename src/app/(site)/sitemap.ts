import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { locales } from '@/i18n/config'

// Queries Payload for live project/post slugs, so it must run per-request
// against the real database rather than being prerendered at build time
// (the Docker build only has a placeholder DATABASE_URL).
export const dynamic = 'force-dynamic'

const baseUrl = 'https://alejandroreyna.com'

// Slugs are localized (each language has its own URL for the same doc), so
// with locale: 'all' Payload returns the slug field as { en: '...', es: '...' }
// instead of a single string.
type LocalizedSlugDoc = { updatedAt?: string | null; slug: Record<string, string> }

const buildLocalizedRoutes = (
    docs: LocalizedSlugDoc[],
    pathPrefix: string,
    priority: number,
): MetadataRoute.Sitemap =>
    docs.flatMap((doc) => {
        const availableLocales = locales.filter((locale) => doc.slug?.[locale])
        const languages = Object.fromEntries(
            availableLocales.map((locale) => [locale, `${baseUrl}${pathPrefix}/${doc.slug[locale]}`]),
        )

        return availableLocales.map((locale) => ({
            url: `${baseUrl}${pathPrefix}/${doc.slug[locale]}`,
            lastModified: doc.updatedAt ? new Date(doc.updatedAt) : new Date(),
            changeFrequency: 'monthly' as const,
            priority,
            alternates: { languages },
        }))
    })

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const payload = await getPayload({ config })

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]

    const [projects, posts] = await Promise.all([
        payload.find({ collection: 'projects', limit: 200, depth: 0, locale: 'all' }),
        payload.find({ collection: 'posts', limit: 200, depth: 0, locale: 'all' }),
    ])

    const projectRoutes = buildLocalizedRoutes(
        projects.docs as unknown as LocalizedSlugDoc[],
        '/portfolio',
        0.6,
    )
    const postRoutes = buildLocalizedRoutes(
        posts.docs as unknown as LocalizedSlugDoc[],
        '/blog',
        0.6,
    )

    return [...staticRoutes, ...projectRoutes, ...postRoutes]
}
