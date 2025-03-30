import { Hero } from "./Hero"
import { About } from "./About"
import { Services } from "./Services"
import { Experience } from "./Experience"
import { Portfolio } from "./Portfolio"

export const HomeScreen = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
    </>
  )
}