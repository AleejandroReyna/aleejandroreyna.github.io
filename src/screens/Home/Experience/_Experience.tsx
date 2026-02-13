'use client';
import { useState } from "react";
import Image from "next/image";
import type { ExperienceDetail, Company, Media } from "@/payload-types";
import { ExternalLink, Clock, MapPin, Briefcase, Code2, Building2, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Experience", value: "12+" },
  { icon: Building2, label: "Companies", value: `9` },
  { icon: Code2, label: "Technologies", value: `30+` },
  { icon: Briefcase, label: "Projects Delivered", value: "50+" },
];

interface ExperienceProps {
  experiences: ExperienceDetail[];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function getCompany(exp: ExperienceDetail): Company | null {
  if (typeof exp.company === 'string') return null;
  return exp.company;
}

function getLogoUrl(company: Company | null): string | null {
  if (!company?.logo) return null;
  if (typeof company.logo === 'string') return null;
  return (company.logo as Media).url || null;
}

export const Experience = ({ experiences }: ExperienceProps) => {
  const [activeId, setActiveId] = useState<string>(experiences[0]?.id || '');
  const activeExperience = experiences.find(exp => exp.id === activeId);
  const activeCompany = activeExperience ? getCompany(activeExperience) : null;
  const activeLogo = getLogoUrl(activeCompany);

  // Extract year for watermark
  const watermarkYear = activeExperience
    ? new Date(activeExperience.startDate).getFullYear().toString()
    : '';

  if (experiences.length === 0) return null;

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">

        <div className="text-center mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From my first lines of code in 2012 to leading full-stack projects today,
            each role has shaped how I approach problems and build solutions.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline - Left Side */}
          <div className="lg:w-1/3">
            <ul className="timeline timeline-vertical">
              {experiences.map((exp, index) => {
                const isActive = activeId === exp.id;
                const company = getCompany(exp);
                return (
                  <li key={exp.id}>
                    {index > 0 && <hr className="bg-primary" />}
                    <div className="timeline-start text-gray-500 text-sm font-medium">
                      {formatDateShort(exp.startDate)}
                    </div>
                    <div className="timeline-middle">
                      <div className="relative flex items-center justify-center">
                        {isActive && (
                          <span
                            className="absolute w-7 h-7 rounded-full opacity-30"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          />
                        )}
                        <span
                          className={`relative w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${isActive
                            ? 'border-primary bg-primary scale-110'
                            : 'border-gray-400 bg-white'
                            }`}
                        />
                      </div>
                    </div>
                    <div className="timeline-end timeline-box bg-transparent border-none p-0">
                      <button
                        className={`btn btn-ghost w-full justify-start text-left border transition-all duration-300 ${isActive
                          ? 'border-primary bg-white text-gray-900 shadow-md'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white hover:shadow-sm'
                          }`}
                        onClick={() => setActiveId(exp.id)}
                      >
                        <div>
                          <div className="font-bold">{company?.name || 'Company'}</div>
                          <div className="text-xs opacity-70">{exp.role}</div>
                        </div>
                      </button>
                    </div>
                    {index < experiences.length - 1 && <hr className="bg-primary" />}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Content - Right Side (Sticky) */}
          <div className="lg:w-2/3">
            <div className="lg:sticky lg:top-24">
              {activeExperience && (
                <article className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  {/* Primary accent bar */}
                  <div className="h-1.5 w-full bg-primary" />

                  {/* Watermark Year */}
                  <div className="absolute top-8 right-6 text-[8rem] font-black text-gray-900/[0.03] leading-none select-none pointer-events-none">
                    {watermarkYear}
                  </div>

                  <div className="p-8 relative">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-100">

                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">
                          {activeCompany?.name || 'Company'}
                        </h3>
                        <p className="text-lg text-primary font-semibold mb-3">
                          {activeExperience.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                            <Clock size={13} />
                            {formatDate(activeExperience.startDate)}
                            {' — '}
                            {activeExperience.endDate
                              ? formatDate(activeExperience.endDate)
                              : 'Present'}
                          </span>
                          <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                            <MapPin size={13} />
                            {activeExperience.location === 'remote' ? 'Remote' : 'On-site'}
                          </span>
                        </div>
                      </div>
                      {activeCompany?.url && (
                        <a
                          href={activeCompany.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-primary hover:text-primary gap-2 shrink-0"
                        >
                          Visit
                        </a>
                      )}
                    </div>

                    {/* Rich Text Content */}
                    {activeExperience.content && (
                      <div className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {renderRichText(activeExperience.content)}
                      </div>
                    )}

                    {/* Achievements */}
                    {activeExperience.achievements && activeExperience.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {activeExperience.achievements.map((item) => (
                            <li key={item.id} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                              <span>{item.achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Company Logo - Bottom Right */}
                    {activeLogo && (
                      <div className="absolute bottom-6 right-6 w-20 h-20 opacity-80 pointer-events-none select-none">
                        <Image
                          src={activeLogo}
                          alt={activeCompany?.name || ''}
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple rich text renderer for Lexical content
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