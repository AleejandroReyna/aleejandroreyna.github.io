'use client'
import { motion } from "motion/react"

// Mock values until these are driven by Payload site settings.
const stats = [
  { value: "13", suffix: "", label: "Years Engineering" },
  { value: "86", suffix: "+", label: "Projects Shipped" },
  { value: "30", suffix: "+", label: "In Production Today" },
  { value: "4", suffix: "", label: "Core Stacks" },
]

export const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-b border-[#9be8b8]/8"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-8 py-12 md:px-16 ${i < stats.length - 1 ? "lg:border-r" : ""} ${i % 2 === 0 ? "border-r lg:border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} border-[#9be8b8]/8`}
          >
            <div className="font-serif font-medium text-5xl md:text-[64px] leading-none text-[#f2f4f0]">
              {stat.value}
              {stat.suffix && <span className="text-[#46d386]">{stat.suffix}</span>}
            </div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 mt-2.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
