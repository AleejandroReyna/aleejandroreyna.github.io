'use client';
import { motion, Variants } from "motion/react";
import { useTranslations } from "next-intl";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  experienceLabel: string;
  stacks: string[];
}

const romanNumerals = ["I.", "II.", "III.", "IV.", "V.", "VI."];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Skills = () => {
  const t = useTranslations('home.skills');
  // Mock data shaped like the `capabilities` Payload collection, sourced from
  // messages for now — swap for payload.find({ collection: "capabilities" })
  // when ready (fields already carry the same shape).
  const capabilities = t.raw('items') as CapabilityItem[];

  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8" id="skills">
      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-4">
            {t('label')}
          </div>
          <h2 className="font-serif font-medium text-5xl md:text-[54px] text-[#f2f4f0] mb-14">
            {t('title')}
          </h2>
        </motion.div>

        {/* Cards — 1px emerald gaps act as grid lines, like the design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#9be8b8]/10 border border-[#9be8b8]/10"
        >
          {capabilities.map((capability, i) => (
            <motion.div
              key={capability.id}
              variants={cardVariants}
              className="bg-[#0a0d0b]/90 p-9 md:p-11"
            >
              <div className="flex justify-between mb-4.5">
                <span className="font-mono text-[11px] tracking-[0.16em] text-[#46d386]">
                  {romanNumerals[i]}
                </span>
                {capability.experienceLabel && (
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#dfe5e0]/35">
                    {capability.experienceLabel}
                  </span>
                )}
              </div>
              <h3 className="font-serif font-medium text-[27px] text-[#f2f4f0] mb-3">
                {capability.title}
              </h3>
              {capability.description && (
                <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55 mb-5">
                  {capability.description}
                </p>
              )}
              <div className="font-mono text-[11px] leading-loose tracking-[0.08em] uppercase text-[#9be8b8]/55">
                {capability.stacks?.map((line) => (
                  <div key={line}>/ {line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
