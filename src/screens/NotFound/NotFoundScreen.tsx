import Link from "next/link"
import Image from "next/image"
import { getPayload } from "payload"
import config from "@payload-config"
import { getTranslations } from "next-intl/server"
import { AnimateIn } from "@/components/ds/AnimateIn"
import { getLocale } from "@/lib/locale"
import type { Media, Project } from "@/payload-types"

const FALLBACK_IMAGE = "https://place-hold.it/1200x800"

const thumbnailUrl = (project: Project) =>
  project.thumbnail && typeof project.thumbnail !== "string"
    ? (project.thumbnail as Media).url || FALLBACK_IMAGE
    : FALLBACK_IMAGE

const formatDate = (dateStr: string, locale: string) =>
  new Date(dateStr).toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })

export const NotFoundScreen = async () => {
  const t = await getTranslations('notFound')
  const locale = await getLocale()
  const payload = await getPayload({ config })

  // Una página de error no debe caerse por un fallo de la base de datos:
  // si la consulta falla, la parte de arriba sigue siendo útil por sí sola.
  const [projects, posts] = await Promise.all([
    payload
      .find({ collection: 'projects', depth: 2, limit: 2, sort: '-releaseDate', locale })
      .then((r) => r.docs)
      .catch(() => []),
    payload
      .find({
        collection: 'posts',
        depth: 1,
        limit: 3,
        sort: '-publishedDate',
        where: { title: { exists: true } },
        locale,
        fallbackLocale: false,
      })
      .then((r) => r.docs)
      .catch(() => []),
  ])

  return (
    <>
      {/* HEADER */}
      <div className="pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(900px 420px at 18% -10%, rgba(37,84,58,0.3), transparent 70%)' }}
        ></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <AnimateIn>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-5">
              {t('label')}
            </div>
            <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-[96px] leading-none text-[#f2f4f0]">
              {t('title')}<span className="text-[#46d386]">.</span>
            </h1>
            <p className="max-w-[520px] font-heading text-base leading-[1.7] text-[#dfe5e0]/60 mt-8">
              {t('description')}
            </p>
            <div className="flex flex-wrap gap-3.5 mt-10">
              <Link
                href="/"
                className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-[#dfe5e0] border border-[#9be8b8]/35 px-8 py-4 rounded-sm hover:bg-[#9be8b8]/10 transition-colors duration-300"
              >
                {t('goHome')}
              </Link>
              <Link
                href="/contact"
                className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-[#dfe5e0]/60 border border-[#9be8b8]/12 px-8 py-4 rounded-sm hover:text-[#dfe5e0] hover:border-[#9be8b8]/35 transition-colors duration-300"
              >
                {t('goContact')}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* SUGERENCIAS */}
      <div className="pb-24 border-t border-[#9be8b8]/8 pt-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14">

          {/* Proyectos recientes */}
          {projects.length > 0 && (
            <AnimateIn>
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386]">
                  {t('projectsLabel')}
                </h2>
                <Link
                  href="/portfolio"
                  className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40 hover:text-[#9be8b8] transition-colors duration-300"
                >
                  {t('seeAll')}
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/portfolio/${project.slug}`}
                    className="relative h-[240px] rounded overflow-hidden border border-[#9be8b8]/12 block group"
                  >
                    <Image
                      src={thumbnailUrl(project)}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover grayscale brightness-[0.7] group-hover:grayscale-[0.4] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#25543a]/70 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[#0a0d0b]/40 pointer-events-none"></div>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(10,13,11,0.92) 0%, transparent 60%)' }}
                    ></div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-serif font-medium text-[22px] text-[#f2f4f0] group-hover:text-[#9be8b8] transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateIn>
          )}

          {/* Artículos recientes */}
          {posts.length > 0 && (
            <AnimateIn delay={0.15}>
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386]">
                  {t('postsLabel')}
                </h2>
                <Link
                  href="/blog"
                  className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40 hover:text-[#9be8b8] transition-colors duration-300"
                >
                  {t('seeAll')}
                </Link>
              </div>
              <div className="flex flex-col">
                {posts.map((post, i) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className={`group grid grid-cols-1 md:grid-cols-[130px_1fr] gap-2 md:gap-8 py-6 border-t border-[#9be8b8]/12 items-baseline ${i === posts.length - 1 ? 'border-b' : ''}`}
                  >
                    <time dateTime={post.publishedDate} className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#9be8b8]/60">
                      {formatDate(post.publishedDate, locale)}
                    </time>
                    <h3 className="font-serif font-medium text-[21px] leading-snug text-[#f2f4f0] group-hover:text-[#9be8b8] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </AnimateIn>
          )}
        </div>
      </div>
    </>
  )
}
