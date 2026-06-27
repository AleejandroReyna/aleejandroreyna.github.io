'use client'
import { ArrowRight, Terminal, Globe, BrainCircuit } from "lucide-react"
import { motion } from "motion/react"

export const About = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="about">
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
              <Terminal size={14} /> About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight uppercase">
              Beyond the <span className="text-white">Logic</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#092e20] shadow-[0_0_10px_#092e20]"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-secondary/15 backdrop-blur-md border border-secondary p-8 md:p-12 relative group"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground tracking-wide">
                I'm Alejandro Reyna, a full-stack engineer from Guatemala dedicated to writing elegant, high-performance code.
              </p>
              <p className="text-base text-neutral-400 leading-relaxed font-body">
                For over 12 years, I've been architecting digital solutions. I believe programming is more than solving problems—it's about creating scalable systems wrapped in visually stunning, intuitive interfaces. From complex database architectures to micro-interactions on the frontend, every layer matters.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 border-t border-secondary/50 pt-8 mt-8">
                {/* Global Scope */}
                <div>
                  <h3 className="text-sm font-bold text-foreground tracking-wider uppercase mb-3 flex items-center gap-2">
                    <Globe size={16} className="text-neutral-400" /> Global Impact
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Working remotely has allowed me to collaborate with teams globally. Proficient in Python, TypeScript, React, Node.js, and Ruby on Rails.
                  </p>
                </div>

                {/* Beyond Logic */}
                <div>
                  <h3 className="text-sm font-bold text-foreground tracking-wider uppercase mb-3 flex items-center gap-2">
                    <BrainCircuit size={16} className="text-neutral-400" /> Human Side
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    When I'm not writing code, you can find me making music, hanging with my cat, or doing BMX. I champion clear communication and empathy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full min-h-[400px] relative border border-secondary overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#092e20]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img
              src="/images/about/me.jpg"
              alt="Alejandro Reyna"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            {/* Tech grid overlay */}
            <div className="absolute inset-0 z-20 opacity-15 pointer-events-none mix-blend-screen" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </motion.div>

        </div>

        {/* Stats Grid - Tech Block Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          <div className="bg-secondary/15 border border-secondary p-8 flex flex-col items-start hover:border-[#092e20] transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">12<span className="text-neutral-400">+</span></div>
            <div className="font-medium text-xs uppercase tracking-[0.2em] text-neutral-400">Years Exp</div>
          </div>
          <div className="bg-secondary/15 border border-secondary p-8 flex flex-col items-start hover:border-[#092e20] transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">86<span className="text-neutral-400">+</span></div>
            <div className="font-medium text-xs uppercase tracking-[0.2em] text-neutral-400">Projects</div>
          </div>
          <div className="bg-secondary/15 border border-secondary p-8 flex flex-col items-start hover:border-[#092e20] transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">4</div>
            <div className="font-medium text-xs uppercase tracking-[0.2em] text-neutral-400">Core Stacks</div>
          </div>
          <div className="bg-secondary/15 border border-secondary p-8 flex flex-col items-start hover:border-[#092e20] transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">∞</div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] text-neutral-300">Learning</div>
          </div>
        </motion.div>

        {/* Vision & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-secondary/15 border border-secondary p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground uppercase tracking-tight">
              Fascinated by the intersection of <br/>
              <span className="text-white">entrepreneurship, science, & education.</span>
            </h3>
            <p className="text-base text-neutral-400">
              Constantly seeking opportunities to blend advanced technology with meaningful purpose. Ready to architect the next big thing?
            </p>
          </div>
          <button className="bg-transparent border border-[#092e20] text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#092e20] hover:text-white transition-all duration-300 flex items-center gap-3 shrink-0">
            Read Full Story
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
