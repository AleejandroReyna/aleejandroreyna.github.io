import { SiGithub, SiPython, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiRuby } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ArrowRight, Star, Mail, Download, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="hero min-h-screen bg-black relative overflow-hidden" id="home">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="hero-content flex-col gap-8 max-w-7xl mx-auto px-4 py-28 relative z-10">
        {/* Main Content Section */}
        <div className="text-center w-full">
          {/* Availability Badge */}
          <div className="mb-6 flex justify-center">
            <div className="badge badge-success gap-2 px-4 py-3">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              Open to Opportunities
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-white">
            Alejandro Reyna
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-gray-300">
            Code Poet & Full-Stack Developer
          </h2>

          {/* Philosophy Statement */}
          <p className="text-xl lg:text-2xl mb-6 text-gray-400 italic max-w-3xl mx-auto">
            &ldquo;I don&apos;t just write code that works - I write code that sings.&rdquo;
          </p>

          {/* Description */}
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer from Guatemala who approaches programming as an art form.
            Passionate about Python, JavaScript, TypeScript, and Ruby.
            Full-time learner, occasional musician, and advocate for elegant software solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <a href="#portfolio" className="btn btn-primary btn-lg gap-2 text-white">
              View My Work
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg gap-2 text-gray-300 border-2 border-gray-500 hover:bg-gray-800 hover:border-gray-400 transition-all">
              Get in Touch
              <Mail size={20} />
            </a>
            <a
              href="https://docs.google.com/document/d/19i8rsqaC642stR7IO8SOnJxGN19vojTO/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost gap-2 text-gray-400 border border-gray-700 hover:bg-gray-900 hover:border-gray-600 hover:text-gray-300"
            >
              Download Resume
              <Download size={20} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
            <a
              href="https://linkedin.com/in/aleejandroreyna"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost gap-2 text-gray-300 border border-gray-700 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinPlain color="currentColor" size={24} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/aleejandroreyna"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost gap-2 text-gray-300 border border-gray-700 hover:bg-[#6e5494] hover:border-[#6e5494] hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <SiGithub size={24} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://calendly.com/aleejandroreyna"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost gap-2 text-gray-300 border border-gray-700 hover:bg-[#006BFF] hover:border-[#006BFF] hover:text-white transition-all"
              aria-label="Schedule a Call"
            >
              <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
              <span className="hidden sm:inline">Schedule Call</span>
            </a>
            <a
              href="mailto:me@alejandroreyna.com"
              className="btn btn-ghost gap-2 text-gray-300 border border-gray-700 hover:bg-[#14B8A6] hover:border-[#14B8A6] hover:text-white transition-all"
              aria-label="Send Email"
            >
              <Mail size={24} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <div className="tooltip" data-tip="Python/Django">
                <SiPython size={40} className="hover:scale-110 transition-all cursor-pointer grayscale hover:grayscale-0" style={{ color: '#3776AB' }} />
              </div>
              <div className="tooltip" data-tip="TypeScript">
                <SiTypescript size={40} className="hover:scale-110 transition-all cursor-pointer grayscale hover:grayscale-0" style={{ color: '#3178C6' }} />
              </div>
              <div className="tooltip" data-tip="React">
                <SiReact size={40} className="hover:scale-110 transition-all cursor-pointer grayscale hover:grayscale-0" style={{ color: '#61DAFB' }} />
              </div>
              <div className="tooltip" data-tip="Node.js">
                <SiNodedotjs size={40} className="hover:scale-110 transition-all cursor-pointer grayscale hover:grayscale-0" style={{ color: '#339933' }} />
              </div>
              <div className="tooltip" data-tip="Next.js">
                <SiNextdotjs size={40} className="hover:scale-110 transition-all cursor-pointer grayscale hover:grayscale-0" style={{ color: '#FFFFFF' }} />
              </div>
              <div className="tooltip" data-tip="Ruby">
                <SiRuby size={40} className="hover:scale-110 transition-all cursor-pointer grayscale hover:grayscale-0" style={{ color: '#CC342D' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-black border border-gray-800 w-full">
            <div className="stat place-items-center">
              <div className="stat-value text-gray-100">86+</div>
              <div className="stat-title text-gray-100">Repositories</div>
              <div className="stat-desc text-gray-100">GitHub Projects</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-gray-100">246+</div>
              <div className="stat-title text-gray-100">Contributions</div>
              <div className="stat-desc text-gray-100">Last Year</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-gray-100">4</div>
              <div className="stat-title text-gray-100">Organizations</div>
              <div className="stat-desc text-gray-100">Active Member</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value"><Star className="inline text-yellow-500" size={32} fill="currentColor" /></div>
              <div className="stat-title text-gray-100">Arctic Code Vault</div>
              <div className="stat-desc text-gray-100">Contributor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-600" />
      </div>
    </section>
  );
};