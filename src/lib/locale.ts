import { cookies } from 'next/headers'
import { locales, defaultLocale, LOCALE_COOKIE, type Locale } from '@/i18n/config'

// Server-side helper for anywhere that isn't a next-intl message lookup —
// namely Payload queries, which need the raw locale string for `locale:`.
export const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value
  return locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : defaultLocale
}
