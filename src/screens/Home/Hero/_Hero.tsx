import { getSiteSettings } from "@/lib/payload";
import { HeroClient } from "./_HeroClient";

export const Hero = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly } = settings.social || {};
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-24" id="home">
      
      {/* Tech Grid Background overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#171717 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cta/5 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

      <HeroClient github={github} linkedin={linkedin} calendly={calendly} />
    </section>
  );
};
