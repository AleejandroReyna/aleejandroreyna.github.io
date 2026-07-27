import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

// Queries Payload for live project/post slugs, so it must run per-request
// against the real database rather than being prerendered at build time
// (the Docker build only has a placeholder DATABASE_URL).
export const dynamic = 'force-dynamic'

const baseUrl = 'https://alejandroreyna.com'

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
        payload.find({ collection: 'projects', limit: 200, depth: 0 }),
        payload.find({ collection: 'posts', limit: 200, depth: 0 }),
    ])

    const projectRoutes: MetadataRoute.Sitemap = projects.docs.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    const postRoutes: MetadataRoute.Sitemap = posts.docs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [...staticRoutes, ...projectRoutes, ...postRoutes]
}
