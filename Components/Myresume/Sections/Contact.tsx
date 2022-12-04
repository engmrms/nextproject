function Contact() {
  return (
    <section data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" id="contact" className="max-w-4xl mx-auto mb-40 text-center">
      <h2 className="text-sky-500 mb-8 text-1.4 text-center mt-4">What’s Next?</h2>
      <h2 className="mb-4 text-5.2 font-bold text-center">Get In Touch</h2>
      <p className="text-slate-500 dark:text-slate-200 text-2.0 text-center">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi,
        I’ll try my best to get back to you!
      </p>
      <a
        className="px-11 py-8 mt-20 text-sky-500 hover:bg-sky-400/20 inline-block  rounded-lg text-[13px] cursor-pointer border  border-sky-500"
        href="mailto:eng_mrms@hotmail.com"
        rel="noopener noreferrer"
        target="_blank">
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
