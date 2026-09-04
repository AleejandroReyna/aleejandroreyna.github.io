import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'
import { findBySlugAnyLocale } from '@/lib/payload'

export const alt = 'Alejandro Reyna — Portfolio'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export const dynamic = 'force-dynamic'

// params es una Promise en Next 15+. Leerlo como objeto plano dejaba el slug
// en undefined, y la consulta sin filtro devolvía el post más reciente en el
// primer locale probado: todas las tarjetas salían idénticas.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const { doc: project } = await findBySlugAnyLocale('projects', slug)

    return new ImageResponse(
        <OgCard
            label="Case Study"
            title={project?.name ?? 'Alejandro Reyna.'}
            footer={
                project?.releaseDate
                    ? String(new Date(project.releaseDate).getFullYear())
                    : undefined
            }
        />,
        { ...size, fonts: await ogFontConfig() },
    )
}
