import { getPayload } from 'payload'
import config from '@payload-config'
import { locales } from '@/i18n/config'
import { getSiteSettings } from '@/lib/payload'
import { byLocale, type Localized } from '@/lib/slugs'

// Debe vivir en la raíz de `app`, no dentro de `(site)`: el catch-all
// `[...notFound]` que sirve el 404 le ganaría a la ruta y devolvería un 404,
// que es exactamente lo que le pasaba a `robots.txt`.
//
// Y debe ser dinámico: lee proyectos y posts del CMS, y el build de Docker sólo
// tiene un DATABASE_URL de relleno.
export const dynamic = 'force-dynamic'

const baseUrl = 'https://alejandroreyna.com'

type ContentDoc = {
    slug: Localized<string>
    name?: Localized<string>
    title?: Localized<string>
    excerpt?: Localized<string>
}

// El título de un proyecto no está localizado y el de un post sí, así que se
// resuelven igual: se normalizan ambos y se toma el idioma que toca.
const entryFor = (doc: ContentDoc, locale: string, pathPrefix: string): string | null => {
    const slug = byLocale(doc.slug)[locale]
    if (!slug) return null

    const label = byLocale(doc.title)[locale] || byLocale(doc.name)[locale] || slug
    const excerpt = byLocale(doc.excerpt)[locale]
    const summary = excerpt ? `: ${excerpt.replace(/\s+/g, ' ').trim().slice(0, 160)}` : ''

    return `- [${label}](${baseUrl}${pathPrefix}/${slug})${summary}`
}

// Cada idioma es una sección propia. Un documento sin traducir simplemente no
// aparece bajo el idioma que le falta, en lugar de listarse con una URL muerta.
const contentSection = (locale: string, projects: ContentDoc[], posts: ContentDoc[]): string => {
    const projectLines = projects
        .map((doc) => entryFor(doc, locale, '/portfolio'))
        .filter(Boolean)
    const postLines = posts.map((doc) => entryFor(doc, locale, '/blog')).filter(Boolean)

    if (projectLines.length === 0 && postLines.length === 0) return ''

    const label = locale === 'es' ? 'Spanish' : 'English'
    const blocks = [`## Content (${label})`]

    if (projectLines.length > 0) blocks.push(`### Case studies\n\n${projectLines.join('\n')}`)
    if (postLines.length > 0) blocks.push(`### Blog posts\n\n${postLines.join('\n')}`)

    return blocks.join('\n\n')
}

export async function GET() {
    const payload = await getPayload({ config })

    const [settings, projects, posts] = await Promise.all([
        getSiteSettings(),
        payload.find({ collection: 'projects', limit: 200, depth: 0, locale: 'all' }),
        payload.find({ collection: 'posts', limit: 200, depth: 0, locale: 'all' }),
    ])

    const social = settings.social ?? {}
    const links = [
        social.email ? `- Email: ${social.email}` : null,
        social.linkedin ? `- LinkedIn: ${social.linkedin}` : null,
        social.github ? `- GitHub: ${social.github}` : null,
    ].filter(Boolean)

    // El contenido base va siempre en inglés: es el idioma por defecto del sitio
    // y el que un modelo espera al leer un llms.txt. Las traducciones se agrupan
    // abajo, una sección por idioma.
    const sections = [
        '# Alejandro Reyna',
        '> Senior Software Engineer based in Guatemala, working remotely. Builds product-facing web applications end to end: React and Next.js on the front end, Python, Django and Node.js on the back end, deployed on AWS and Google Cloud.',
        `## About

This is the personal site and portfolio of Alejandro Reyna. It holds case studies of shipped
projects, a blog, and a way to get in touch. Content is published in English and Spanish; each
language has its own URL for the same document, listed separately below.`,
        `## Stack

TypeScript, React, Next.js, Python, Django, Node.js, AWS.`,
        `## Main pages

- [Home](${baseUrl}): introduction, selected work and current availability.
- [Portfolio](${baseUrl}/portfolio): case studies of shipped projects.
- [Blog](${baseUrl}/blog): writing on engineering and adjacent topics.
- [Contact](${baseUrl}/contact): ways to start a conversation.`,
        links.length > 0 ? `## Contact\n\n${links.join('\n')}` : '',
        ...locales.map((locale) =>
            contentSection(
                locale,
                projects.docs as unknown as ContentDoc[],
                posts.docs as unknown as ContentDoc[],
            ),
        ),
    ]

    const body = sections.filter(Boolean).join('\n\n') + '\n'

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=0, must-revalidate',
        },
    })
}
