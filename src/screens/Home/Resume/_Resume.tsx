'use client';
import { useState } from "react";
import { ExternalLink, Clock, MapPin } from "lucide-react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
            "Built mobile-first platform serving 10,000+ users",
            "Reduced API response time by 40% through caching optimization",
            "Implemented secure payment processing with Stripe integration"
        ],
        technologies: ["React", "TypeScript", "MobX", "WordPress", "Bitrise"]
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
            "Built 5+ web applications from concept to deployment",
            "Improved system performance by 50% through architecture redesign",
            "Mentored 3 junior developers"
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
            "Led team of 2 developers"
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
            "Built personal blog and portfolio",
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
            "Created 20+ custom WordPress sites",
            "Optimized site performance (3s to 1s load time)",
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
            "Completed 10+ projects",
            "Built e-commerce sites and web applications",
            "Managed client relationships independently"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP"]
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
            "Created and maintained 15+ small business websites",
            "Learned HTML, CSS, JavaScript from scratch",
            "Fell in love with web development"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
];

export const Resume = () => {
    const [activeTab, setActiveTab] = useState(8);
    const activeExperience = experiences.find(exp => exp.id === activeTab);

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
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Professional Journey
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From my first lines of code in 2012 to leading full-stack projects today,
                        each role has shaped how I approach problems and build solutions.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Timeline - Left Side */}
                    <div className="lg:w-1/3">
                        <ul className="timeline timeline-vertical">
                            {experiences.map((exp, index) => (
                                <li key={exp.id}>
                                    {index > 0 && <hr className="bg-gray-300" />}
                                    <div className="timeline-start text-gray-600 text-sm">{exp.dateShort}</div>
                                    <div className="timeline-middle">
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            className={`text-lg ${activeTab === exp.id ? 'text-primary' : 'text-gray-400'}`}
                                        />
                                    </div>
                                    <div className="timeline-end timeline-box bg-transparent border-none p-0">
                                        <button
                                            className={`btn btn-ghost w-full justify-start text-left border transition-all ${activeTab === exp.id
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
                                    {index < experiences.length - 1 && <hr className="bg-gray-300" />}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content - Right Side */}
                    <div className="lg:w-2/3">
                        {activeExperience && (
                            <article className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{activeExperience.company}</h3>
                                        <p className="text-xl text-gray-700 mb-2">{activeExperience.role}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {activeExperience.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {activeExperience.location}
                                            </span>
                                        </div>
                                    </div>
                                    {activeExperience.link && (
                                        <a
                                            href={activeExperience.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-ghost text-gray-700 border border-gray-300 hover:border-gray-400 gap-2"
                                        >
                                            <ExternalLink size={16} /> Visit
                                        </a>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 mb-6 text-lg">{activeExperience.description}</p>

                                {/* Achievements */}
                                {activeExperience.achievements.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {activeExperience.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                {activeExperience.technologies.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeExperience.technologies.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="badge bg-gray-200 border-gray-300 text-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </article>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
