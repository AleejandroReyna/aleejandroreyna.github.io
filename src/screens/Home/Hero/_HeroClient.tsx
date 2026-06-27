'use client';
import { SiGithub, SiPython, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiRuby } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ArrowRight, Mail, TerminalSquare } from 'lucide-react';
import { motion, Variants } from 'motion/react';

interface HeroClientProps {
  github?: string | null;
  linkedin?: string | null;
  calendly?: string | null;
}

export const HeroClient = ({ github, linkedin, calendly }: HeroClientProps) => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-start justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* Availability Badge */}
      <motion.div variants={itemVariants} className="mb-10 inline-block">
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-secondary bg-secondary/15 backdrop-blur-md rounded-none">
          <div className="w-2 h-2 bg-[#092e20] shadow-[0_0_10px_#092e20] animate-pulse"></div>
          <span className="text-foreground text-xs font-semibold tracking-[0.15em] uppercase">Available for Projects</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-foreground tracking-tighter uppercase leading-[0.9]">
        Alejandro <br/>
        <span className="text-white">Reyna</span>
      </motion.h1>

      {/* Tagline */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
        <TerminalSquare size={24} className="text-neutral-400" />
        <h2 className="text-xl lg:text-2xl font-medium text-neutral-400 tracking-wide uppercase">
          Full-Stack Software Engineer
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 max-w-2xl font-body leading-relaxed mb-12 border-l-2 border-[#092e20] pl-6">
        Architecting robust backend systems and crafting sophisticated, high-performance interfaces. Engineering precision at every layer of the stack.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-20">
        <a href="#portfolio" className="bg-[#092e20] text-white border border-[#092e20] px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group">
          View My Work
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#contact" className="bg-transparent text-foreground border border-secondary px-8 py-4 font-bold tracking-widest uppercase text-sm hover:border-[#092e20] hover:bg-[#092e20] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
          Get In Touch
          <Mail size={18} />
        </a>
      </motion.div>

      {/* Social Links & Tech */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-10 border-t border-secondary/50 pt-8 w-full max-w-3xl">
        <div className="flex gap-6">
          <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
            <LinkedinPlain size={24} />
          </a>
          <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
            <SiGithub size={24} />
          </a>
          <a href={`https://calendly.com/${calendly}`} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
          </a>
        </div>

        <div className="hidden md:block w-px h-8 bg-secondary/50"></div>

        {/* Tech Stack Subtle Display */}
        <div className="flex gap-6 items-center opacity-50">
          <SiPython size={20} className="hover:text-white transition-colors" />
          <SiTypescript size={20} className="hover:text-white transition-colors" />
          <SiReact size={20} className="hover:text-white transition-colors" />
          <SiNodedotjs size={20} className="hover:text-white transition-colors" />
          <SiNextdotjs size={20} className="hover:text-white transition-colors" />
          <SiRuby size={20} className="hover:text-white transition-colors" />
        </div>
      </motion.div>
    </motion.div>
  );
};
