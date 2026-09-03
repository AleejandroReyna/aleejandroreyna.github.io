import type { FieldHook } from 'payload'

export const format = (val: string): string =>
    val
        // Separa los diacríticos de su letra base para poder descartarlos sin
        // perder la letra: "ó" -> "o", "ñ" -> "n". Sin esto se borraban enteros
        // y "Diseño" acababa como "diseo".
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        // Un separador al principio o al final no aporta nada a la URL.
        .replace(/^-+|-+$/g, '')

export const formatSlug =
    (fallback: string): FieldHook =>
    ({ value, originalDoc, data }) => {
        if (typeof value === 'string' && value.length > 0) {
            return format(value)
        }
        const fallbackData = data?.[fallback] || originalDoc?.[fallback]

        if (fallbackData && typeof fallbackData === 'string') {
            return format(fallbackData)
        }

        return value
    }
