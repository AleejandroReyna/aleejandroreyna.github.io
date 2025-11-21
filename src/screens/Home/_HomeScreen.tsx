import { Hero } from "./Hero"
import { About } from "./About"
import { Experience } from "./Experience"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
import { Resume } from "./Resume"
import { Results } from "./Results"
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