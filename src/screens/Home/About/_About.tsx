'use client'
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export const About = () => {
  const t = useTranslations('home.philosophy')

  return (
    <section className="py-28 relative overflow-hidden" id="about">
      {/* Radial glow, top-right — mirrors the design's philosophy backdrop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 400px at 90% 20%, rgba(37,84,58,0.18), transparent 70%)' }}
      ></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* Left column — section label + headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
            {t('label')}
          </div>
          <h2 className="font-serif font-medium text-5xl md:text-[54px] leading-[1.1] text-[#f2f4f0]">
            {t('titleLine1')}<br />
            {t('titleLine2')}<span className="text-[#46d386]">.</span>
          </h2>
        </motion.div>

        {/* Right column — quote, story, and the two pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <p className="font-serif italic text-[22px] md:text-2xl leading-[1.6] text-[#e8ede9] mb-7">
            {t('quote')}
          </p>
          <p className="font-heading text-[15px] leading-[1.8] text-[#dfe5e0]/60 mb-7">
            {t('body')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/70 mb-2.5">
                {t('globalImpactLabel')}
              </div>
              <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
                {t('globalImpactBody')}
              </p>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/70 mb-2.5">
                {t('humanSideLabel')}
              </div>
              <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
                {t('humanSideBody')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
