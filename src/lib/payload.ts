import { getPayload } from 'payload'
import config from '@payload-config'

export async function getSiteSettings() {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return settings
}

export async function getExperienceDetails() {
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'experience-details',
        sort: '-startDate',
        limit: 100,
        depth: 2,
    })
    return result.docs
}
