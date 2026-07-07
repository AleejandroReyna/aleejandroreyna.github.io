import "./TechTicker.styles.css";

// Mock list until this is driven by the Technologies Payload collection.
const technologies = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Django",
  "Rails",
  "AWS",
  "PostgreSQL",
  "LLM Agents",
];

export const TechTicker = () => {
  // Two copies back to back; the track slides -50% and loops seamlessly.
  const loop = [...technologies, ...technologies];

  return (
    <div className="border-t border-b border-[#9be8b8]/8 py-4 overflow-hidden relative">
      <div className="tech-ticker__track flex w-max items-center whitespace-nowrap font-mono text-[11px] tracking-[0.14em] uppercase text-[#dfe5e0]/40">
        {loop.map((tech, i) => (
          <span key={i} className="flex items-center">
            <span className="px-4">{tech}</span>
            <span className="text-[#9be8b8]/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};
