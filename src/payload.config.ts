import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Companies } from './collections/Companies'
import { ExperienceDetails } from './collections/ExperienceDetails'
import { Technologies } from './collections/Technologies'
import { Projects } from './collections/Projects'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Testimonials } from './collections/Testimonials'
import { Capabilities } from './collections/Capabilities'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import { SiteSettings } from './globals/SiteSettings'
import { envs } from './lib/envs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        meta: {
            title: 'Alejandro Reyna — Admin',
            titleSuffix: ' — Alejandro Reyna',
            icons: [
                { url: '/images/payload-favicon.svg', type: 'image/svg+xml' },
            ],
        },
        components: {
            graphics: {
                Logo: '@/components/payload/AdminLogo',
                Icon: '@/components/payload/AdminIcon',
            },
        },
    },
    collections: [Users, Media, Companies, ExperienceDetails, Technologies, Projects, ContactSubmissions, Testimonials, Capabilities, Categories, Posts],
    globals: [SiteSettings],
    localization: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        fallback: true,
    },
    editor: lexicalEditor(),
    // Only wired up when SMTP credentials are present. Without them Payload
    // falls back to logging mail to the console, which is what we want in
    // local dev and during the Docker build (placeholder envs only).
    ...(envs.smtp.isConfigured
        ? {
              email: nodemailerAdapter({
                  defaultFromAddress: envs.smtp.fromAddress!,
                  defaultFromName: envs.smtp.fromName,
                  transportOptions: {
                      host: envs.smtp.host,
                      port: envs.smtp.port,
                      // 465 is implicit TLS; 587 upgrades via STARTTLS.
                      secure: envs.smtp.port === 465,
                      auth: {
                          user: envs.smtp.user,
                          pass: envs.smtp.pass,
                      },
                  },
              }),
          }
        : {}),
    secret: envs.payloadSecret,
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: envs.databaseUrl,
    }),
    sharp,
    plugins: [
        vercelBlobStorage({
            token: envs.blobToken,
            collections: {
                media: {
                    prefix: envs.uploadPrefix,
                    disablePayloadAccessControl: true,
                },
            },
        }),
    ],
})
