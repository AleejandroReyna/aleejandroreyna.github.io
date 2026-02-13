import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Companies } from './collections/Companies'
import { ExperienceDetails } from './collections/ExperienceDetails'
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
    },
    collections: [Users, Media, Companies, ExperienceDetails],
    globals: [SiteSettings],
    editor: lexicalEditor(),
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
