import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'
import { findBySlugAnyLocale } from '@/lib/payload'

export const alt = 'Alejandro Reyna — Portfolio'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export const dynamic = 'force-dynamic'

export default async function Image({ params }: { params: { slug: string } }) {
    const { doc: project } = await findBySlugAnyLocale('projects', params.slug)

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
