import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Mail, MapPin } from 'lucide-react';
import { getSiteSettings } from "@/lib/payload";
import { ContactForm } from './ContactForm';

export const Content = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly } = settings.social || {};

  return (
    <section className="bg-black text-white flex-auto w-full py-24 px-4 relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl h-full relative z-10 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-start h-full gap-16">
          <div className="basis-full lg:basis-1/3 mb-12 lg:mb-0">
            <h2 className="text-6xl font-black mb-6 tracking-tight">
              {"Let's talk."}
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {"Do you have an interesting project? I want to work with you. Send me a message and let's create something amazing together."}
            </p>

            <div className="space-y-6">
              <a 
                target='_blank' 
                href={`https://linkedin.com/in/${linkedin}`}
                className='group flex items-center gap-4 text-gray-300 hover:text-white transition-colors'
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-primary/50 transition-all">
                  <LinkedinPlain color="#ffffff" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">LinkedIn</span>
                  <span className="text-lg font-medium">/in/{linkedin}</span>
                </div>
              </a>

              <a 
                target='_blank' 
                href={`https://github.com/${github}`}
                className='group flex items-center gap-4 text-gray-300 hover:text-white transition-colors'
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-primary/50 transition-all">
                  <SiGithub color="#ffffff" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">GitHub</span>
                  <span className="text-lg font-medium">@{github}</span>
                </div>
              </a>

              <a 
                target='_blank' 
                href={`https://calendly.com/${calendly}`}
                className='group flex items-center gap-4 text-gray-300 hover:text-white transition-colors'
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-primary/50 transition-all">
                  <FontAwesomeIcon icon={faCalendarAlt} size="xl" color="#ffffff" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Calendly</span>
                  <span className="text-lg font-medium">Schedule a call</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="basis-full lg:basis-2/3 w-full">
            <div className="bg-gray-900/40 border border-gray-800 p-8 lg:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}