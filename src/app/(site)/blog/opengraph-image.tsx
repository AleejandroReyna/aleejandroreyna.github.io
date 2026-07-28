import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'

export const alt = 'Writing — Alejandro Reyna'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
    return new ImageResponse(
        <OgCard
            label="The Journal"
            title="Writing."
            footer="Architecture · Cloud systems"
        />,
        { ...size, fonts: await ogFontConfig() },
    )
}
