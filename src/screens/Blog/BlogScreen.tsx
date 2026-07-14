import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { AnimateIn } from "@/components/ds/AnimateIn"
import { Content } from "./Content"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const BlogScreen = async ({ searchParams }: Props) => {
  const t = await getTranslations('blog')

  return (
    <>
      {/* Journal header */}
      <div className="pt-40 pb-14 relative overflow-hidden">
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
          </AnimateIn>
        </div>
      </div>

      <Content searchParams={searchParams} />

      {/* CTA STRIP */}
      <div className="py-24 border-t border-[#9be8b8]/8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(700px 400px at 50% 100%, rgba(37,84,58,0.2), transparent 70%)' }}
        ></div>
        <AnimateIn className="relative z-10 px-6">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
            {t('ctaLabel')}
          </div>
          <div className="font-serif font-medium text-4xl md:text-[56px] leading-[1.1] text-[#f2f4f0]">
            {t('ctaTitle')} <span className="italic text-[#9be8b8]">{t('ctaEmphasis')}</span>.
          </div>
          <Link
            href="/contact"
            className="inline-block mt-9 font-mono font-medium text-xs tracking-[0.18em] uppercase text-[#dfe5e0] border border-[#9be8b8]/35 px-8 py-4 rounded-sm hover:bg-[#9be8b8]/10 transition-colors duration-300"
          >
            {t('ctaButton')}
          </Link>
        </AnimateIn>
      </div>
    </>
  )
}
