import Link from "next/link";
import { getPayload } from "payload"
import config from "@payload-config"
import { Technology, Media, Project } from "@/payload-types"
import { AnimateIn } from "@/components/ds/AnimateIn"

const FALLBACK_IMAGE = "https://place-hold.it/1600x900"

const projectLabel = (project: Project, index: number) => {
  const order = String(index + 1).padStart(2, "0")
  const kind =
    project.company && typeof project.company !== "string"
      ? project.company.name
      : "Project"
  const year = project.releaseDate ? new Date(project.releaseDate).getFullYear() : null
  return `${order} — ${kind}${year ? ` · ${year}` : ""}`
}

const thumbnailUrl = (project: Project) =>
  project.thumbnail && typeof project.thumbnail !== "string"
    ? (project.thumbnail as Media).url || FALLBACK_IMAGE
    : FALLBACK_IMAGE

const TechChips = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap gap-2">
    {project.technologies?.slice(0, 3).map((techInput) => {
      const tech = techInput as Technology
      return (
        <span
          key={tech.id}
          className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#dfe5e0]/75 border border-[#dfe5e0]/30 bg-[#060907]/50 px-2.5 py-1.5 rounded-sm"
        >
          {tech.name}
        </span>
      )
    })}
  </div>
)

const CaseStudyLink = ({ slug, children }: { slug?: string | null; children: React.ReactNode }) => (
  <Link
    href={`/portfolio/${slug}`}
    className="font-mono font-medium text-[11px] tracking-[0.16em] uppercase text-[#9be8b8] border-b border-[#9be8b8]/35 pb-1 hover:text-white hover:border-white transition-colors duration-300"
  >
    {children}
  </Link>
)

export const Portfolio = async () => {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "projects",
    depth: 2,
    limit: 3,
    sort: "-releaseDate",
  })

  const [featured, ...rest] = result.docs

  const years = result.docs
    .map((p) => (p.releaseDate ? new Date(p.releaseDate).getFullYear() : null))
    .filter((y): y is number => y !== null)
  const yearRange = years.length
    ? `${Math.min(...years)} — ${Math.max(...years)}`
    : ""

  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8" id="portfolio">
      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Heading */}
        <AnimateIn>
          <div className="mb-14 flex items-baseline justify-between gap-6">
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-4">
                02 — Selected Works
              </div>
              <h2 className="font-serif font-medium text-5xl md:text-[54px] text-[#f2f4f0]">
                Recent projects
              </h2>
            </div>
            {yearRange && (
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#dfe5e0]/40 shrink-0">
                {yearRange}
              </div>
            )}
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-7">

          {/* Featured project — full-bleed image card */}
          {featured && (
            <AnimateIn delay={0.1}>
              <article className="relative h-[420px] md:h-[520px] rounded overflow-hidden border border-[#9be8b8]/12 group">
                <img
                  src={thumbnailUrl(featured)}
                  alt={featured.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-[0.4] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700"
                />
                {/* Emerald tint — blends real screenshots into the theme */}
                <div className="absolute inset-0 bg-[#25543a]/70 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-[#0a0d0b]/40 pointer-events-none"></div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(6,9,7,0.95) 0%, rgba(6,9,7,0.55) 32%, rgba(6,9,7,0.05) 60%)' }}
                ></div>
                <div className="absolute left-0 right-0 bottom-0 p-7 md:p-12 flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-10">
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-3">
                      {projectLabel(featured, 0)}
                    </div>
                    <h3 className="font-serif font-medium text-3xl md:text-[42px] text-[#f2f4f0] mb-2.5">
                      {featured.name}
                    </h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-4 shrink-0">
                    <TechChips project={featured} />
                    <CaseStudyLink slug={featured.slug}>View Case Study →</CaseStudyLink>
                  </div>
                </div>
              </article>
            </AnimateIn>
          )}

          {/* Remaining projects — side by side */}
          {rest.length > 0 && (
            <AnimateIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {rest.map((project, i) => (
                  <article
                    key={project.id}
                    className="relative h-[380px] md:h-[440px] rounded overflow-hidden border border-[#9be8b8]/12 group"
                  >
                    <img
                      src={thumbnailUrl(project)}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-[0.4] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#25543a]/70 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-[#0a0d0b]/40 pointer-events-none"></div>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(6,9,7,0.95) 0%, rgba(6,9,7,0.55) 38%, rgba(6,9,7,0.05) 65%)' }}
                    ></div>
                    <div className="absolute left-0 right-0 bottom-0 p-7 md:p-9">
                      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-2.5">
                        {projectLabel(project, i + 1)}
                      </div>
                      <h3 className="font-serif font-medium text-2xl md:text-[34px] text-[#f2f4f0] mb-4">
                        {project.name}
                      </h3>
                      <div className="flex justify-between items-center gap-4">
                        <TechChips project={project} />
                        <CaseStudyLink slug={project.slug}>Case Study →</CaseStudyLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </AnimateIn>
          )}
        </div>

        {/* Full archive link */}
        <AnimateIn delay={0.3}>
          <Link
            href="/portfolio"
            className="block text-center mt-12 py-4.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[#dfe5e0]/45 border border-[#dfe5e0]/12 hover:text-[#9be8b8] hover:border-[#9be8b8]/35 transition-colors duration-300"
          >
            Full Archive — {result.totalDocs}+ Projects →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
};
