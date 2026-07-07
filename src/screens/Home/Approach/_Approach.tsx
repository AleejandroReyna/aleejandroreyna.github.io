'use client'
import { motion } from "motion/react"

export const Approach = () => {
  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8">
      {/* Radial glow, bottom-center — mirrors the design's approach backdrop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 400px at 50% 100%, rgba(37,84,58,0.2), transparent 70%)' }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 relative z-10 text-center"
      >
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-7">
          The Approach
        </div>
        <blockquote className="font-serif italic text-3xl md:text-[38px] leading-[1.35] text-[#e8ede9] max-w-[860px] mx-auto">
          &ldquo;Simple is better than complex. But simple at scale is the hardest thing to build — and the only thing worth shipping.&rdquo;
        </blockquote>
        <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#dfe5e0]/45 mt-7">
          — Working Principle, Since 2013
        </div>
      </motion.div>
    </section>
  )
}
