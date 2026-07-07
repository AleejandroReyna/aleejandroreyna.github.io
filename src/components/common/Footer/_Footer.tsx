import { yearsOfExperience } from "@/utils/yearsOfExperience";
import { currentYear } from "@/utils/currentYear";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Mail, Heart, Linkedin, Terminal } from 'lucide-react';
import { getSiteSettings } from "@/lib/payload";
import { PythonOriginal } from "devicons-react";

export const Footer = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly, email } = settings.social || {};
  return (
    <footer className="border-t border-secondary/50 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4 tracking-tighter flex items-center gap-2 group">
              <div className="w-2 h-2 bg-[#092e20] group-hover:shadow-[0_0_15px_#092e20] transition-shadow duration-300"></div>
              Alejandro Reyna
            </h3>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-6">Full-Stack Engineer</p>
            <p className="text-neutral-400 text-sm font-medium leading-relaxed">
              Architecting precision at every layer of the stack. {yearsOfExperience()}+ years building high-performance systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-heading text-foreground mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#092e20]"></span> Quick Links
            </h4>
            <nav className="space-y-4">
              <a href="#home" className="block text-neutral-400 font-medium hover:text-white transition-colors uppercase text-xs tracking-widest">Home</a>
              <a href="#about" className="block text-neutral-400 font-medium hover:text-white transition-colors uppercase text-xs tracking-widest">About</a>
              <a href="#portfolio" className="block text-neutral-400 font-medium hover:text-white transition-colors uppercase text-xs tracking-widest">Portfolio</a>
              <a href="#skills" className="block text-neutral-400 font-medium hover:text-white transition-colors uppercase text-xs tracking-widest">Expertise</a>
              <a href="#contact" className="block text-neutral-400 font-medium hover:text-white transition-colors uppercase text-xs tracking-widest">Contact</a>
            </nav>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-sm font-bold font-heading text-foreground mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#092e20]"></span> Tech Stack
            </h4>
            <ul className="space-y-4 text-neutral-400 text-xs font-medium uppercase tracking-widest">
              <li className="flex items-center gap-2 hover:text-foreground transition-colors"><span className="text-neutral-600">/</span> Next.js & React</li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors"><span className="text-neutral-600">/</span> Python & Django</li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors"><span className="text-neutral-600">/</span> Ruby on Rails</li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors"><span className="text-neutral-600">/</span> Cloud & CI/CD</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold font-heading text-foreground mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#092e20]"></span> Network
            </h4>
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-foreground font-bold hover:text-white transition-all duration-300 p-4 bg-secondary/15 border border-secondary hover:border-[#092e20] hover:bg-[#092e20]/10 group"
              >
                <Mail size={16} className="text-neutral-400" />
                <span className="text-xs uppercase tracking-widest">{email}</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 bg-secondary/15 border border-secondary p-3 hover:border-[#092e20] hover:text-white transition-all duration-300 hover:bg-[#092e20]/20"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </a>
              <a
                href={`https://linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 bg-secondary/15 border border-secondary p-3 hover:border-[#092e20] hover:text-white transition-all duration-300 hover:bg-[#092e20]/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`https://calendly.com/${calendly}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 bg-secondary/15 border border-secondary p-3 hover:border-[#092e20] hover:text-white transition-all duration-300 hover:bg-[#092e20]/20"
                aria-label="Schedule a call"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/50 relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            <p className="flex items-center gap-2">
              <Terminal size={12} className="text-neutral-400" /> ONLINE © {currentYear()} Alejandro Reyna
            </p>
            <p className="font-body italic text-[11px] text-neutral-500 hover:text-white transition-colors duration-300 flex items-center gap-2 normal-case tracking-normal">
              <a href="https://zen-of-python.info/" target="_blank" rel="noopener noreferrer">{`"Simple is better than complex" - Zen of Python`}</a> 
              <PythonOriginal style={{ display: 'inline' }} size={16} />
            </p>
            <p className="flex items-center gap-2">
              BUILT WITH <Heart size={12} className="text-neutral-400" fill="currentColor" /> IN GTM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
