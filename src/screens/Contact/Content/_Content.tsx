import { getSiteSettings } from "@/lib/payload";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Linkedin, Calendar } from 'lucide-react';
import { AnimateIn } from "@/components/ds/AnimateIn";
import { ContactForm } from './ContactForm';

const processSteps = [
  {
    number: "01",
    title: "The call",
    description: "30 minutes to understand the problem, the constraints, and whether we're a fit. No pitch.",
  },
  {
    number: "02",
    title: "The blueprint",
    description: "Architecture, scope, timeline, and a fixed price. You know exactly what you're getting before anything is built.",
  },
  {
    number: "03",
    title: "The build",
    description: "Weekly demos on a live staging environment. You watch it grow — no black box, no surprises.",
  },
  {
    number: "04",
    title: "Production & beyond",
    description: "Deployment, documentation, and handoff — or ongoing partnership. 30+ systems still under my watch.",
  },
];

export const Content = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly, email } = settings.social || {};

  return (
    <section className="text-foreground flex-auto w-full relative overflow-hidden" id="contact">

      {/* HEADER + FORM */}
      <div className="pt-36 pb-24 relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(900px 460px at 15% -10%, rgba(37,84,58,0.32), transparent 70%)' }}
        ></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10 grid grid-cols-1 lg:grid-cols-11 gap-14 lg:gap-20">

          {/* Left — headline + contact rows */}
          <AnimateIn className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.2em] uppercase text-[#dfe5e0]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46d386] animate-pulse"></span>
              Status: Available — 2026
            </div>
            <h1 className="font-serif font-medium text-7xl md:text-[92px] leading-none text-[#f2f4f0]">
              Let&apos;s<br />
              talk<span className="text-[#46d386]">.</span>
            </h1>
            <p className="font-heading text-base leading-[1.75] text-[#dfe5e0]/65 mt-8 max-w-[420px]">
              Currently accepting a limited number of projects — architecture, full builds, or rescue missions. Tell me what you&apos;re building and I&apos;ll reply within 24 hours.
            </p>

            <div className="mt-14 flex flex-col">
              <div className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-6 py-5.5 border-t border-[#9be8b8]/12 items-baseline">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40">Email</span>
                <a href={`mailto:${email}`} className="font-mono font-medium text-[15px] tracking-[0.04em] text-[#dfe5e0] hover:text-[#9be8b8] transition-colors duration-300 break-all">
                  {email}
                </a>
              </div>
              <div className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-6 py-5.5 border-t border-[#9be8b8]/12 items-baseline">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40">Call</span>
                <a
                  href={`https://calendly.com/${calendly}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-mono font-medium text-[15px] tracking-[0.04em] text-[#dfe5e0] hover:text-[#9be8b8] transition-colors duration-300 break-all"
                >
                  <Calendar size={14} className="shrink-0" />
                  calendly.com/{calendly} ↗
                </a>
              </div>
              <div className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-6 py-5.5 border-t border-[#9be8b8]/12 items-baseline">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40">Social</span>
                <span className="flex flex-wrap gap-x-7 gap-y-2 font-mono font-medium text-xs tracking-[0.14em] uppercase">
                  <a
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 whitespace-nowrap text-[#dfe5e0] hover:text-[#9be8b8] transition-colors duration-300"
                  >
                    <SiGithub size={13} />
                    GitHub ↗
                  </a>
                  <a
                    href={`https://linkedin.com/in/${linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 whitespace-nowrap text-[#dfe5e0] hover:text-[#9be8b8] transition-colors duration-300"
                  >
                    <Linkedin size={13} />
                    LinkedIn ↗
                  </a>
                </span>
              </div>
              <div className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-6 py-5.5 border-t border-b border-[#9be8b8]/12 items-baseline">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#dfe5e0]/40">Base</span>
                <span className="font-mono font-medium text-[15px] tracking-[0.04em] text-[#dfe5e0]">
                  Guatemala City — UTC−6, remote worldwide
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Right — form card */}
          <AnimateIn delay={0.15} className="lg:col-span-6">
            <div className="border border-[#9be8b8]/12 rounded bg-[#0c100d]/90 p-8 md:p-12">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-8">
                Start a Project
              </div>
              <ContactForm />
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-24 border-t border-[#9be8b8]/8">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-4">
            What Happens Next
          </div>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-[#f2f4f0] mb-14">
            From message to production
          </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#9be8b8]/10 border border-[#9be8b8]/10">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-[#0c100d]/90 p-10">
                <div className="font-serif font-medium text-[44px] leading-none text-[#9be8b8]/25 mb-4.5">
                  {step.number}
                </div>
                <div className="font-serif font-medium text-[22px] text-[#f2f4f0] mb-2.5">
                  {step.title}
                </div>
                <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          </AnimateIn>
        </div>
      </div>

      {/* CTA STRIP */}
      <div className="py-22 border-t border-[#9be8b8]/8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(700px 400px at 50% 100%, rgba(37,84,58,0.2), transparent 70%)' }}
        ></div>
        <AnimateIn className="relative z-10 px-6">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
            Prefer to skip the form?
          </div>
          <div className="font-serif font-medium text-4xl md:text-[52px] leading-[1.1] text-[#f2f4f0]">
            Book 30 minutes, <span className="italic text-[#9be8b8]">directly</span>.
          </div>
          <a
            href={`https://calendly.com/${calendly}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-9 font-mono font-medium text-xs tracking-[0.18em] uppercase text-[#dfe5e0] border border-[#9be8b8]/35 px-8 py-4 rounded-sm hover:bg-[#9be8b8]/10 transition-colors duration-300"
          >
            Open Calendly ↗
          </a>
        </AnimateIn>
      </div>
    </section>
  );
};
