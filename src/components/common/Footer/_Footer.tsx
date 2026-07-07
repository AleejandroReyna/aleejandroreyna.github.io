import { yearsOfExperience } from "@/utils/yearsOfExperience";
import { currentYear } from "@/utils/currentYear";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail, Linkedin, Calendar, Feather } from 'lucide-react';
import { getSiteSettings } from "@/lib/payload";

export const Footer = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly, email } = settings.social || {};
  return (
    <footer className="border-t border-[#9be8b8]/8 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-serif font-medium text-3xl text-[#f2f4f0] mb-4 flex items-center gap-3">
              <Feather className="w-4.5 h-4.5 text-white" strokeWidth={1.75} />
              Alejandro Reyna
            </h3>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/70 mb-6">Full-Stack Engineer</p>
            <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
              Architecting precision at every layer of the stack. {yearsOfExperience()}+ years building high-performance systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              Quick Links
            </h4>
            <nav className="space-y-4">
              <a href="#home" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">Home</a>
              <a href="#about" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">About</a>
              <a href="#portfolio" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">Portfolio</a>
              <a href="#skills" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">Expertise</a>
              <a href="#contact" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">Contact</a>
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              Tech Stack
            </h4>
            <ul className="space-y-4 font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/55">
              <li>/ Next.js &amp; React</li>
              <li>/ Python &amp; Django</li>
              <li>/ Ruby on Rails</li>
              <li>/ Cloud &amp; CI/CD</li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              Network
            </h4>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.08em] text-[#dfe5e0] border-b border-[#9be8b8]/40 pb-1.5 mb-8 hover:text-[#9be8b8] hover:border-[#9be8b8] transition-colors duration-300"
            >
              <Mail size={13} />
              {email}
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-4 font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50">
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap hover:text-[#9be8b8] transition-colors duration-300"
              >
                <SiGithub size={13} />
                GitHub
              </a>
              <a
                href={`https://linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap hover:text-[#9be8b8] transition-colors duration-300"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
              <a
                href={`https://calendly.com/${calendly}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap hover:text-[#9be8b8] transition-colors duration-300"
              >
                <Calendar size={13} />
                Calendly
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#9be8b8]/8 relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] tracking-[0.14em] uppercase text-[#dfe5e0]/35">
            <span>© {currentYear()} Alejandro Reyna</span>
            <a
              href="https://zen-of-python.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9be8b8] transition-colors duration-300"
            >
              &ldquo;Simple is better than complex&rdquo; — Zen of Python
            </a>
            <span>Guatemala — Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
