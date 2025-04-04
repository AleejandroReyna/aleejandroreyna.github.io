import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export const Content = () => {
  return (
    <section className="bg-neutral text-neutral-content flex-auto py-32 px-4">
      <div className="mx-auto max-w-md md:max-w-7xl lg:max-w-7xl h-full">
        <div className="flex flex-row items-center h-full">
          <div className="basis-1/3  pr-6">
            <h2 className="text-5xl font-bold pb-4">Let's talk!</h2>
            <p className="text-2xl mb-8">Do you have an interesting project, I want to work with you.</p>

            <div className='flex items-center mr-4 mb-4'>
              <LinkedinPlain color="#ffffff" size={32} className='mr-1' />
              <a target='_blank' className='link link-hover' href="https://linkedin.com/in/aleejandroreyna">/in/aleejandroreyna</a>
            </div>
            <div className=' flex items-center mr-4 mb-4'>
              <SiGithub color="#ffffff" size={32}  className='mr-1' />
              <a target='_blank' className='link link-hover' href="https://github.com/aleejandroreyna">@aleejandroreyna</a>
            </div>
            <div className='flex items-center mr-4 mb-4'>
              <FontAwesomeIcon icon={faCalendarAlt} size='2x' color="#ffffff"  className='mr-1' />
              <a target='_blank' className='link link-hover' href="https://calendly.com/aleejandroreyna">/aleejandroreyna</a>
            </div>
          </div>
          <div className="basis-2/3">
          <form action="#" className="inline mr-auto">
            <div className="grid grid-cols-3 gap-4">
              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend text-white">Your name</legend>
                <input type="text" className="input input-lg bg-neutral border-white" placeholder="I want to know more about you" />
              </fieldset>

              <fieldset className="fieldset mb-2 ">
                <legend className="fieldset-legend text-white">Your email</legend>
                <input type="text" className="input input-lg bg-neutral border-white" placeholder="ex: your@email.com" />
              </fieldset>

              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend text-white">Your phone</legend>
                <input type="text" className="input input-lg bg-neutral border-white" placeholder="ex: +502 43434343" />
              </fieldset>
            </div>

            <fieldset className="fieldset mb-2 ">
              <legend className="fieldset-legend text-white">Tell me about your project</legend>
              <textarea rows={6} className="textarea input textarea-lg bg-neutral border-white w-full h-30" placeholder="Every idea is been received">
              </textarea>
            </fieldset>

            <div className="text-right">
              <button className="btn btn-neutral border-white ml-auto">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}