import { Code, Database, Layers, Clock } from "lucide-react";

export const Skills = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden" id="skills">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        12+ years of crafting solutions across the full stack. These are the tools and technologies
                        I wield to turn ideas into elegant, functional reality.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {/* Skill Card 1 - Full-Stack Development */}
                    <div className="card bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all">
                        <div className="card-body">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center">
                                    <Layers size={32} className="text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Full-Stack Development</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock size={14} />
                                        <span>12+ years</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4">
                                End-to-end application architecture, from database design to user interfaces.
                                Building scalable, maintainable solutions that work beautifully.
                            </p>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Frontend:</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">TypeScript</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">React</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">React Native</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Next</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Vue</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Electron</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Backend:</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Python</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Django</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Node</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Nest</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Ruby</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Rails</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">PHP</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Laravel</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skill Card 2 - API Design */}
                    <div className="card bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all">
                        <div className="card-body">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center">
                                    <Code size={32} className="text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">API Design & Integration</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock size={14} />
                                        <span>10+ years</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4">
                                RESTful and GraphQL API architecture. Designing clean, intuitive interfaces
                                between systems that scale and perform.
                            </p>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Technologies:</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">REST</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">GraphQL</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">WebSockets</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">OAuth</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skill Card 3 - Database & Architecture */}
                    <div className="card bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all">
                        <div className="card-body">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center">
                                    <Database size={32} className="text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Database & Architecture</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock size={14} />
                                        <span>12+ years</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4">
                                Database design, optimization, and system architecture. Building data models
                                that support growth and maintain performance.
                            </p>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Databases:</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">PostgreSQL</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">MongoDB</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">MySQL</span>
                                        <span className="badge bg-gray-800 border-gray-700 text-gray-400">Redis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Additional Skills Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Also Experienced With</h3>
                    <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">Docker</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">AWS</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">Git</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">CI/CD</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">Agile</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">TDD</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">Microservices</span>
                        <span className="badge badge-lg bg-gray-800 border-gray-700 text-gray-400">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
