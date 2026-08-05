import { MetadataRoute } from 'next'

// Debe vivir en la raíz de `app`, no dentro de `(site)`: desde el grupo de
// rutas Next no llegaba a registrar `/robots.txt` y respondía 404.
//
// Y debe ser dinámico. El catch-all `[...notFound]` que sirve el 404 del sitio
// es una ruta dinámica, y le gana a las rutas estáticas de metadata: con
// `robots.txt` prerenderizado, la petición terminaba cayendo en el 404.
// `sitemap.ts` ya era dinámico por otra razón, y por eso nunca se vio afectado.
export const dynamic = 'force-dynamic'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://alejandroreyna.com/sitemap.xml',
    }
}
