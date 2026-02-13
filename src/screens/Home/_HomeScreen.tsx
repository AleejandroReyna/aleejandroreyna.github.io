import { Hero } from "./Hero"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
import { Resume } from "./Resume"
import { Contact } from "./Contact"
import { getSiteSettings } from "@/lib/payload"

export const HomeScreen = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin, calendly, email } = settings.social || {};

  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact
        contactEmail={email || ''}
        githubUser={github || ''}
        linkedinUser={linkedin || ''}
        calendlyUser={calendly || ''}
      />
    </>
  )
}