'use client';
import type { ExperienceDetail, Company } from "@/payload-types";
import { motion, Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

interface ExperienceProps {
  experiences: ExperienceDetail[];
}

function formatYear(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(locale, { year: 'numeric' });
}

function getCompany(exp: ExperienceDetail): Company | null {
  if (typeof exp.company === 'string') return null;
  return exp.company;
}

// Flatten the Lexical richtext into plain text for the row description.
function richTextToPlainText(content: ExperienceDetail['content']): string {
  if (!content?.root?.children) return '';
  return content.root.children
    .map((node: Record<string, unknown>) => {
      const children = node.children as Record<string, unknown>[] | undefined;
      return children?.map((child) => (child.text as string) || '').join('') || '';
    })
    .filter(Boolean)
    .join(' ');
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Experience = ({ experiences }: ExperienceProps) => {
  const t = useTranslations('home.experience');
  const locale = useLocale();

  if (experiences.length === 0) return null;

  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8" id="experience">
      {/* Radial glow, mid-left — mirrors the design's journey backdrop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 400px at 10% 60%, rgba(37,84,58,0.18), transparent 70%)' }}
      ></div>

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
          <h2 className="font-serif font-medium text-5xl md:text-[54px] text-[#f2f4f0] mb-16">
            {t('title')}
          </h2>
        </motion.div>

        {/* Timeline rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col"
        >
          {experiences.map((exp, i) => {
            const company = getCompany(exp);
            const isCurrent = !exp.endDate;
            const dateRange = `${formatYear(exp.startDate, locale)} — ${exp.endDate ? formatYear(exp.endDate, locale) : t('present')}`;
            const description = richTextToPlainText(exp.content);
            const roleLine = [
              exp.role,
              exp.location === 'remote' ? t('remote') : t('onSite'),
            ].filter(Boolean).join(' · ');

            return (
              <motion.div
                key={exp.id}
                variants={rowVariants}
                className={`grid grid-cols-1 md:grid-cols-[220px_1fr_2fr] gap-4 md:gap-10 py-9 border-t border-[#9be8b8]/12 items-baseline ${i === experiences.length - 1 ? 'border-b' : ''}`}
              >
                <div className={`font-mono text-xs tracking-[0.14em] uppercase ${isCurrent ? 'text-[#9be8b8]' : 'text-[#dfe5e0]/45'}`}>
                  {dateRange}
                </div>
                <div>
                  <h3 className="font-serif font-medium text-[26px] text-[#f2f4f0]">
                    {company?.url ? (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#9be8b8] transition-colors duration-300"
                      >
                        {company.name}
                      </a>
                    ) : (
                      company?.name || t('independent')
                    )}
                  </h3>
                  <div className="font-mono text-xs tracking-[0.1em] uppercase text-[#dfe5e0]/45 mt-2">
                    {roleLine}
                  </div>
                </div>
                <p className="font-heading text-sm leading-[1.7] text-[#dfe5e0]/60">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
