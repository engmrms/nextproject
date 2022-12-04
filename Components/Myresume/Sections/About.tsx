function About() {
  return (
    <section id="about" className="py-40 max-w-screen-lg mx-auto" data-sr-id="0">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="whitespace-nowrap mt-4 text-3.2 font-semibold mb-16 relative flex  items-center after:block after:w-[30rem] after:h-[1px] after:relative after:ml-8 after:bg-sky-500 dark:after:bg-sky-400">
        About Me
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="grid gap-20 grid-cols-1 md:grid-cols-3 order-last md:order-first">
        <div className="col-span-2">
          <div>
            <p className="text-slate-500 dark:text-slate-200 mb-6">
              Since I began my journey as a developer nearly 14 years ago, I have collaborated with talented people to create web applications to
              automate goverment procedures.
            </p>

            <p className="text-slate-500 dark:text-slate-200 mb-6">
              Fast-forward to today, and I’ve had the privilege of working at goverment sector. My main focus these days is building responsive
              websites that are fast, easy to use and designed with best practices at{" "}
              <a
                className="text-sky-500 inline-block relative after:relative after:h-[1px] after:block after:bg-sky-500 after:bottom-2 after:w-0 after:opacity-80 after:transition-all hover:after:w-full"
                href="https://tetco.com/"
                target="_blank"
                rel="noreferrer">
                Tetco
              </a>{" "}
              for a variety of clients.
            </p>
            <p className="text-slate-500 dark:text-slate-200 mb-6">Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="text-slate-500 dark:text-slate-200 grid grid-cols-[repeat(2,_minmax(140px,_200px))] gap-x-4 mt-8 list-none ">
            <li className="text-1.2 pl-8 leading-5 mb-4 relative before:absolute before:left-0 before:text-sky-500 before:leading-5 before:content-['▹'] before:text-1.2">
              JavaScript (ES6+)
            </li>
            <li className="text-1.2 pl-8 leading-5 mb-4 relative before:absolute before:left-0 before:text-sky-500 before:leading-5 before:content-['▹'] before:text-1.2">
              TypeScript
            </li>
            <li className="text-1.2 pl-8 leading-5 mb-4 relative before:absolute before:left-0 before:text-sky-500 before:leading-5 before:content-['▹'] before:text-1.2">
              React
            </li>
            <li className="text-1.2 pl-8 leading-5 mb-4 relative before:absolute before:left-0 before:text-sky-500 before:leading-5 before:content-['▹'] before:text-1.2">
              Node.js
            </li>
            <li className="text-1.2 pl-8 leading-5 mb-4 relative before:absolute before:left-0 before:text-sky-500 before:leading-5 before:content-['▹'] before:text-1.2">
              Knockout
            </li>
            <li className="text-1.2 pl-8 leading-5 mb-4 relative before:absolute before:left-0 before:text-sky-500 before:leading-5 before:content-['▹'] before:text-1.2">
              PHP
            </li>
          </ul>
        </div>
        <div className="col-span-1 max-w-[300px] order-first md:order-last">
          <div className=" relative w-full block rounded-lg transition-all bg-sky-500 shadow-lg  after:block">
            <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
              <div>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                />
              </div>
              <div aria-hidden="true" data-placeholder-image=""></div>

              <picture>
                <source
                  type="image/avif"
                  srcSet="/static/30a645f7db6038f83287d0c6042d3b2b/aebc8/me.avif 125w,
/static/30a645f7db6038f83287d0c6042d3b2b/6b255/me.avif 250w,
/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif 500w"
                  sizes="(min-width: 500px) 500px, 100vw"
                />
                <source
                  type="image/webp"
                  srcSet="/static/30a645f7db6038f83287d0c6042d3b2b/4155f/me.webp 125w,
/static/30a645f7db6038f83287d0c6042d3b2b/02deb/me.webp 250w,
/static/30a645f7db6038f83287d0c6042d3b2b/1ee78/me.webp 500w"
                  sizes="(min-width: 500px) 500px, 100vw"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
