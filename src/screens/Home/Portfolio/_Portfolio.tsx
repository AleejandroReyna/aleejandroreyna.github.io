import { ExternalLink, ArrowRight, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload"
import config from "@payload-config"
import * as Icons from "@icons-pack/react-simple-icons"
import { Technology, Media } from "@/payload-types"
import { AnimateIn } from "@/components/ds/AnimateIn"

export const Portfolio = async () => {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "projects",
    depth: 2,
    limit: 3,
    sort: "-releaseDate",
  })

  return (
    <section className="bg-background py-32 relative overflow-hidden" id="portfolio">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Heading */}
        <AnimateIn>
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/50 pb-8">
            <div>
              <span className="text-neutral-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
                <FolderGit2 size={14} /> Featured Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight uppercase">
                Recent <span className="text-white">Projects</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <Link href="/portfolio" className="text-sm font-bold tracking-widest uppercase text-white hover:text-neutral-300 border border-[#092e20] px-4 py-2 transition-colors flex items-center gap-2 group hover:bg-[#092e20]">
                View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimateIn>

        {/* Projects Grid */}
        <AnimateIn delay={0.2}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {result.docs.map((project) => {
             const releaseYear = project.releaseDate ? new Date(project.releaseDate).getFullYear() : ''

             return (
              <article key={project.id} className="group bg-secondary/15 border border-secondary hover:border-[#092e20] transition-colors duration-300 relative flex flex-col">
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <figure className="relative overflow-hidden h-64 bg-secondary/35 border-b border-secondary group-hover:border-[#092e20] transition-colors duration-300">
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

                <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10 bg-background/50">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-1 tracking-tight group-hover:text-white transition-colors duration-300">{project.name}</h3>
                  {project.company && typeof project.company !== 'string' && (
                      <p className="text-xs font-medium text-neutral-400 mb-6 tracking-widest uppercase">
                         Client // {project.company.name}
                      </p>
                  )}

                  <div className="mt-auto pt-6 border-t border-secondary/50">
                    <div className="flex flex-wrap gap-4">
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
                  </div>

                  <div className="mt-8">
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-white transition-colors duration-300 group/link bg-secondary/20 px-4 py-2 border border-secondary group-hover:border-[#092e20] hover:bg-[#092e20]">
                        Read Docs <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
             )
          })}
        </div>
        </AnimateIn>

        {/* Mobile View All Projects CTA */}
        <div className="text-center mt-12 md:hidden">
            <Link href="/portfolio" className="bg-transparent border border-[#092e20] text-white px-6 py-3 font-bold tracking-widest uppercase text-sm hover:bg-[#092e20] hover:text-white transition-all duration-300 inline-flex items-center gap-3">
              View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
};
