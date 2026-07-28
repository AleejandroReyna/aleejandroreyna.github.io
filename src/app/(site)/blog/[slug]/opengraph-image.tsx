import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'
import { findBySlugAnyLocale } from '@/lib/payload'

export const alt = 'Alejandro Reyna — Blog'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

// Reads the post from the CMS, so it can't be prerendered during the Docker
// build (placeholder DATABASE_URL) — same reason the sitemap is dynamic.
export const dynamic = 'force-dynamic'

export default async function Image({ params }: { params: { slug: string } }) {
    const { doc: post } = await findBySlugAnyLocale('posts', params.slug)

    return new ImageResponse(
        <OgCard
            label="Blog"
            title={post?.title ?? 'Alejandro Reyna.'}
            footer={
                post?.publishedDate
                    ? new Date(post.publishedDate).toLocaleDateString('en', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                      })
                    : undefined
            }
        />,
        { ...size, fonts: await ogFontConfig() },
    )
}
