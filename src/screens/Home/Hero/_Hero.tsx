export const Hero = () => {

  const yearsOfExperience = () : number => {
    return new Date().getFullYear() - 2013;
  }
  return (
    <section className="hero bg-neutral text-neutral-content min-h-screen">
      <div className="hero-content">
        <div className="">
          <h1 className="text-6xl">Hi, I'm Your best partner <br /> if you want to build something AWESOME.</h1>
          <p className="text-3xl">
            With {yearsOfExperience()}+ years of experience creating software solutions, I can make your dreams true.</p>
        </div>
      </div>
    </section>
  )
}