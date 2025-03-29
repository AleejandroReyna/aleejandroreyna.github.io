import { SiGithub, SiCalendly } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {

  const yearsOfExperience = (): number => {
    return new Date().getFullYear() - 2013;
  }
  return (
    <section className="hero bg-neutral text-neutral-content min-h-screen">
      <div className="hero-content">
        <div className="">
          <h2 className="text-6xl mb-6">Hi, I'm Your best partner <br /> if you want to build something AWESOME.</h2>
          <p className="text-3xl mb-9">
            With {yearsOfExperience()}+ years of experience creating software solutions, I can make your dreams true.</p>

          <ul>
            <li className='mb-4 flex items-center'>
              <LinkedinPlain color="#0a66c2" size={30} className='mr-4' />
              <a target='_blank' href="https://linkedin.com/in/aleejandroreyna">/in/aleejandroreyna</a>
            </li>
            <li className='mb-4  flex items-center'>
              <SiGithub color="#6e5494" size={30}  className='mr-4' />
              <a target='_blank' href="https://github.com/aleejandroreyna">@aleejandroreyna</a>
            </li>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faCalendarAlt} size='2x' color="#006BFF"  className='mr-4' />
              <a target='_blank' href="https://calendly.com/aleejandroreyna">/aleejandroreyna</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}