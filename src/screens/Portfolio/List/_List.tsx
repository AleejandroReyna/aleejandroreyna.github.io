import Image from "next/image"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import * as Icons from "@icons-pack/react-simple-icons"
import { Technology, Media } from "@/payload-types"
import { ArrowRight } from "lucide-react"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const List = async ({ searchParams }: Props) => {
  const payload = await getPayload({ config })
  const page = typeof searchParams?.page === 'string' ? parseInt(searchParams.page, 10) : 1

  const techFilters = searchParams?.tech
  let techs: string[] = []
  if (Array.isArray(techFilters)) {
      techs = techFilters
  } else if (typeof techFilters === 'string') {
      techs = techFilters.split(',')
  }

  let where = {}
  if (techs.length > 0) {
      where = {
          'technologies.name': {
              in: techs
          }
      }
  }

  const result = await payload.find({
    collection: "projects",
    depth: 2,
    page,
    limit: 10,
    where,
  })

  return (
    <section>
      {result.docs.length === 0 && (
          <p className="text-neutral-400 font-medium bg-secondary/10 border border-secondary p-8 text-center uppercase tracking-widest text-xs">No projects found matching the selected filters.</p>
      )}

      {result.docs.map((project) => {
         const releaseYear = project.releaseDate ? new Date(project.releaseDate).getFullYear() : ''
         
         return (
          <article key={project.id} className="group bg-secondary/15 border border-secondary hover:border-[#092e20] transition-colors duration-300 relative flex flex-col md:flex-row mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <figure className="relative md:w-2/5 min-h-[240px] bg-secondary/35 border-b md:border-b-0 md:border-r border-secondary group-hover:border-[#092e20] transition-colors duration-300 overflow-hidden">
              {project.thumbnail && typeof project.thumbnail !== 'string' ? (
                 <img
                    src={(project.thumbnail as Media).url!}
                    alt={project.name}
                    className="object-cover h-full w-full grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                 />
              ) : (
                <img
                  src="https://place-hold.it/400x250"
                  alt="Placeholder"
                  className="object-cover h-full w-full grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                />
              )}
              {/* Tech overlay pattern */}
              <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
              
              {releaseYear && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2 py-1 bg-background/80 border border-[#092e20] text-[10px] font-bold text-white uppercase tracking-widest">{releaseYear}</span>
                </div>
              )}
            </figure>
            
            <div className="p-8 flex-grow flex flex-col justify-between relative z-10 bg-background/50 md:w-3/5">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-1 tracking-tight group-hover:text-white transition-colors duration-300">{project.name}</h2>
                {project.company && typeof project.company !== 'string' && (
                    <p className="text-xs font-medium text-neutral-400 mb-6 tracking-widest uppercase">Client // {project.company.name}</p>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-secondary/50 flex flex-wrap gap-4">
                {project.technologies?.map((techInput) => {
                    const tech = techInput as Technology
                    if (tech.icon) {
                        const IconComponent = (Icons as any)[tech.icon]
                        if (IconComponent) {
                            return <div key={tech.id} className="text-neutral-400 group-hover:text-foreground transition-colors duration-300"><IconComponent size={20} title={tech.name} /></div>
                        }
                    }
                    return <span key={tech.id} className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{tech.name}</span>
                })}
              </div>
              
              <div className="mt-8 flex justify-end">
                <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-white transition-colors duration-300 group/link bg-secondary/20 px-4 py-2 border border-secondary group-hover:border-[#092e20] hover:bg-[#092e20]">
                    See more <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
         )
      })}

      {result.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12 pt-8 border-t border-secondary/30">
            {Array.from({ length: result.totalPages }).map((_, i) => {
                const pageNum = i + 1
                const query = new URLSearchParams()
                if (techs.length > 0) query.set('tech', techs.join(','))
                query.set('page', pageNum.toString())

                return (
                    <Link
                        key={pageNum}
                        href={`/portfolio?${query.toString()}`}
                        className={`px-4 py-2 border text-xs font-bold transition-all duration-300 ${pageNum === result.page ? 'bg-[#092e20] border-[#092e20] text-white' : 'bg-transparent border-secondary text-neutral-400 hover:border-white hover:text-white'}`}
                    >
                        {pageNum}
                    </Link>
                )
            })}
        </div>
      )}
    </section>
  )
}
