import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, ogFontConfig } from '@/lib/og'

export const alt = "Let's talk — Alejandro Reyna"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
    return new ImageResponse(
        <OgCard
            label="Contact"
            title="Let's talk."
            footer="Reply within 24 hours"
        />,
        { ...size, fonts: await ogFontConfig() },
    )
}
