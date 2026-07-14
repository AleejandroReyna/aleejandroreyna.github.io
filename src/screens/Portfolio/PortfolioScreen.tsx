import { getTranslations } from "next-intl/server"
import { AnimateIn } from "@/components/ds/AnimateIn"
import { Content } from "./Content"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const PortfolioScreen = async ({ searchParams }: Props) => {
  const t = await getTranslations('portfolioArchive')

  return (
    <>
      {/* Archive header */}
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-16">
            <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-[96px] leading-none text-[#f2f4f0]">
              {t('title')}<span className="text-[#46d386]">.</span>
            </h1>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#9be8b8]/60 md:text-right leading-loose shrink-0">
              {t('shippedSince')}<br />
              {t('inProduction')}
            </div>
          </div>
          <p className="max-w-[520px] font-heading text-base leading-[1.7] text-[#dfe5e0]/60 mt-8">
            {t('description')}
          </p>
          </AnimateIn>
        </div>
      </div>

      <Content searchParams={searchParams} />
    </>
  )
}
