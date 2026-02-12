import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Using Turbopack — no webpack config needed
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
