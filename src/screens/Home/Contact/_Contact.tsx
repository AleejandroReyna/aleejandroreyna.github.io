export const Contact = () => {

  return (
    <section className="py-24 bg-neutral text-neutral-content">

      <div className="mx-auto max-w-md md:max-w-7xl lg:max-w-7xl">
        <div className="flex flex-row items-center">
          <div className="basis-1/2  pr-6">
            <h2 className="text-5xl font-bold pb-4">Let's talk!</h2>
            <p className="text-2xl">Do you have an interesting project, I want to work with you.</p>
          </div>
          <div className="basis-1/2">
            <form action="#" className="inline mr-auto">
            <div className="grid grid-cols-2 gap-4">
              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend text-white">Your name</legend>
                <input type="text" className="input input-lg bg-neutral border-white" placeholder="I want to know more about you" />
              </fieldset>

              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend text-white">Your email</legend>
                <input type="text" className="input input-lg bg-neutral border-white" placeholder="ex: your@email.com" />
              </fieldset>
            </div>

            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-white">Your phone</legend>
              <input type="text" className="input input-lg w-full bg-neutral border-white" placeholder="ex: +502 43434343" />
            </fieldset>

            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-white">Tell me about your project</legend>
              <textarea rows={6} className="textarea input textarea-lg bg-neutral border-white w-full h-30" placeholder="Every idea is been received">
              </textarea>
            </fieldset>

            <div className="text-right">            
              <button className="btn btn-neutral border-white">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}