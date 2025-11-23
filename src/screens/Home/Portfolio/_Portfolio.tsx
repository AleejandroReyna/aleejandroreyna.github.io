import {
  SiReact,
  SiTypescript,
  SiWordpress,
  SiMobx,
  SiJavascript,
  SiVuedotjs,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiBitrise,
  SiAwsfargate,
  SiNextdotjs
} from "@icons-pack/react-simple-icons";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-24 relative overflow-hidden" id="portfolio">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Selected Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project is a story written in code—a blend of technical precision and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Project Card 1 - Zigi App */}
          <article className="card bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all">
            <figure className="relative overflow-hidden h-48">
              <Image
                src="/images/portfolio/zigi.png"
                alt="Zigi App"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="badge bg-gray-200 border-gray-300 text-gray-700">2023</span>
              </div>
            </figure>

            <div className="card-body">
              <h3 className="card-title text-gray-900">Zigi App</h3>
              <p className="text-gray-700">
                Democratizing banking through fintech innovation. Mobile-first platform enabling financial access.
              </p>

              <div className="my-4">
                <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  <SiReact size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#61DAFB' }} />
                  <SiTypescript size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#3178C6' }} />
                  <SiMobx size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#FF9955' }} />
                  <SiBitrise size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#683D87' }} />
                  <SiWordpress size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#21759B' }} />
                </div>
              </div>

              <div className="card-actions justify-start gap-2">
                <a href="#" className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2">
                  <Github size={16} /> Code
                </a>
                <a href="#" className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </article>

          {/* Project Card 2 - XP3 Talent */}
          <article className="card bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all">
            <figure className="relative overflow-hidden h-48">
              <Image
                src="/images/portfolio/sescom.png"
                alt="XP3 Talent"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="badge bg-gray-200 border-gray-300 text-gray-700">2025</span>
              </div>
            </figure>

            <div className="card-body">
              <h3 className="card-title text-gray-900">SESCOM</h3>
              <p className="text-gray-700">
                Streamlining HR with intelligent automation. Comprehensive management system serving 500+ companies.
              </p>

              <div className="my-4">
                <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  <SiPhp size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#777BB4' }} />
                  <SiLaravel size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#FF2D20' }} />
                  <SiJavascript size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#F7DF1E' }} />
                  <SiVuedotjs size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#4FC08D' }} />
                  <SiAwsfargate size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#FF9900' }} />
                </div>
              </div>

              <div className="card-actions justify-start gap-2">
                <a href="#" className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2">
                  <Github size={16} /> Code
                </a>
                <a href="#" className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </article>

          {/* Project Card 3 - Afinidata */}
          <article className="card bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all">
            <figure className="relative overflow-hidden h-48">
              <Image
                src="/images/portfolio/insolgas.png"
                alt="InsolGas"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="badge bg-gray-200 border-gray-300 text-gray-700">2024</span>
              </div>
            </figure>

            <div className="card-body">
              <h3 className="card-title text-gray-900">InsolGas</h3>
              <p className="text-gray-700">
                Website for InsolGas, a company that provides instalation of gas stations and services.
              </p>

              <div className="my-4">
                <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  <SiNodedotjs size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#339933' }} />
                  <SiTypescript size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#3178C6' }} />
                  <SiReact size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#61DAFB' }} />
                  <SiNextdotjs size={24} className="hover:scale-110 transition-all cursor-pointer" style={{ color: '#000000' }} />
                </div>
              </div>

              <div className="card-actions justify-start gap-2">
                <a href="#" className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2">
                  <Github size={16} /> Code
                </a>
                <a href="#" className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </article>

        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <a href="/projects" className="btn btn-outline btn-lg gap-2 text-gray-700 border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-500 transition-all">
            View All Projects
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
