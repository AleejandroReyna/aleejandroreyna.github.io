import Image from "next/image"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import * as Icons from "@icons-pack/react-simple-icons"
import { Technology, Media } from "@/payload-types"

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
          <p>No projects found matching the selected filters.</p>
      )}

      {result.docs.map((project) => {
        return (
          <article key={project.id} className="card lg:card-side bg-base-100 shadow-sm mb-4">
            <figure className="relative min-w-[400px]">
              {project.thumbnail && typeof project.thumbnail !== 'string' ? (
                 <Image
                    src={(project.thumbnail as Media).url!}
                    alt={project.name}
                    width={400}
                    height={250}
                    className="object-cover h-full"
                 />
              ) : (
                <img
                  src="https://place-hold.it/400x250"
                  alt="Placeholder"
                  className="object-cover h-full"
                />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              {project.company && typeof project.company !== 'string' && (
                  <p className="text-sm text-gray-500">{project.company.name}</p>
              )}

              <strong className="mt-4">Stack: </strong>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((techInput) => {
                    const tech = techInput as Technology
                    if (tech.icon) {
                        const IconComponent = (Icons as any)[tech.icon]
                        if (IconComponent) {
                            return <IconComponent key={tech.id} color="default" title={tech.name} />
                        }
                    }
                    return <span key={tech.id} className="badge badge-neutral">{tech.name}</span>
                })}
              </div>
              <div className="card-actions justify-end mt-4">
                <Link href={`/portfolio/${project.slug}`} className="btn btn-neutral">
                    See more
                </Link>
              </div>
            </div>
          </article>
        )
      })}

      {result.totalPages > 1 && (
        <div className="join mt-8 flex justify-center">
            {Array.from({ length: result.totalPages }).map((_, i) => {
                const pageNum = i + 1
                const query = new URLSearchParams()
                if (techs.length > 0) query.set('tech', techs.join(','))
                query.set('page', pageNum.toString())

                return (
                    <Link
                        key={pageNum}
                        href={`/portfolio?${query.toString()}`}
                        className={`join-item btn ${pageNum === result.page ? 'btn-active' : ''}`}
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
