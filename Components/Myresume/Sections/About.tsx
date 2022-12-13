import Image from "next/image";

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
          <div className=" relative w-full block rounded-lg transition-all shadow-lg bg-sky-500   after:block after:absolute after:w-full after:h-full after:z-[-1] after:top-8 after:left-8 after:rounded-lg after:transition-all  after:border-2 after:border-sky-500 hover:after:top-6 hover:after:left-6">
            <div className="">
              <div>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                />
              </div>
              <div aria-hidden="true" data-placeholder-image=""></div>
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  src="/assets/img/me-bg.png"
                  alt=""
                  width={300}
                  height={300}
                  className="object-cover mix-blend-multiply filter hover:filter-none hover:mix-blend-normal  rounded-lg opacity-100  h-full w-full right-0 bottom-0 max-w-none m-0 p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
