import { 
  SiReact,
  SiTypescript,
  SiWordpress,
  SiMobx,
  SiJavascript,
  SiVuedotjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiMessenger,
  SiTwilio,
  SiBitrise,
  SiAwsfargate
} from "@icons-pack/react-simple-icons";
export const Portfolio = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-md bg-white md:max-w-7xl lg:max-w-7xl">
        <h2 className="text-center text-5xl font-bold py-4">Porfolio</h2>
        <p className="text-2xl text-center">
          Here are some of the projects I have worked on. I am always looking for new challenges and opportunities to learn and grow.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-16">

          <article className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Zigi App</h2>
              <p>Fintech app to democratize the banking.</p>
              <strong>Stack: </strong>
              <div className="flex">
                <SiReact className="mr-2" color="default" />
                <SiTypescript className="mr-2" color="default" />
                <SiMobx className="mr-2" color="default" />
                <SiBitrise className="mr-2" color="default" />
                <SiWordpress color="default" />
              </div>
              <div className="card-actions">
                <button className="btn btn-neutral">More about</button>
              </div>
            </div>
          </article>

          <article className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">XP3 Talent</h2>
              <p>Human resources web app</p>
              <strong>Stack: </strong>
              <div className="flex">
                <SiPhp className="mr-2" color="default" />
                <SiLaravel className="mr-2" color="default" />
                <SiJavascript className="mr-2" color="default" />
                <SiVuedotjs className="mr-2" color="default" />
                <SiAwsfargate color="default" />
              </div>
              <div className="card-actions">
                <button className="btn btn-neutral">More about</button>
              </div>
            </div>
          </article>

          <article className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Afinidata</h2>
              <p>Chatbot for first childhood development</p>
              <strong>Stack: </strong>
              <div className="flex">
                <SiPython className="mr-2" color="default" />
                <SiDjango className="mr-2" color="default" />
                <SiNodedotjs className="mr-2" color="default" />
                <SiExpress className="mr-2" color="default" />
                <SiJavascript className="mr-2" color="default" />
                <SiReact className="mr-2" color="default" />
                <SiVuedotjs className="mr-2" color="default" />
                <SiMessenger className="mr-2" color="default" />
                <SiTwilio className="mr-2" color="default" />
              </div>
              <div className="card-actions">
                <button className="btn btn-neutral">More about</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
