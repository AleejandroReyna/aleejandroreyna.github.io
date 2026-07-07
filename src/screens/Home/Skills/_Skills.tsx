'use client';
import { motion } from "motion/react";

// Mock data shaped like the `capabilities` Payload collection — swap for a
// payload.find({ collection: "capabilities", sort: "order" }) when ready.
const capabilities = [
  {
    id: "full-stack",
    title: "Full-Stack Engineering",
    description: "End-to-end product builds. Interfaces with intent, backends with backbone.",
    experienceLabel: "12+ Years",
    stacks: [
      { line: "TypeScript · React · Next.js · Vue" },
      { line: "Python & Django · Node.js · Rails" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & APIs",
    description: "Contracts and protocols designed so systems talk clearly — and keep talking.",
    experienceLabel: "9+ Years",
    stacks: [
      { line: "REST · GraphQL · WebSockets" },
      { line: "OAuth & JWT · OpenAPI · Microservices" },
    ],
  },
  {
    id: "data-cloud",
    title: "Data & Cloud Systems",
    description: "Schemas, pipelines, and infrastructure that stays quiet at 3 a.m.",
    experienceLabel: "8+ Years",
    stacks: [
      { line: "PostgreSQL · MongoDB · Redis" },
      { line: "AWS · Docker · CI/CD" },
    ],
  },
  {
    id: "conversational-ai",
    title: "Conversational AI",
    description: "Chatbots and LLM agents wired into real business workflows — automation that pays for itself.",
    experienceLabel: "Since 2023",
    stacks: [
      { line: "LLM Agents · RAG · Function Calling" },
      { line: "WhatsApp & Web Channels" },
    ],
  },
];

const romanNumerals = ["I.", "II.", "III.", "IV.", "V.", "VI."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Skills = () => {
  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8" id="skills">
      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-4">
            03 — Expertise
          </div>
          <h2 className="font-serif font-medium text-5xl md:text-[54px] text-[#f2f4f0] mb-14">
            Capabilities
          </h2>
        </motion.div>

        {/* Cards — 1px emerald gaps act as grid lines, like the design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#9be8b8]/10 border border-[#9be8b8]/10"
        >
          {capabilities.map((capability, i) => (
            <motion.div
              key={capability.id}
              variants={cardVariants}
              className="bg-[#0a0d0b]/90 p-9 md:p-11"
            >
              <div className="flex justify-between mb-4.5">
                <span className="font-mono text-[11px] tracking-[0.16em] text-[#46d386]">
                  {romanNumerals[i]}
                </span>
                {capability.experienceLabel && (
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#dfe5e0]/35">
                    {capability.experienceLabel}
                  </span>
                )}
              </div>
              <h3 className="font-serif font-medium text-[27px] text-[#f2f4f0] mb-3">
                {capability.title}
              </h3>
              {capability.description && (
                <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55 mb-5">
                  {capability.description}
                </p>
              )}
              <div className="font-mono text-[11px] leading-loose tracking-[0.08em] uppercase text-[#9be8b8]/55">
                {capability.stacks?.map((stack) => (
                  <div key={stack.line}>/ {stack.line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
