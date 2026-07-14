import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getTranslations } from "next-intl/server"

import { Category } from "@/payload-types"
import { getSiteSettings } from "@/lib/payload"
import { getLocale } from "@/lib/locale"
import { AnimateIn } from "@/components/ds/AnimateIn"

interface Props {
    params: Promise<{ slug: string }>
}

const formatDate = (dateStr: string, locale: string) =>
    new Date(dateStr).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
        limit: 1,
    })

    const post = result.docs[0]

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.title} | Blog`,
        description: post.excerpt || `Read ${post.title} on the blog.`,
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const t = await getTranslations('postDetail')
    const locale = await getLocale()
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 2,
        locale,
    })

    const post = result.docs[0]

    if (!post) {
        notFound()
    }

    const settings = await getSiteSettings()
    const contactEmail = settings.social?.email

    const postCategories = post.categories
        ?.map((c) => (c as Category).name)
        .filter(Boolean) || []

    // Next post: the one following this one by published date (wraps around).
    const all = await payload.find({
        collection: 'posts',
        sort: '-publishedDate',
        limit: 100,
        depth: 0,
        locale,
    })
    const currentIndex = all.docs.findIndex((p) => p.id === post.id)
    const nextPost = all.docs.length > 1
        ? all.docs[(currentIndex + 1) % all.docs.length]
        : null

    return (
        <main className="min-h-screen">

            {/* POST HEADER */}
            <div className="pt-36 pb-16 relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ background: 'radial-gradient(900px 420px at 18% -10%, rgba(37,84,58,0.3), transparent 70%)' }}
                ></div>
                <div className="mx-auto max-w-4xl px-6 relative z-10">
                    <AnimateIn>
                    <Link
                        href="/blog"
                        className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#dfe5e0]/45 hover:text-[#9be8b8] transition-colors duration-300"
                    >
                        {t('allPosts')}
                    </Link>
                    <div className="flex items-center gap-4 mt-10 mb-5">
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386]">
                            {formatDate(post.publishedDate, locale)}
                        </span>
                        {postCategories.length > 0 && (
                            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#dfe5e0]/45">
                                {postCategories.join(' · ')}
                            </span>
                        )}
                    </div>
                    <h1 className="font-serif font-medium text-5xl md:text-7xl leading-[1.05] text-[#f2f4f0]">
                        {post.title}
                    </h1>
                    </AnimateIn>
                </div>
            </div>

            {/* CONTENT */}
            <div className="mx-auto max-w-4xl px-6 pb-24">
                <AnimateIn delay={0.15}>
                    {post.content && (
                        <div className="prose prose-invert max-w-none font-heading text-[15px] leading-[1.8] text-[#dfe5e0]/65 prose-p:text-[#dfe5e0]/65 prose-headings:font-serif prose-headings:text-[#f2f4f0]">
                            <RichText data={post.content} />
                        </div>
                    )}
                </AnimateIn>
            </div>

            {/* CTA */}
            <div className="py-24 border-t border-[#9be8b8]/8 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ background: 'radial-gradient(700px 400px at 50% 100%, rgba(37,84,58,0.2), transparent 70%)' }}
                ></div>
                <AnimateIn className="relative z-10 px-6">
                    <div className="font-serif font-medium text-4xl md:text-[56px] leading-[1.05] text-[#f2f4f0]">
                        {t('ctaTitle')}<span className="italic text-[#9be8b8]">?</span>
                    </div>
                    {contactEmail && (
                        <a
                            href={`mailto:${contactEmail}`}
                            className="inline-block mt-9 font-mono font-medium text-[15px] tracking-[0.08em] text-[#dfe5e0] border-b border-[#9be8b8]/40 pb-1.5 hover:text-[#9be8b8] hover:border-[#9be8b8] transition-colors duration-300"
                        >
                            {contactEmail}
                        </a>
                    )}
                </AnimateIn>
            </div>

            {/* NEXT POST */}
            {nextPost && (
                <Link
                    href={`/blog/${nextPost.slug}`}
                    className="block relative py-16 overflow-hidden border-t border-[#9be8b8]/8 group"
                >
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-3.5">
                            {t('nextPost')}
                        </div>
                        <div className="font-serif font-medium text-3xl md:text-[42px] text-[#f2f4f0] group-hover:text-[#9be8b8] transition-colors duration-300">
                            {nextPost.title} →
                        </div>
                    </div>
                </Link>
            )}
        </main>
    )
}
