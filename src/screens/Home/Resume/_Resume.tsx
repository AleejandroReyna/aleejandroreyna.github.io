'use client';
import { useState } from "react";
import { ExternalLink, Clock, MapPin, Briefcase, Code2, Building2, CheckCircle2 } from "lucide-react";

interface ExperienceEntry {
    id: number;
    date: string;
    dateShort: string;
    company: string;
    role: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
    link?: string;
}

const experiences: ExperienceEntry[] = [
    {
        id: 8,
        date: "April 2023 - June 2024",
        dateShort: "April 2023",
        company: "Zigi App",
        role: "Senior Full-Stack Developer",
        location: "Remote",
        description: "Leading development of fintech platform democratizing banking access for underserved communities.",
        achievements: [
            "Built mobile-first platform serving 100,000+ users",
            "Created custom design system for consistent UI/UX",
            "Tested and implemented security tools and libraries"
        ],
        technologies: ["React", "TypeScript", "Bitrise"]
    },
    {
        id: 7,
        date: "April 2021 - March 2023",
        dateShort: "April 2021",
        company: "Lionmane",
        role: "Full-Stack Developer",
        location: "Remote",
        description: "Developed enterprise solutions for digital transformation.",
        achievements: [
            "Implemented RESTful API endpoints for core platform features",
            "Built responsive UI screens consuming backend services",
            "Delivered new features and resolved critical bugs across the stack",
            "Proposed database optimization strategies to improve data architecture"
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
        id: 6,
        date: "January 2019 - March 2021",
        dateShort: "January 2019",
        company: "Afinidata",
        role: "Full-Stack Developer",
        location: "Remote",
        description: "Created AI-powered chatbot platform for early childhood development.",
        achievements: [
            "Reached 100,000+ families worldwide",
            "Built chatbot integrations for Facebook Messenger and Twilio",
            "Developed admin dashboard for content management"
        ],
        technologies: ["Python", "Django", "Node.js", "Express", "React", "Vue", "Messenger", "Twilio"]
    },
    {
        id: 5,
        date: "November 2018 - December 2018",
        dateShort: "November 2018",
        company: "Botpro",
        role: "Full-Stack Developer",
        location: "Guatemala",
        description: "Specialized in chatbot development and conversational AI.",
        achievements: [
            "Built chatbot framework used across 10+ clients",
            "Integrated with multiple messaging platforms"
        ],
        technologies: ["Node.js", "Python", "NLP", "Dialogflow"]
    },
    {
        id: 4,
        date: "March 2017 - October 2018",
        dateShort: "March 2017",
        company: "Somadtech",
        role: "Full-Stack Developer",
        location: "Guatemala",
        description: "Developed web and mobile applications for diverse clients.",
        achievements: [
            "Delivered 15+ projects on time and within budget",
            "Established full-stack development best practices",
            "Led team on 3 projects"
        ],
        technologies: ["PHP", "Laravel", "JavaScript", "Vue", "MySQL"]
    },
    {
        id: 3,
        date: "January 2016 - February 2017",
        dateShort: "January 2016",
        company: "Personal Break",
        role: "Independent Developer",
        location: "Guatemala",
        description: "Focused on personal projects and skill development.",
        achievements: [
            "Built personal blog and portfolio (outdated now, haha)",
            "Learned React and modern JavaScript",
            "Contributed to open source projects"
        ],
        technologies: ["React", "JavaScript", "Node.js"]
    },
    {
        id: 2,
        date: "January 2015 - December 2015",
        dateShort: "January 2015",
        company: "Cobra Branding Studio",
        role: "WordPress Developer",
        location: "Guatemala",
        description: "Specialized in WordPress theme and plugin development.",
        achievements: [
            "Created 6+ custom WordPress sites",
            "Optimized site performance",
            "Implemented SEO best practices"
        ],
        technologies: ["WordPress", "PHP", "JavaScript", "MySQL"]
    },
    {
        id: 1,
        date: "April 2014 - Present",
        dateShort: "April 2014",
        company: "Freelance",
        role: "Web Developer",
        location: "Guatemala",
        description: "Independent contractor for various clients.",
        achievements: [
            "Completed 10+ MVPs",
            "Built e-commerce sites and web applications",
            "Managed client relationships independently"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "Node.js", "React", "React Native", "TypeScript", "MobX", "WordPress", "Bitrise"]
    },
    {
        id: 0,
        date: "September 2012 - March 2014",
        dateShort: "September 2012",
        company: "Ziogama",
        role: "Junior Web Developer",
        location: "Guatemala",
        description: "First professional role, learned web development fundamentals.",
        achievements: [
            "Created and maintained 5+ small business websites",
            "Learned HTML, CSS, JavaScript, PHP and wordpress from scratch",
            "Fell in love with web development"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
];

// Collect unique technologies across all experiences
const allTechnologies = new Set(experiences.flatMap(exp => exp.technologies));

const stats = [
    { icon: Clock, label: "Years of Experience", value: "12+" },
    { icon: Building2, label: "Companies", value: `${experiences.length}` },
    { icon: Code2, label: "Technologies", value: `${allTechnologies.size}+` },
    { icon: Briefcase, label: "Projects Delivered", value: "50+" },
];

export const Resume = () => {
    const [activeTab, setActiveTab] = useState(8);
    const activeExperience = experiences.find(exp => exp.id === activeTab);

    // Extract year from the active experience for the watermark
    const watermarkYear = activeExperience?.dateShort.split(' ').pop() || '';

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
                {/* Heading */}
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
                                const isActive = activeTab === exp.id;
                                return (
                                    <li key={exp.id}>
                                        {index > 0 && <hr className="bg-primary" />}
                                        <div className="timeline-start text-gray-500 text-sm font-medium">
                                            {exp.dateShort}
                                        </div>
                                        <div className="timeline-middle">
                                            <div className="relative flex items-center justify-center">
                                                {/* Glow ring behind active dot */}
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
                                                onClick={() => setActiveTab(exp.id)}
                                            >
                                                <div>
                                                    <div className="font-bold">{exp.company}</div>
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
                                    {/* Primary accent bar - top */}
                                    <div className="h-1.5 w-full bg-primary" />

                                    {/* Watermark Year */}
                                    <div className="absolute top-8 right-6 text-[8rem] font-black text-gray-900/[0.03] leading-none select-none pointer-events-none">
                                        {watermarkYear}
                                    </div>

                                    <div className="p-8 relative">
                                        {/* Header with subtle background */}
                                        <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-100">
                                            <div>
                                                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                                                    {activeExperience.company}
                                                </h3>
                                                <p className="text-lg text-primary font-semibold mb-3">
                                                    {activeExperience.role}
                                                </p>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                                                        <Clock size={13} />
                                                        {activeExperience.date}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                                                        <MapPin size={13} />
                                                        {activeExperience.location}
                                                    </span>
                                                </div>
                                            </div>
                                            {activeExperience.link && (
                                                <a
                                                    href={activeExperience.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-primary hover:text-primary gap-2"
                                                >
                                                    <ExternalLink size={16} /> Visit
                                                </a>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                                            {activeExperience.description}
                                        </p>

                                        {/* Achievements */}
                                        {activeExperience.achievements.length > 0 && (
                                            <div className="mb-8">
                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-3">
                                                    {activeExperience.achievements.map((achievement, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {activeExperience.technologies.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {activeExperience.technologies.map(tech => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors duration-200"
                                                            style={{
                                                                backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
                                                                borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                                                                color: 'var(--color-primary)'
                                                            }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
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
