import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Mail, MapPin, Terminal } from 'lucide-react';
import { getSiteSettings } from "@/lib/payload";
import { ContactForm } from './ContactForm';

export const Content = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly } = settings.social || {};

  return (
    <section className="bg-background text-foreground flex-auto w-full py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background Line Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="mx-auto max-w-7xl h-full relative z-10 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-start h-full gap-16">
          <div className="basis-full lg:basis-1/3 mb-12 lg:mb-0">
            <span className="text-neutral-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
              <Terminal size={14} /> Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight uppercase mb-8">
              Let's <span className="text-white">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-[#092e20] shadow-[0_0_10px_#092e20] mb-12"></div>
            
            <p className="text-base text-neutral-400 mb-12 leading-relaxed font-body">
              {"Do you have an interesting project? I want to work with you. Send me a message and let's create something amazing together."}
            </p>

            <div className="space-y-6">
              <a 
                target='_blank' 
                href={`https://linkedin.com/in/${linkedin}`}
                className='group flex items-center gap-6 bg-secondary/15 border border-secondary p-6 hover:border-[#092e20] transition-colors duration-300 relative'
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#092e20] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="w-12 h-12 bg-secondary/40 flex items-center justify-center text-white group-hover:bg-[#092e20] transition-colors duration-300 border border-[#092e20]/30 group-hover:border-[#092e20] shrink-0">
                  <LinkedinPlain size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1 block">LinkedIn</span>
                  <span className="text-sm md:text-base font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-300">/in/{linkedin}</span>
                </div>
              </a>

              <a 
                target='_blank' 
                href={`https://github.com/${github}`}
                className='group flex items-center gap-6 bg-secondary/15 border border-secondary p-6 hover:border-[#092e20] transition-colors duration-300 relative'
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#092e20] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="w-12 h-12 bg-secondary/40 flex items-center justify-center text-white group-hover:bg-[#092e20] transition-colors duration-300 border border-[#092e20]/30 group-hover:border-[#092e20] shrink-0">
                  <SiGithub size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1 block">GitHub</span>
                  <span className="text-sm md:text-base font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-300">@{github}</span>
                </div>
              </a>

              <a 
                target='_blank' 
                href={`https://calendly.com/${calendly}`}
                className='group flex items-center gap-6 bg-secondary/15 border border-secondary p-6 hover:border-[#092e20] transition-colors duration-300 relative'
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#092e20] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="w-12 h-12 bg-secondary/40 flex items-center justify-center text-white group-hover:bg-[#092e20] transition-colors duration-300 border border-[#092e20]/30 group-hover:border-[#092e20] shrink-0">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1 block">Calendly</span>
                  <span className="text-sm md:text-base font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-300">Schedule a call</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="basis-full lg:basis-2/3 w-full">
            <div className="bg-secondary/15 border border-secondary p-8 lg:p-12 relative group">
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#092e20] opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#092e20] opacity-50"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
