import { HeroClient } from "./_HeroClient";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-24" id="home">

      {/* Radial glow, top-left — mirrors the design's hero backdrop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(1000px 460px at 18% -10%, rgba(37,84,58,0.35), transparent 70%)' }}
      ></div>

      <HeroClient />
    </section>
  );
};
