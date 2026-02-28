import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
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
        <main>
            <PageTitle title={project.name} description="Project Details" />

            <section className="py-16">
                <div className="mx-auto max-w-md md:max-w-4xl lg:max-w-4xl bg-base-100 shadow-xl rounded-xl overflow-hidden p-6 md:p-10">

                    <div className="mb-8">
                        {project.thumbnail && typeof project.thumbnail !== 'string' ? (
                            <Image
                                src={(project.thumbnail as Media).url!}
                                alt={project.name}
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        ) : (
                            <div className="w-full h-[400px] bg-base-200 rounded-lg flex items-center justify-center">
                                <span className="text-base-content/50">No Thumbnail Available</span>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-8">
                        <div className="md:col-span-2 prose max-w-none">
                            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                            {project.content && (
                                <RichText data={project.content} />
                            )}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg mb-2">Details</h3>
                                {project.company && typeof project.company !== 'string' && (
                                    <p className="mb-2">
                                        <span className="font-semibold">Company:</span> {project.company.name}
                                    </p>
                                )}
                                {project.public_link && (
                                    <p>
                                        <span className="font-semibold">Live Site:</span>{' '}
                                        <a href={project.public_link} target="_blank" rel="noopener noreferrer" className="link link-primary">
                                            Visit Link
                                        </a>
                                    </p>
                                )}
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies?.map((techInput) => {
                                        const tech = techInput as Technology
                                        const IconComponent = tech.icon ? (Icons as any)[tech.icon] : null

                                        return (
                                            <div key={tech.id} className="flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg">
                                                {IconComponent && <IconComponent size={20} />}
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/portfolio" className="btn btn-outline">
                            &larr; Back to Portfolio
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    )
}
