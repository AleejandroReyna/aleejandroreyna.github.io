'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
    interface Window {
        turnstile?: {
            render: (el: HTMLElement, opts: Record<string, unknown>) => string
            reset: (id: string) => void
            remove: (id: string) => void
        }
    }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

// Cloudflare Turnstile widget. It injects a hidden `cf-turnstile-response`
// input into the surrounding form, which the server action verifies. Tokens
// are single-use, so change `resetKey` after every submission to get a fresh one.
export const Turnstile = ({ resetKey }: { resetKey?: unknown }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetId = useRef<string | null>(null)

    const render = () => {
        if (!siteKey || !window.turnstile || !containerRef.current || widgetId.current) return
        widgetId.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: 'dark',
        })
    }

    useEffect(() => {
        render()
        return () => {
            if (widgetId.current) window.turnstile?.remove(widgetId.current)
            widgetId.current = null
        }
    }, [])

    useEffect(() => {
        if (widgetId.current) window.turnstile?.reset(widgetId.current)
    }, [resetKey])

    if (!siteKey) return null

    return (
        <>
            <div ref={containerRef} className="min-h-[65px]" />
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="lazyOnload"
                onReady={render}
            />
        </>
    )
}
