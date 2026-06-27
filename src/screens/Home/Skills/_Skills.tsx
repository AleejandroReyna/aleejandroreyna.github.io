'use client';
import { Code, Database, Layers, Terminal } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const Skills = () => {
    return (
        <section className="bg-background py-32 relative overflow-hidden" id="skills">
            {/* Tech background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="mx-auto max-w-7xl px-6 relative z-10"
            >
                
                {/* Heading */}
                <motion.div variants={cardVariants} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/50 pb-8">
                  <div>
                    <span className="text-neutral-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
                      <Terminal size={14} /> Core Competencies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight uppercase">
                      Technical <span className="text-white">Expertise</span>
                    </h2>
                  </div>
                  <div className="max-w-md hidden md:block">
                    <p className="text-sm text-neutral-400 font-medium uppercase tracking-widest text-right">
                      A curated selection of technologies mastered over 12 years of architecting scalable applications.
                    </p>
                  </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
                    
                    {/* Skill Group 1: Frontend & Backend */}
                    <motion.div variants={cardVariants} className="group bg-secondary/15 border border-secondary hover:border-[#092e20] p-10 flex flex-col items-start transition-all duration-300 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Layers size={64} className="text-neutral-500" />
                        </div>
                        <div className="mb-8 p-3 bg-secondary/40 border border-secondary/80 text-white group-hover:bg-[#092e20] group-hover:border-[#092e20] transition-colors duration-300">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-foreground tracking-tight mb-2 uppercase">Full-Stack Core</h3>
                        <div className="text-neutral-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 bg-secondary/60 px-2.5 py-1 border border-secondary/30">
                            12+ Years Experience
                        </div>
                        
                        <div className="w-full space-y-8 relative z-10">
                            <div>
                                <p className="text-foreground text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#092e20]"></span> Frontend
                                </p>
                                <ul className="space-y-3 font-medium text-neutral-400 text-sm">
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> TypeScript</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> React</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Next.js</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Vue</li>
                                </ul>
                            </div>
                            <div className="w-full h-[1px] bg-secondary/50"></div>
                            <div>
                                <p className="text-foreground text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#092e20]"></span> Backend
                                </p>
                                <ul className="space-y-3 font-medium text-neutral-400 text-sm">
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Python & Django</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Node.js</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Ruby on Rails</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Group 2: API Architecture */}
                    <motion.div variants={cardVariants} className="group bg-secondary/15 border border-secondary hover:border-[#092e20] p-10 flex flex-col items-start transition-all duration-300 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Code size={64} className="text-neutral-500" />
                        </div>
                        <div className="mb-8 p-3 bg-secondary/40 border border-secondary/80 text-white group-hover:bg-[#092e20] group-hover:border-[#092e20] transition-colors duration-300">
                            <Code size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-foreground tracking-tight mb-2 uppercase">Architecture</h3>
                        <div className="text-neutral-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 bg-secondary/60 px-2.5 py-1 border border-secondary/30">
                            9+ Years Experience
                        </div>
                        
                        <div className="w-full space-y-8 relative z-10">
                            <div>
                                <p className="text-foreground text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#092e20]"></span> Protocols
                                </p>
                                <ul className="space-y-3 font-medium text-neutral-400 text-sm">
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> RESTful APIs</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> GraphQL</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> WebSockets</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> OAuth & JWT</li>
                                </ul>
                            </div>
                            <div className="w-full h-[1px] bg-secondary/50"></div>
                            <div>
                                <p className="text-foreground text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#092e20]"></span> Standards
                                </p>
                                <ul className="space-y-3 font-medium text-neutral-400 text-sm">
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> OpenAPI / Swagger</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> JSON:API</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Microservices</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Group 3: Database & Data */}
                    <motion.div variants={cardVariants} className="group bg-secondary/15 border border-secondary hover:border-[#092e20] p-10 flex flex-col items-start transition-all duration-300 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Database size={64} className="text-neutral-500" />
                        </div>
                        <div className="mb-8 p-3 bg-secondary/40 border border-secondary/80 text-white group-hover:bg-[#092e20] group-hover:border-[#092e20] transition-colors duration-300">
                            <Database size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-foreground tracking-tight mb-2 uppercase">Data Systems</h3>
                        <div className="text-neutral-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 bg-secondary/60 px-2.5 py-1 border border-secondary/30">
                            8+ Years Experience
                        </div>
                        
                        <div className="w-full space-y-8 relative z-10">
                            <div>
                                <p className="text-foreground text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#092e20]"></span> Engines
                                </p>
                                <ul className="space-y-3 font-medium text-neutral-400 text-sm">
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> PostgreSQL</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> MongoDB</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> MySQL</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Redis</li>
                                </ul>
                            </div>
                            <div className="w-full h-[1px] bg-secondary/50"></div>
                            <div>
                                <p className="text-foreground text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-[#092e20]"></span> Infrastructure
                                </p>
                                <ul className="space-y-3 font-medium text-neutral-400 text-sm">
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> AWS (EC2, S3, RDS)</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> Docker</li>
                                    <li className="flex items-center gap-2 hover:text-white transition-colors"><span className="text-neutral-600">/</span> CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Skills Section */}
                <motion.div variants={cardVariants} className="mt-24 pt-12 border-t border-secondary/50">
                    <h3 className="text-sm font-bold text-foreground mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#092e20]"></span> Complementary Toolkit
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {['Docker', 'AWS', 'Git', 'CI/CD', 'Agile', 'TDD', 'Figma', 'Tailwind CSS'].map(skill => (
                            <span key={skill} className="px-4 py-2 border border-secondary text-neutral-400 font-bold text-xs uppercase tracking-widest hover:border-[#092e20] hover:text-white transition-colors duration-300 hover:bg-[#092e20]/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};
