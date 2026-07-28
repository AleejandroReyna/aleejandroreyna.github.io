import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'

export const alt = 'All projects — Alejandro Reyna'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
    return new ImageResponse(
        <OgCard
            label="The Archive"
            title="All projects."
            footer="86+ shipped since 2013"
        />,
        { ...size, fonts: await ogFontConfig() },
    )
}
