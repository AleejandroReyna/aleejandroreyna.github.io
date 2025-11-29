import { Hero } from "./Hero"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
import { Resume } from "./Resume"
import { Contact } from "./Contact"
import { envs } from "@/lib/envs"

export const HomeScreen = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact
        contactEmail={envs.contactEmail}
        githubUser={envs.githubUser}
        linkedinUser={envs.linkedinUser}
        calendlyUser={envs.calendlyUser}
      />
    </>
  )
}