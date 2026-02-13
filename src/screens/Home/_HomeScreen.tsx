import { Hero } from "./Hero"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
import { Resume } from "./Resume"
import { Experience } from "./Experience"
import { Contact } from "./Contact"
import { getSiteSettings, getExperienceDetails } from "@/lib/payload"

export const HomeScreen = async () => {
  const settings = await getSiteSettings();
  const experiences = await getExperienceDetails();
  const { github, linkedin, calendly, email } = settings.social || {};

  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Experience experiences={experiences} />
      <Contact
        contactEmail={email || ''}
        githubUser={github || ''}
        linkedinUser={linkedin || ''}
        calendlyUser={calendly || ''}
      />
    </>
  )
}