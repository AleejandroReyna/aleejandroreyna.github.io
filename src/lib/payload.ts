import { getPayload } from 'payload'
import config from '@payload-config'
import type { CollectionSlug, TypedLocale } from 'payload'
import { locales } from '@/i18n/config'

// Slugs are localized (each language has its own), so a URL's locale can't
// be assumed from the visitor's cookie — a Spanish-slug URL opened without
// the "es" cookie would 404. Instead, resolve the locale directly from the
// slug itself by checking each configured locale until one matches.
export async function findBySlugAnyLocale<T extends CollectionSlug>(
    collection: T,
    slug: string,
    depth: number = 0,
) {
    const payload = await getPayload({ config })

    for (const locale of locales) {
        const result = await payload.find({
            collection,
            where: { slug: { equals: slug } },
            limit: 1,
            depth,
            locale: locale as TypedLocale,
        })

        if (result.docs[0]) {
            return { doc: result.docs[0], locale: locale as TypedLocale }
        }
    }

    return { doc: null, locale: undefined }
}

export async function getSiteSettings() {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return settings
}

export async function getExperienceDetails(locale?: TypedLocale) {
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'experience-details',
        sort: '-startDate',
        limit: 100,
        depth: 2,
        locale,
    })
    return result.docs
}
