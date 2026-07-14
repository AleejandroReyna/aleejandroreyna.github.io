import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale, LOCALE_COOKIE, type Locale } from '@/i18n/config'

// Single-domain i18n: no URL prefix. On first visit (no cookie yet), pick a
// locale from Accept-Language and persist it; afterwards the cookie wins,
// so the language switcher (which just sets the cookie) sticks across nav.
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get('accept-language')
  if (!header) return defaultLocale
  const preferred = header.split(',').map((l) => l.split(';')[0].trim().slice(0, 2).toLowerCase())
  const match = preferred.find((l) => locales.includes(l as Locale))
  return (match as Locale) || defaultLocale
}

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(LOCALE_COOKIE)?.value
  if (existing && locales.includes(existing as Locale)) {
    return NextResponse.next()
  }

  const response = NextResponse.next()
  response.cookies.set(LOCALE_COOKIE, detectLocale(request), {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })
  return response
}

export const config = {
  matcher: ['/((?!api|admin|_next|.*\\..*).*)'],
}
