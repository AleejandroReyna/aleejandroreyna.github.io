import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload"
import config from "@payload-config"
import * as Icons from "@icons-pack/react-simple-icons"
import { Technology, Media } from "@/payload-types"

export const Portfolio = async () => {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "projects",
    depth: 2,
    limit: 3,
    sort: "-releaseDate",
  })

  return (
    <section className="bg-gray-100 py-24 relative overflow-hidden" id="portfolio">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Selected Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project is a story written in code—a blend of technical precision and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {result.docs.map((project) => {
             const releaseYear = project.releaseDate ? new Date(project.releaseDate).getFullYear() : ''

             return (
              <article key={project.id} className="card bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all">
                <figure className="relative overflow-hidden h-48">
                  {project.thumbnail && typeof project.thumbnail !== 'string' ? (
                     <Image
                        src={(project.thumbnail as Media).url!}
                        alt={project.name}
                        fill
                        className="object-cover"
                     />
                  ) : (
                    <img
                      src="https://place-hold.it/400x250"
                      alt="Placeholder"
                      className="object-cover h-full w-full"
                    />
                  )}
                  {releaseYear && (
                    <div className="absolute top-4 right-4">
                      <span className="badge bg-gray-200 border-gray-300 text-gray-700">{releaseYear}</span>
                    </div>
                  )}
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-gray-900">{project.name}</h3>
                  {project.company && typeof project.company !== 'string' && (
                      <p className="text-gray-700">
                         {project.company.name}
                      </p>
                  )}

                  <div className="my-4">
                    <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                       {project.technologies?.map((techInput) => {
                          const tech = techInput as Technology
                          if (tech.icon) {
                              const IconComponent = (Icons as any)[tech.icon]
                              if (IconComponent) {
                                  return <IconComponent key={tech.id} size={24} className="hover:scale-110 transition-all cursor-pointer" color="default" title={tech.name} />
                              }
                          }
                          return <span key={tech.id} className="badge badge-neutral">{tech.name}</span>
                      })}
                    </div>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <Link href={`/portfolio/${project.slug}`} className="btn btn-sm btn-outline">
                        See details
                    </Link>
                  </div>
                </div>
              </article>
             )
          })}

        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
            <Link href="/portfolio" className="btn btn-outline btn-lg gap-2 text-gray-700 border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-500 transition-all">
              View All Projects
              <ExternalLink size={20} />
            </Link>
        </div>
      </div>
    </section>
  );
};
