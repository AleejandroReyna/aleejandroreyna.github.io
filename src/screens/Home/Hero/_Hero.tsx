import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { yearsOfExperience } from '@/utils/yearsOfExperience';

export const Hero = () => {

  
  return (
    <section className="hero bg-neutral text-neutral-content min-h-screen">
      <div className="hero-content">
        <div className="">
          <h2 className="text-6xl mb-6 font-bold">Hi, I'm Your best partner <br /> if you want to build something AWESOME.</h2>
          <p className="text-3xl mb-9">
            With {yearsOfExperience()}+ years of experience creating software solutions, I can make your dreams true.</p>

          <div className="flex items-center">
            <div className='flex items-center mr-4'>
              <LinkedinPlain color="#ffffff" size={32} className='mr-1' />
              <a target='_blank' className='link link-hover' href="https://linkedin.com/in/aleejandroreyna">/in/aleejandroreyna</a>
            </div>
            <div className=' flex items-center mr-4'>
              <SiGithub color="#ffffff" size={32}  className='mr-1' />
              <a target='_blank' className='link link-hover' href="https://github.com/aleejandroreyna">@aleejandroreyna</a>
            </div>
            <div className='flex items-center mr-4'>
              <FontAwesomeIcon icon={faCalendarAlt} size='2x' color="#ffffff"  className='mr-1' />
              <a target='_blank' className='link link-hover' href="https://calendly.com/aleejandroreyna">/aleejandroreyna</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}