import { readFile } from 'fs/promises'
import path from 'path'

// Open Graph cards are 1200x630 — the size every platform crops from.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

// Satori (the renderer behind next/og) has no access to system fonts: every
// typeface must be handed over as a buffer. These are the site's real faces —
// Cormorant Garamond and IBM Plex Mono — as *static* instances. The variable
// versions (the ones with a [wght] axis) render badly under Satori, which
// ignores the axis and falls back to the default master.
//
// They live in public/ because the Dockerfile already copies that directory
// into the runtime image.
const fontPath = (file: string) => path.join(process.cwd(), 'public', 'fonts', file)

let cached: { serif: Buffer; mono: Buffer } | null = null

export async function loadOgFonts() {
    if (!cached) {
        const [serif, mono] = await Promise.all([
            readFile(fontPath('CormorantGaramond-Medium.ttf')),
            readFile(fontPath('IBMPlexMono-Medium.ttf')),
        ])
        cached = { serif, mono }
    }
    return cached
}

export const OG_COLORS = {
    bg: '#060907',
    accent: '#46d386',
    mint: '#9be8b8',
    text: '#f2f4f0',
    muted: '#8b9b91',
}

/**
 * The shared card. Satori supports only a subset of CSS — flexbox yes, grid no,
 * and every element that holds more than one child needs an explicit display.
 */
// Mirrors the tech ticker under the hero. Kept short so it stays legible at
// the ~500px width a card is actually rendered at in a feed.
const STACK = 'TypeScript · React · Next.js · Python · Django · Node.js · AWS'

export function OgCard({
    label,
    title,
    footer,
}: {
    label: string
    title: string
    footer?: string
}) {
    // Long CMS titles need a smaller face or they run out of card.
    const titleSize = title.length > 70 ? 62 : title.length > 45 ? 74 : 92

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: OG_COLORS.bg,
                padding: '58px 76px',
                position: 'relative',
            }}
        >
            {/* The hero's glow. Satori has no radial-gradient, so it is faked
                with two overlapping linear ones — a wide diagonal wash plus a
                tighter corner accent. */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    backgroundImage:
                        'linear-gradient(125deg, rgba(37,84,58,0.75) 0%, rgba(37,84,58,0.18) 32%, rgba(6,9,7,0) 62%)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: -140,
                    left: -100,
                    width: 700,
                    height: 480,
                    display: 'flex',
                    backgroundImage:
                        'linear-gradient(160deg, rgba(70,211,134,0.28) 0%, rgba(6,9,7,0) 70%)',
                }}
            />

            {/* Availability badge — the first thing on the real page */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: 13,
                        height: 13,
                        borderRadius: 13,
                        backgroundColor: OG_COLORS.accent,
                        marginRight: 16,
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        fontFamily: 'Mono',
                        fontSize: 21,
                        letterSpacing: 4,
                        color: OG_COLORS.accent,
                        textTransform: 'uppercase',
                        display: 'flex',
                    }}
                >
                    {label}
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    fontFamily: 'Serif',
                    fontSize: titleSize,
                    lineHeight: 1.05,
                    color: OG_COLORS.text,
                    letterSpacing: -1.5,
                    maxHeight: 300,
                    overflow: 'hidden',
                }}
            >
                {/* A trailing period is the site's signature mark, and it is
                    always emerald — never the same colour as the words. */}
                {title.endsWith('.') ? (
                    <span style={{ display: 'flex' }}>
                        {title.slice(0, -1)}
                        <span style={{ color: OG_COLORS.accent }}>.</span>
                    </span>
                ) : (
                    title
                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        fontFamily: 'Mono',
                        fontSize: 18,
                        letterSpacing: 1.2,
                        color: 'rgba(155,232,184,0.5)',
                        display: 'flex',
                        paddingBottom: 22,
                    }}
                >
                    {STACK}
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        borderTop: '1px solid rgba(155,232,184,0.18)',
                        paddingTop: 24,
                    }}
                >
                    <div style={{ fontFamily: 'Mono', fontSize: 24, color: OG_COLORS.mint }}>
                        alejandroreyna.com
                    </div>
                    <div style={{ fontFamily: 'Mono', fontSize: 20, color: OG_COLORS.muted }}>
                        {footer ?? 'Guatemala · Remote worldwide'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function ogFontConfig() {
    const { serif, mono } = await loadOgFonts()
    return [
        { name: 'Serif', data: serif as unknown as ArrayBuffer, style: 'normal' as const },
        { name: 'Mono', data: mono as unknown as ArrayBuffer, style: 'normal' as const },
    ]
}
