function Hero() {
  return (
    <section className="py-40 min-h-screen  max-w-screen-lg mx-auto">
      <div className="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <h1 className="text-[13px] font-normal mb-12 ml-2 text-sky-500 dark:text-sky-400">Hi, my name is</h1>
      </div>
      <div className="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <h2 className="inline-block text-5.2 leading-[1.1] sm:text-[80px] font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Mohammad Saleh.
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="inline-block text-4.6 leading-[72px] mt-4 sm:text-[80px] font-extrabold text-slate-500 tracking-tight dark:text-slate-200">
        <h3 className="">I build things for the web.</h3>
      </div>
      <div className="" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
        <p className="mt-8 max-w-3xl text-slate-500 tracking-tight dark:text-slate-200">
          I’m a computer engineer specializing in building (and occasionally designing) web applications. Currently, I’m focused on Front End
          development of web products at{" "}
          <a
            className="text-sky-500 inline-block relative after:relative after:h-[1px] after:block after:bg-sky-500 after:bottom-2 after:w-0 after:opacity-80 after:transition-all hover:after:w-full"
            href="https://tetco.com/"
            target="_blank"
            rel="noreferrer">
            Tetco
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Hero;
