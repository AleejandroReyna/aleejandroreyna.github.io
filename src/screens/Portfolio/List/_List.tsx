import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import { Technology, Media, Project } from "@/payload-types"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const FALLBACK_IMAGE = "https://place-hold.it/1200x800"

const thumbnailUrl = (project: Project) =>
  project.thumbnail && typeof project.thumbnail !== "string"
    ? (project.thumbnail as Media).url || FALLBACK_IMAGE
    : FALLBACK_IMAGE

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
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-[#dfe5e0]/45 border border-[#9be8b8]/12 p-8 text-center mb-7">
          No projects found matching the selected filters.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {result.docs.map((project) => {
          const releaseYear = project.releaseDate ? new Date(project.releaseDate).getFullYear() : null
          const category =
            project.company && typeof project.company !== 'string'
              ? project.company.name
              : 'Project'
          const techLine = project.technologies
            ?.map((t) => (t as Technology).name)
            .filter(Boolean)
            .slice(0, 4)
            .join(' · ')

          return (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="relative h-[340px] md:h-[400px] rounded overflow-hidden border border-[#9be8b8]/12 block group"
            >
              <img
                src={thumbnailUrl(project)}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(6,9,7,0.95) 0%, rgba(6,9,7,0.5) 40%, rgba(6,9,7,0.05) 68%)' }}
              ></div>
              <div className="absolute left-0 right-0 bottom-0 p-7 md:p-8">
                <div className="flex justify-between items-baseline mb-2.5">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386]">
                    {category}
                  </span>
                  {releaseYear && (
                    <span className="font-mono text-[11px] text-[#dfe5e0]/50">{releaseYear}</span>
                  )}
                </div>
                <h2 className="font-serif font-medium text-[32px] text-[#f2f4f0] mb-1.5">
                  {project.name}
                </h2>
                {techLine && (
                  <div className="font-heading text-[13px] leading-[1.6] text-[#dfe5e0]/70">
                    {techLine}
                  </div>
                )}
              </div>
            </Link>
          )
        })}

        {/* NDA card — closes the grid like the design */}
        <div className="rounded border border-dashed border-[#9be8b8]/25 flex flex-col items-center justify-center gap-3.5 min-h-[340px] md:min-h-[400px] text-center p-10">
          <div className="font-serif font-medium italic text-[28px] text-[#dfe5e0]/70">
            + 80 more under NDA
          </div>
          <div className="font-mono text-xs leading-[1.8] tracking-[0.1em] uppercase text-[#dfe5e0]/40">
            Fintech · Logistics · Healthcare<br />
            Ask about them in a call
          </div>
          <a
            href="/#contact"
            className="font-mono font-medium text-[11px] tracking-[0.16em] uppercase text-[#9be8b8] border-b border-[#9be8b8]/35 pb-1 mt-2 hover:text-white hover:border-white transition-colors duration-300"
          >
            Book a Call →
          </a>
        </div>
      </div>

      {result.totalPages > 1 && (
        <div className="flex justify-center gap-2.5 mt-14">
          {Array.from({ length: result.totalPages }).map((_, i) => {
            const pageNum = i + 1
            const query = new URLSearchParams()
            if (techs.length > 0) query.set('tech', techs.join(','))
            query.set('page', pageNum.toString())

            return (
              <Link
                key={pageNum}
                href={`/portfolio?${query.toString()}`}
                className={`font-mono text-[11px] tracking-[0.14em] px-4 py-2.5 rounded-sm transition-colors duration-300 ${pageNum === result.page
                  ? 'bg-[#46d386] text-[#0a0d0b] font-medium'
                  : 'text-[#dfe5e0]/55 border border-[#dfe5e0]/15 hover:border-[#9be8b8]/40 hover:text-[#9be8b8]'}`}
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
