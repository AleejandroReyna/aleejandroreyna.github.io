'use client';
import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
}

export const AnimateIn = ({ children, delay = 0, y = 30, duration = 0.6 }: AnimateInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
