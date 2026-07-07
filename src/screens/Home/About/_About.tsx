'use client'
import { motion } from "motion/react"

export const About = () => {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
            01 — Philosophy
          </div>
          <h2 className="font-serif font-medium text-5xl md:text-[54px] leading-[1.1] text-[#f2f4f0]">
            Beyond<br />
            the logic<span className="text-[#46d386]">.</span>
          </h2>
        </motion.div>

        {/* Right column — quote, story, and the two pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <p className="font-serif italic text-[22px] md:text-2xl leading-[1.6] text-[#e8ede9] mb-7">
            &ldquo;Programming is more than solving problems — it&apos;s composing scalable systems wrapped in interfaces people trust.&rdquo;
          </p>
          <p className="font-heading text-[15px] leading-[1.8] text-[#dfe5e0]/60 mb-7">
            For over thirteen years I&apos;ve been architecting digital solutions from Guatemala for teams around the world. From complex database architectures to the micro-interactions on the frontend — every layer matters, and every layer gets built like it&apos;s the one that will fail first.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/70 mb-2.5">
                Global Impact
              </div>
              <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
                Remote collaboration with teams worldwide. Python, TypeScript, React, Node.js, Rails.
              </p>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/70 mb-2.5">
                Human Side
              </div>
              <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
                Music, BMX, and one demanding cat. Clear communication and empathy, always.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
