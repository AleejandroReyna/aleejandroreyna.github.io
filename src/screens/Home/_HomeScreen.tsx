import { Hero } from "./Hero"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
import { Resume } from "./Resume"
import { Contact } from "./Contact"

export const HomeScreen = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
    </>
  )
}