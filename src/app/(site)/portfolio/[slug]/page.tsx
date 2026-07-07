import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Media, Technology } from "@/payload-types"
import { getSiteSettings } from "@/lib/payload"

interface Props {
    params: Promise<{ slug: string }>
}

const FALLBACK_IMAGE = "https://place-hold.it/1920x1080"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'projects',
        where: { slug: { equals: slug } },
        limit: 1,
    })

    const project = result.docs[0]

    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: `${project.name} | Portfolio`,
        description: `Details about the ${project.name} project.`,
    }
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'projects',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 2,
    })

    const project = result.docs[0]

    if (!project) {
        notFound()
    }

    const settings = await getSiteSettings()
    const contactEmail = settings.social?.email

    const company = project.company && typeof project.company !== 'string' ? project.company : null
    const releaseYear = project.releaseDate ? new Date(project.releaseDate).getFullYear() : null
    const techNames = project.technologies
        ?.map((t) => (t as Technology).name)
        .filter(Boolean) || []
    const thumbnail = project.thumbnail && typeof project.thumbnail !== 'string'
        ? (project.thumbnail as Media).url || FALLBACK_IMAGE
        : FALLBACK_IMAGE

    // Next case study: the one following this project by release date (wraps around).
    const all = await payload.find({
        collection: 'projects',
        sort: '-releaseDate',
        limit: 100,
        depth: 1,
    })
    const currentIndex = all.docs.findIndex((p) => p.id === project.id)
    const nextProject = all.docs.length > 1
        ? all.docs[(currentIndex + 1) % all.docs.length]
        : null
    const nextThumbnail = nextProject?.thumbnail && typeof nextProject.thumbnail !== 'string'
        ? (nextProject.thumbnail as Media).url || FALLBACK_IMAGE
        : FALLBACK_IMAGE

    return (
        <main className="min-h-screen">

            {/* CASE HEADER */}
            <div className="pt-36 pb-16 relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ background: 'radial-gradient(900px 420px at 18% -10%, rgba(37,84,58,0.3), transparent 70%)' }}
                ></div>
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <Link
                        href="/portfolio"
                        className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#dfe5e0]/45 hover:text-[#9be8b8] transition-colors duration-300"
                    >
                        ← All Projects
                    </Link>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-16 mt-10">
                        <div>
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-5">
                                Case Study{company ? ` — ${company.name}` : ''}
                            </div>
                            <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-[96px] leading-none text-[#f2f4f0]">
                                {project.name}<span className="text-[#46d386]">.</span>
                            </h1>
                        </div>
                        {project.public_link && (
                            <a
                                href={project.public_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono font-medium text-[11px] tracking-[0.16em] uppercase text-[#9be8b8] border border-[#9be8b8]/35 px-6 py-3.5 rounded-sm hover:bg-[#9be8b8]/10 transition-colors duration-300 shrink-0"
                            >
                                Visit Live Site ↗
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* META BAR */}
            <div className="border-t border-b border-[#9be8b8]/8">
                <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4">
                    <div className="py-7 pr-8 lg:border-r border-[#9be8b8]/8">
                        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40 mb-2">Client</div>
                        <div className="font-heading font-medium text-sm text-[#f2f4f0]">{company?.name || 'Confidential'}</div>
                    </div>
                    <div className="py-7 px-0 lg:px-8 lg:border-r border-[#9be8b8]/8">
                        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40 mb-2">Role</div>
                        <div className="font-heading font-medium text-sm text-[#f2f4f0]">Architecture &amp; full build</div>
                    </div>
                    <div className="py-7 pr-8 lg:px-8 lg:border-r border-[#9be8b8]/8">
                        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40 mb-2">Year</div>
                        <div className="font-heading font-medium text-sm text-[#f2f4f0]">{releaseYear || '—'}</div>
                    </div>
                    <div className="py-7 px-0 lg:px-8">
                        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40 mb-2">Stack</div>
                        <div className="font-heading font-medium text-sm text-[#f2f4f0]">{techNames.slice(0, 3).join(' · ') || '—'}</div>
                    </div>
                </div>
            </div>

            {/* HERO IMAGE */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="relative rounded overflow-hidden border border-[#9be8b8]/12">
                    <img
                        src={thumbnail}
                        alt={project.name}
                        className="w-full h-[360px] md:h-[620px] object-cover grayscale brightness-[0.75]"
                    />
                    {/* Emerald tint — blends real screenshots into the theme */}
                    <div className="absolute inset-0 bg-[#25543a]/60 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-[#0a0d0b]/30 pointer-events-none"></div>
                </div>
            </div>

            {/* OVERVIEW */}
            <div className="mx-auto max-w-7xl px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="lg:col-span-5">
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-5">
                        01 — Overview
                    </div>
                    <h2 className="font-serif font-medium text-4xl md:text-[44px] leading-[1.1] text-[#f2f4f0]">
                        About the project<span className="text-[#46d386]">.</span>
                    </h2>
                </div>
                <div className="lg:col-span-7">
                    {project.content && (
                        <div className="prose prose-invert max-w-none font-heading text-[15px] leading-[1.8] text-[#dfe5e0]/65 prose-p:text-[#dfe5e0]/65 prose-headings:font-serif prose-headings:text-[#f2f4f0]">
                            <RichText data={project.content} />
                        </div>
                    )}
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 border-t border-[#9be8b8]/8 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ background: 'radial-gradient(700px 400px at 50% 100%, rgba(37,84,58,0.2), transparent 70%)' }}
                ></div>
                <div className="relative z-10 px-6">
                    <div className="font-serif font-medium text-4xl md:text-[64px] leading-[1.05] text-[#f2f4f0]">
                        Want results like these<span className="italic text-[#9be8b8]">?</span>
                    </div>
                    {contactEmail && (
                        <a
                            href={`mailto:${contactEmail}`}
                            className="inline-block mt-9 font-mono font-medium text-[15px] tracking-[0.08em] text-[#dfe5e0] border-b border-[#9be8b8]/40 pb-1.5 hover:text-[#9be8b8] hover:border-[#9be8b8] transition-colors duration-300"
                        >
                            {contactEmail}
                        </a>
                    )}
                </div>
            </div>

            {/* NEXT PROJECT */}
            {nextProject && (
                <Link
                    href={`/portfolio/${nextProject.slug}`}
                    className="relative h-[280px] md:h-[340px] overflow-hidden border-t border-[#9be8b8]/8 block group"
                >
                    <img
                        src={nextThumbnail}
                        alt={nextProject.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-[0.4] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#25543a]/70 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-[#0a0d0b]/40 pointer-events-none"></div>
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, rgba(6,9,7,0.95) 20%, rgba(6,9,7,0.55) 70%)' }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-center">
                        <div className="mx-auto max-w-7xl px-6 w-full">
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-3.5">
                                Next Case Study
                            </div>
                            <div className="font-serif font-medium text-4xl md:text-[56px] text-[#f2f4f0] group-hover:text-[#9be8b8] transition-colors duration-300">
                                {nextProject.name} →
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </main>
    )
}
