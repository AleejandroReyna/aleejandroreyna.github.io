import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Experience = () => {
  return (
    <section className="py-24 bg-neutral text-neutral-content">

      <div className="mx-auto max-w-md md:max-w-7xl lg:max-w-7xl">

        <h2 className="text-5xl font-bold text-center text-white pb-4">A little about my experience</h2>
        <p className="text-2xl text-center pb-8">
          I have been working with technology for over 12 years, and I have had the opportunity to work with some of the best companies in the world. I have worked on projects that have changed the world, and I am proud to be part of that change.
        </p>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              
              <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
            </div>
            <article className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">September - 2012</time>
              <h3 className="text-lg font-black">Ziogama - My first experience</h3>
              <p>
                I started my career at Ziogama, A friend's company where I learned the basics of web development. I was responsible for creating 
                and maintaining websites for small businesses. I learned a lot about HTML, CSS, and JavaScript, and I fell in love with web development.
              </p>
            </article>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              
              <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
            </div>
            <article className="timeline-end md:mb-10">
              <time className="font-mono italic">April - 2014</time>
              <h3 className="text-lg font-black">Starting as a freelance</h3>
              <p>
                I meet a famous entrepreneur in my city, and I started working as a freelance developer. I worked on several projects,
                 including e-commerce websites, web applications, and mobile apps. I learned a lot about project management, 
                 client communication, and how to work independently.
              </p>
            </article>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              
              <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
            </div>
            <article className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">January - 2015</time>
              <h3 className="text-lg font-black">Cobra Branding Studio - Wordpress Developer now</h3>
              <p>
                I started working at Cobra Branding Studio, a small branding agency. I was responsible for creating and maintaining WordPress websites 
                for our clients. I learned a lot about WordPress, SEO, and how to work with designers and clients.
              </p>
            </article>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              
              <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
            </div>
            <article className="timeline-end md:mb-10">
              <time className="font-mono italic">January - 2016</time>
              <h3 className="text-lg font-black">Time for a break</h3>
              <p>I decided to be better and I took a time to learn and improve my skills. 
                I took several online courses, read books, and attended conferences. I learned a lot about web development, design, and entrepreneurship.
                I also started working on my own projects, including a personal blog and a few side projects. I learned a lot about how to work independently,
                how to manage my time, and how to stay motivated. I also learned a lot about how to market myself and my projects.
                I started to build my personal brand and I started to get more clients and opportunities.
              </p>
            </article>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              
              <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
            </div>
            <article className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">March - 2017</time>
              <h3 className="text-lg font-black">Somadtech - The Full Stack Developer it's here</h3>
              At somadtech I did a lot of things
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}