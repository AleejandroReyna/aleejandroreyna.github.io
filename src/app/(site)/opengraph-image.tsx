import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'

export const alt = 'Alejandro Reyna — Senior Software Developer'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
    return new ImageResponse(
        <OgCard label="Senior Software Developer" title="Alejandro Reyna." />,
        { ...size, fonts: await ogFontConfig() },
    )
}
