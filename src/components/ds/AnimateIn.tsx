'use client';
import { motion } from "motion/react";
import { ReactNode } from "react";

// Site-wide entrance: a soft fade with a slight rise, on a long ease-out
// curve. Keep values subtle — this portfolio's motion language is refined,
// not springy.
export const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export const AnimateIn = ({ children, delay = 0, y = 16, duration = 0.9, className }: AnimateInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE_SOFT }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
};
