'use client';
import { useState } from "react";
import type { ExperienceDetail, Company, Media } from "@/payload-types";
import { ExternalLink, Clock, MapPin, TerminalSquare, GitCommit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ExperienceProps {
  experiences: ExperienceDetail[];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric' });
}

function getCompany(exp: ExperienceDetail): Company | null {
  if (typeof exp.company === 'string') return null;
  return exp.company;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const Experience = ({ experiences }: ExperienceProps) => {
  const [activeId, setActiveId] = useState<string>(experiences[0]?.id || '');
  const activeExperience = experiences.find(exp => exp.id === activeId);
  const activeCompany = activeExperience ? getCompany(activeExperience) : null;

  if (experiences.length === 0) return null;

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="experience">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#171717 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/50 pb-8"
        >
          <div>
            <span className="text-neutral-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
              <TerminalSquare size={14} /> Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight uppercase">
              Professional <span className="text-white">Trajectory</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#092e20] shadow-[0_0_10px_#092e20]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Navigation - Left Side */}
          <div className="lg:w-1/3 relative">
            
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-secondary/30" />

            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6 relative z-10"
            >
              {experiences.map((exp) => {
                const isActive = activeId === exp.id;
                const company = getCompany(exp);
                return (
                  <motion.li key={exp.id} variants={itemVariants} className="relative group pl-10">
                    {/* Node Dot */}
                    <div
                      className={`absolute left-1.5 top-5 -translate-y-1/2 w-4 h-4 transition-all duration-300 z-20 flex items-center justify-center ${isActive
                          ? 'bg-background'
                          : 'bg-background'
                        }`}
                    >
                      <div className={`w-2 h-2 transition-all duration-300 ${isActive ? 'bg-[#092e20] shadow-[0_0_8px_#092e20]' : 'bg-secondary/50 group-hover:bg-[#092e20]/50'}`}></div>
                    </div>

                    <button
                      onClick={() => setActiveId(exp.id)}
                      className={`text-left w-full transition-all duration-300 py-4 px-6 border ${isActive
                          ? 'bg-secondary/15 border-[#092e20]'
                          : 'bg-transparent border-transparent hover:border-secondary/50 hover:bg-secondary/5'
                        }`}
                    >
                      <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                        {formatDateShort(exp.startDate)} — {exp.endDate ? formatDateShort(exp.endDate) : 'Present'}
                      </div>
                      <div className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 mb-1 uppercase ${isActive ? 'text-foreground' : 'text-foreground/70'}`}>
                        {company?.name || 'Company'}
                      </div>
                      <div className="font-medium text-xs text-neutral-400 tracking-widest uppercase">
                        {exp.role}
                      </div>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* Content - Right Side */}
          <div className="lg:w-2/3">
            <div className="lg:sticky lg:top-32 transition-all duration-500">
              <AnimatePresence mode="wait">
                {activeExperience && (
                  <motion.article 
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="bg-secondary/15 border border-secondary p-8 md:p-12 relative overflow-hidden"
                  >
                    
                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 blur-2xl pointer-events-none"></div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 mb-12 border-b border-secondary/50 pb-8">
                        <div>
                          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight uppercase">
                            {activeCompany?.name || 'Company'}
                          </h3>
                          <div className="inline-flex items-center gap-2 bg-secondary/30 text-white px-3 py-1 text-sm font-bold tracking-widest uppercase mb-6 border border-[#092e20]/30">
                            <GitCommit size={14} />
                            {activeExperience.role}
                          </div>
                          <div className="flex flex-wrap gap-6 text-xs font-bold text-neutral-400 tracking-widest uppercase">
                            <span className="flex items-center gap-2">
                              <Clock size={14} className="text-neutral-400" />
                              {formatDate(activeExperience.startDate)} — {activeExperience.endDate ? formatDate(activeExperience.endDate) : 'Present'}
                            </span>
                            <span className="flex items-center gap-2">
                              <MapPin size={14} className="text-neutral-400" />
                              {activeExperience.location === 'remote' ? 'Remote' : 'On-Site'}
                            </span>
                          </div>
                        </div>
                        
                        {activeCompany?.url && (
                          <a
                            href={activeCompany.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border border-secondary text-neutral-400 px-6 py-3 font-bold tracking-widest uppercase text-xs hover:border-[#092e20] hover:bg-[#092e20] hover:text-white transition-all duration-300 shrink-0 flex items-center gap-2"
                          >
                            Visit Site <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      {/* Rich Text Content */}
                      {activeExperience.content && (
                        <div className="text-neutral-400 font-medium mb-12 text-base md:text-lg leading-relaxed space-y-6">
                          {renderRichText(activeExperience.content)}
                        </div>
                      )}

                      {/* Achievements */}
                      {activeExperience.achievements && activeExperience.achievements.length > 0 && (
                        <div className="bg-secondary/10 p-8 border border-secondary/50 relative group hover:border-[#092e20] transition-colors duration-300">
                          <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#092e20]"></span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-4">
                            {activeExperience.achievements.map((item) => (
                              <li key={item.id} className="flex items-start gap-4 text-neutral-400 font-medium leading-relaxed text-sm md:text-base">
                                <span className="text-neutral-500 mt-1 text-[10px]">■</span>
                                <span>{item.achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.article>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function renderRichText(content: ExperienceDetail['content']) {
  if (!content?.root?.children) return null;
  return (
    <>
      {content.root.children.map((node: Record<string, unknown>, i: number) => {
        if (node.type === 'paragraph') {
          const children = node.children as Record<string, unknown>[] | undefined;
          const text = children?.map((child: Record<string, unknown>) => child.text as string).join('') || '';
          if (!text) return <br key={i} />;
          return <p key={i} className="mb-4 last:mb-0">{text}</p>;
        }
        return null;
      })}
    </>
  );
}
