'use client';
import { motion, Variants } from 'motion/react';
import { useTranslations } from 'next-intl';

export const HeroClient = () => {
  const t = useTranslations('home.hero');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-start justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* Availability Badge */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2.5 mb-9 font-mono text-[11px] tracking-[0.2em] uppercase text-[#dfe5e0]/50"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#46d386] animate-pulse"></span>
        {t('badge')}
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="font-serif font-medium text-7xl md:text-8xl lg:text-[148px] leading-[0.96] tracking-[-0.01em] text-[#f2f4f0]"
      >
        Alejandro<br />
        Reyna<span className="text-[#46d386]">.</span>
      </motion.h1>

      {/* Description + Location */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-16 w-full mt-13"
      >
        <p className="max-w-[500px] font-heading text-[17px] leading-[1.7] text-[#dfe5e0]/65">
          {t('description')}
        </p>
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#9be8b8]/60 md:text-right leading-loose shrink-0">
          {t('location')}<br />
          {t('since')}
        </div>
      </motion.div>
    </motion.div>
  );
};
