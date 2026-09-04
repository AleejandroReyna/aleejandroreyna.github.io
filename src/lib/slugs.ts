import { locales } from '@/i18n/config'

// Con `locale: 'all'` Payload devuelve los campos localizados como
// { en: '...', es: '...' }. Un documento guardado antes de que el campo pasara
// a ser localizado conserva en la base un valor plano, no un objeto, y ese caso
// hay que contemplarlo: sin ello el documento se caía del listado en silencio.
export type Localized<T> = Record<string, T> | T | null | undefined

/**
 * Normaliza un campo localizado a un objeto por idioma. Un valor plano es el
 * mismo para todos los idiomas, así que se expande a todos ellos: representa un
 * único contenido compartido, no una versión por idioma.
 */
export const byLocale = <T,>(value: Localized<T>): Record<string, T> => {
    if (value === null || value === undefined) return {}
    if (typeof value === 'object' && !Array.isArray(value)) {
        return value as Record<string, T>
    }
    return Object.fromEntries(locales.map((locale) => [locale, value as T]))
}
