'use client';
import { useState } from "react";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(8);

  return (
    <section className="py-24 bg-neutral text-neutral-content">

      <div className="mx-auto max-w-md md:max-w-7xl lg:max-w-7xl">

        <h2 className="text-5xl font-bold text-center text-white pb-4">A little about my experience</h2>
        <p className="text-2xl text-center pb-8">
          I have been working with technology for over 12 years, and I have had the opportunity to work with some of the best companies in the world. I have worked on projects that have changed the world, and I am proud to be part of that change.
        </p>

        <div className="flex flex-row">
          <div className="basis-1/3">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start">April - 2023</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0" onClick={() => setActiveTab(8)}>
                <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm">Zigi App - Fintech experience</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">April - 2021</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm" onClick={() => setActiveTab(7)}>Lionmane - Working with lions</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">January - 2019</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm" onClick={() => setActiveTab(6)}>Afinidata - Working for the children</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">November - 2018</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                  <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm" onClick={() => setActiveTab(5)}>Botpro - A chatbot experience</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">March - 2017</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                  <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm" onClick={() => setActiveTab(4)}>Somadtech - The Full Stack Developer is here</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">January - 2016</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                  <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm" onClick={() => setActiveTab(3)}> Time for a break</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">January - 2015</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                  <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm"  onClick={() => setActiveTab(2)}>Cobra Branding Studio - Wordpress Developer now</button></div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">April - 2014</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                  <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm"  onClick={() => setActiveTab(1)}>Starting as a freelance</button>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">September - 2012</div>
                <div className="timeline-middle">

                  <FontAwesomeIcon color="white" icon={faCheckCircle} className="timeline-icon" />
                </div>
                <div className="timeline-end timeline-box bg-neutral border-none p-0">
                  <button className="btn btn-neutral h-auto my-2 border-solid border-white py-2 px-1 ml-2 btn-sm"  onClick={() => setActiveTab(0)}>
                  Ziogama - My first experience
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="basis-2/3 ml-8">
            {
              activeTab === 0 &&
              <article className="timeline-start mb-10">
                <time className="font-mono italic text-xl">September - 2012</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Ziogama - My first experience</h3>
                <p className="text-2xl">
                  I started my career at Ziogama, A friend's company where I learned the basics of web development. I was responsible for creating
                  and maintaining websites for small businesses. I learned a lot about HTML, CSS, and JavaScript, and I fell in love with web development.
                </p>
              </article>
            }
            {
              activeTab === 1 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">April - 2014</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Starting as a freelance</h3>
                <p className="text-2xl">
                  I met a famous entrepreneur in my city, and I started working as a freelance developer. I worked on several projects,
                  including e-commerce websites, web applications, and mobile apps. I learned a lot about project management,
                  client communication, and how to work independently.
                </p>
              </article>
            }
            {
              activeTab === 2 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">January - 2015</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Cobra Branding Studio - Wordpress Developer now</h3>
                <p className="text-2xl">
                  I started working at Cobra Branding Studio as a Wordpress developer. I learned a lot about Wordpress,
                  and I started to specialize in Wordpress development. I worked on several projects, including e-commerce websites,
                  blogs, and corporate websites. I learned a lot about SEO, performance optimization, and how to create beautiful websites.
                </p>
              </article>
            }
            {
              activeTab === 3 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">January - 2016</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Time for a break</h3>
                <p className="text-2xl">
                  I decided to take a break and focus on my personal projects. I worked on several side projects, including a personal blog,
                  and I started to build my personal brand. I learned a lot about marketing, branding, and how to create a successful online presence.
                </p>
              </article>
            }
            {
              activeTab === 4 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">March - 2017</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Somadtech - The Full Stack Developer is here</h3>
                <p className="text-2xl">
                  I started working at Somadtech as a full stack developer. I worked on several projects, including web applications,
                  mobile apps, and e-commerce websites. I learned a lot about full stack development, and I started to specialize in full stack development.
                </p>
              </article>
            }
            {
              activeTab === 5 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">November - 2018</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Botpro - A chatbot experience</h3>
                <p className="text-2xl">
                  I started working at Botpro as a full stack developer. I worked on several projects, including chatbots, web applications,
                  and mobile apps. I learned a lot about chatbots, and I started to specialize in chatbot development.
                </p>
              </article>
            }
            {
              activeTab === 6 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">January - 2019</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Afinidata - Working for the children</h3>
                <p className="text-2xl">
                  I started working at Afinidata as a full stack developer. I worked on several projects, including web applications,
                  mobile apps, and e-commerce websites. I learned a lot about full stack development, and I started to specialize in full stack development.
                </p>
              </article>
            }
            {
              activeTab === 7 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">April - 2021</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Lionmane - Working with lions</h3>
                <p className="text-2xl">
                  I started working at Lionmane as a full stack developer. I worked on several projects, including web applications,
                  mobile apps, and e-commerce websites. I learned a lot about full stack development, and I started to specialize in full stack development.
                </p>
              </article>
            }
            {
              activeTab === 8 &&
              <article className="timeline-end md:mb-10">
                <time className="font-mono italic text-xl">April - 2023</time>
                <h3 className="text-4xl mb-6 mt-3 font-black">Zigi App - Fintech experience</h3>
                <p className="text-2xl">
                  I started working at Zigi App as a full stack developer. I worked on several projects, including web applications,
                  mobile apps, and e-commerce websites. I learned a lot about full stack development, and I started to specialize in full stack development.
                </p>
              </article>
            }
          </div>
        </div>


      </div>
    </section>
  )
}