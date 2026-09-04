import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'
import { findBySlugAnyLocale } from '@/lib/payload'

export const alt = 'Alejandro Reyna — Blog'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

// Reads the post from the CMS, so it can't be prerendered during the Docker
// build (placeholder DATABASE_URL) — same reason the sitemap is dynamic.
export const dynamic = 'force-dynamic'

// params es una Promise en Next 15+. Leerlo como objeto plano dejaba el slug
// en undefined, y la consulta sin filtro devolvía el post más reciente en el
// primer locale probado: todas las tarjetas salían idénticas.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const { doc: post } = await findBySlugAnyLocale('posts', slug)

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
