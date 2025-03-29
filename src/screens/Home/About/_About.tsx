import Link from "next/link"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-md rounded-xl bg-white md:max-w-7xl lg:max-w-7xl">
        <div className="flex items-center">
          <article>
            <h2 className="text-5xl font-bold py-8">About Me</h2>
            <p className="py-2 text-xl">
            Knowing Python, Ruby, Javascript and Typescript has made these 12 years of experience wonderful. 
            I'm passionate about technology, best practices, teamwork, and a firm believer that everyone deserves a chance.
            </p>
            <p className="py-2 text-xl">
            I'm interested in leaving a better world for those who follow in our footsteps. I'm a cat lover and musician since I was 14. I'm constantly learning, with solid experience in Django, EcmaScript, 
            React, and React Native, but always open to stepping out of my comfort zone. (Except for Java and .NET, nothing personal)
            </p>
            <p className="py-2 text-xl">
              Fascinated by entrepreneurship 🚀 science 🔭 and education 📚
            </p>
            <p className="py-4 text-xl">
            If you want to create a better version of the world, talk to me.
            </p>

            <Link href="/about" className="underline text-xl">
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 mr-4" />
              More about me
            </Link>
          </article>
          
          <img src="/images/about/me.jpg" className="max-w-sm ml-16 rounded-full shadow-2xl" />
        </div>
      </div>
    </section>
  )
}