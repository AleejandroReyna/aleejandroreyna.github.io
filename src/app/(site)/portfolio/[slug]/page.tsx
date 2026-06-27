import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import * as Icons from "@icons-pack/react-simple-icons"
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Media, Technology } from "@/payload-types"
import { PageTitle } from "@/components/ds/PageTitle"

interface Props {
    params: Promise<{ slug: string }>
}

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

    return (
        <main className="bg-background min-h-screen pb-32">
            <PageTitle title={project.name} description="Project Details" />

            <section className="py-16 relative overflow-hidden bg-background">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-12 border border-secondary relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20] z-20"></div>
                        {project.thumbnail && typeof project.thumbnail !== 'string' ? (
                            <img
                                src={(project.thumbnail as Media).url!}
                                alt={project.name}
                                className="w-full h-auto object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                        ) : (
                            <div className="w-full h-[400px] bg-secondary/15 flex items-center justify-center">
                                <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">No Thumbnail Available</span>
                            </div>
                        )}
                        <div className="absolute inset-0 z-10 opacity-15 pointer-events-none mix-blend-screen" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 border-b border-secondary/50 pb-16">
                        <div className="lg:col-span-2 text-neutral-400 font-medium text-base md:text-lg leading-relaxed space-y-6">
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 uppercase tracking-tight">About the Project</h2>
                            {project.content && (
                                <div className="prose prose-invert max-w-none text-neutral-400 font-body">
                                    <RichText data={project.content} />
                                </div>
                            )}
                        </div>

                        <div className="space-y-8 bg-secondary/15 border border-secondary p-8 hover:border-[#092e20] transition-colors duration-300 relative group h-fit">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div>
                                <h3 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-[#092e20]"></span> Project Info
                                </h3>
                                <div className="space-y-4 text-sm">
                                    {project.company && typeof project.company !== 'string' && (
                                        <p className="flex justify-between items-center py-2 border-b border-secondary/30">
                                            <span className="font-bold text-neutral-500 uppercase tracking-widest text-[10px]">Client</span>
                                            <span className="font-bold text-foreground">{project.company.name}</span>
                                        </p>
                                    )}
                                    {project.releaseDate && (
                                        <p className="flex justify-between items-center py-2 border-b border-secondary/30">
                                            <span className="font-bold text-neutral-500 uppercase tracking-widest text-[10px]">Released</span>
                                            <span className="font-bold text-foreground">{new Date(project.releaseDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                        </p>
                                    )}
                                    {project.public_link && (
                                        <p className="flex justify-between items-center py-2 border-b border-secondary/30">
                                            <span className="font-bold text-neutral-500 uppercase tracking-widest text-[10px]">Live Site</span>
                                            <a href={project.public_link} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-neutral-300 transition-colors flex items-center gap-1.5 border-b border-white hover:border-neutral-300">
                                                Visit Link
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-[#092e20]"></span> Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.technologies?.map((techInput) => {
                                        const tech = techInput as Technology
                                        const IconComponent = tech.icon ? (Icons as any)[tech.icon] : null

                                        return (
                                            <div key={tech.id} className="flex items-center gap-2 bg-secondary/30 px-3 py-2 border border-secondary/50 hover:border-[#092e20] transition-colors duration-300 group/tech">
                                                {IconComponent && <div className="text-neutral-400 group-hover/tech:text-white transition-colors duration-300"><IconComponent size={20} title={tech.name} /></div>}
                                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover/tech:text-white transition-colors duration-300">{tech.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/portfolio" className="bg-transparent border border-secondary text-neutral-400 px-8 py-4 font-bold tracking-widest uppercase text-sm hover:border-[#092e20] hover:bg-[#092e20] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                            &larr; Back to Portfolio
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    )
}
