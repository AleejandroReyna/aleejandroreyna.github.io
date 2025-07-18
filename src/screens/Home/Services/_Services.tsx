export const Services = () => (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-md bg-white md:max-w-7xl lg:max-w-7xl">
      <h2 className="text-center text-5xl font-bold py-4">My Services</h2>
      <p className="text-2xl text-center">
        I offer a range of services to help you achieve your goals. Whether you need a new website, an app, or just some advice, {"I'm"} here to help.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-16">
          <article className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Development</h2>
            <p>If you need a website for your company to talk about your services. {"Let's"} talk.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">More about</button>
            </div>
          </div>
          </article>
          <article className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Backend Development</h2>
            <p>Do you need a complex backend software, I can do that. Talk more about it.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">More about</button>
            </div>
          </div>
          </article> <article className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <p>Are you looking for a pretty UI software, I have experience with that.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">More about</button>
            </div>
          </div>
          </article>
          <article className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CRP/CRM Implementation</h2>
            <p>Do you have to take some ERP/CRM system, I know a lot of options, {"let's"} do it.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">More about</button>
            </div>
          </div>
          </article>
          <article className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">App Development</h2>
            <p>Are you looking for a good App developer? {"I'm"} here!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">More about</button>
            </div>
          </div>
          </article> <article className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Code Audit</h2>
            <p>I know, sometimes You need to check if the product {"you've"} received is well done.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">More about</button>
            </div>
          </div>
          </article>
      </div>
    </div>
  </section>
)