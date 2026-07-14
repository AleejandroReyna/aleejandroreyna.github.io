import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import { getTranslations } from "next-intl/server"
import { Category, Post } from "@/payload-types"
import { getLocale } from "@/lib/locale"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const formatDate = (dateStr: string, locale: string) =>
  new Date(dateStr).toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })

// Flattens Lexical richtext into plain text, used as a excerpt fallback.
const richTextToPlainText = (content: Post['content']): string => {
  if (!content?.root?.children) return ''
  return content.root.children
    .map((node: Record<string, unknown>) => {
      const children = node.children as Record<string, unknown>[] | undefined
      return children?.map((child) => (child.text as string) || '').join('') || ''
    })
    .filter(Boolean)
    .join(' ')
}

export const List = async ({ searchParams }: Props) => {
  const t = await getTranslations('blog')
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const page = typeof searchParams?.page === 'string' ? parseInt(searchParams.page, 10) : 1

  const categoryFilters = searchParams?.category
  let categorySlugs: string[] = []
  if (Array.isArray(categoryFilters)) {
      categorySlugs = categoryFilters
  } else if (typeof categoryFilters === 'string') {
      categorySlugs = categoryFilters.split(',')
  }

  let where = {}
  if (categorySlugs.length > 0) {
      where = {
          'categories.slug': {
              in: categorySlugs
          }
      }
  }

  const result = await payload.find({
    collection: "posts",
    depth: 2,
    page,
    limit: 10,
    where,
    locale,
  })

  return (
    <section>
      {result.docs.length === 0 && (
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-[#dfe5e0]/45 border border-[#9be8b8]/12 p-8 text-center mb-7">
          {t('noResults')}
        </p>
      )}

      <div className="flex flex-col">
        {result.docs.map((post, i) => {
          const excerpt = post.excerpt || richTextToPlainText(post.content).slice(0, 200)
          const postCategories = post.categories
            ?.map((c) => (c as Category).name)
            .filter(Boolean)

          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`group grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-9 border-t border-[#9be8b8]/12 items-baseline ${i === result.docs.length - 1 ? 'border-b' : ''}`}
            >
              <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#9be8b8]/60">
                {formatDate(post.publishedDate, locale)}
              </div>
              <div>
                <h2 className="font-serif font-medium text-[28px] text-[#f2f4f0] group-hover:text-[#9be8b8] transition-colors duration-300 mb-2">
                  {post.title}
                </h2>
                {excerpt && (
                  <p className="font-heading text-sm leading-[1.7] text-[#dfe5e0]/60 mb-3">
                    {excerpt}
                  </p>
                )}
                {postCategories && postCategories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {postCategories.map((name) => (
                      <span
                        key={name}
                        className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#dfe5e0]/50 border border-[#dfe5e0]/15 px-2.5 py-1 rounded-sm"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {result.totalPages > 1 && (
        <div className="flex justify-center gap-2.5 mt-14">
          {Array.from({ length: result.totalPages }).map((_, i) => {
            const pageNum = i + 1
            const query = new URLSearchParams()
            if (categorySlugs.length > 0) query.set('category', categorySlugs.join(','))
            query.set('page', pageNum.toString())

            return (
              <Link
                key={pageNum}
                href={`/blog?${query.toString()}`}
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
