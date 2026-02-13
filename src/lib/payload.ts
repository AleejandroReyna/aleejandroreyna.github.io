import { getPayload } from 'payload'
import config from '@payload-config'

export async function getSiteSettings() {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return settings
}
