function Projects() {
  const otherProjects = [
    {
      title: "Jameah",
      desc: "Work has been done to develop the user interface for a university system, which aims to provide complete, automatic and timely electronic services to support Saudi higher education institutions - whether governmental or private - and their affiliates including students, employees, faculty members, and other sectors.",
      link: "https://jameah.moe.gov.sa/",
      tech: ["Bootstrap", "JQuery", "Knockout", "PEGA"],
    },
    {
      title: "Safeer Graduates",
      desc: "Work has been done to develop the user interface of the university system, which aims to create channels of communication between graduate students studying abroad and various community institutions, which provides job opportunities for graduates.",
      link: "https://safeergraduates.moe.gov.sa/",
      tech: ["Bootstrap", "JQuery", "Knockout"],
    },

    {
      title: "Study Communication",
      desc: "Building a complete workflow system to handle all transactions between saudi cultural attache and special needs centers.",
      link: "http://student.sacm.org.jo/",
      tech: ["Bootstrap", "JQuery", "MySql", "PHP"],
    },
    {
      title: "Endorsements",
      desc: "Building a complete system to handle all transactions between saudi cultural attache and Jordan Univeristies in order to authenticate university certificates for reviewers also create letteres addressed to the emabassy.",
      link: "http://ratif.sacm.org.jo/",
      tech: ["Bootstrap", "JQuery", "MySql", "PHP"],
    },
  ];

  const projects = [
    {
      title: "Cultural Scolarship Program",
      desc: "Providing technology within a platform directed to our customers by developing smart solutions and distinguished services that contribute to facilitating the procedures for studying abroad based on best international practices and standards in accordance with the scholarship regulations and legislation of the Saudi Ministry of Cultural .",
      link: "https://scholarship.moc.gov.sa",
      img: "/assets/img/csp.jpeg",
      isFeatured: true,
      tech: ["REACT", "TAILWINDCSS", "TYPESCRIPT", "VITEJS", "RTQUERY"],
    },
    {
      title: "Safeer2",
      desc: "Providing technology within a platform directed to our customers by developing smart solutions and distinguished services that contribute to facilitating the procedures for studying abroad based on best international practices and standards in accordance with the scholarship regulations and legislation of the Saudi Ministry of Education .",
      link: "https://safeer2.moe.gov.sa/",
      img: "/assets/img/safeer2.png",
      isFeatured: false,
      tech: ["HTML", "CSS", "JS", "BOOTSTRAP", "KNOCKOUT", "PEGA"],
    },
  ];

  return (
    <>
      <section id="projects" className="py-40 max-w-screen-lg mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="whitespace-nowrap mt-4 text-3.2 font-semibold mb-16 relative flex  items-center after:block after:w-[30rem] after:h-[1px] after:relative after:ml-8 after:bg-sky-500 dark:after:bg-sky-400">
          Some Things I’ve Built
        </h2>

        <ul className="space-y-40 ">
          {projects.map((project, index) => (
            <li
              data-aos="fade-up"
              key={`proj${index}`}
              data-aos-delay="300"
              data-aos-duration="1000"
              className="grid gap-4  grid-cols-1 md:grid-cols-12 items-center">
              <div
                className={`col-end-[-1] row-start-1 row-end-[-1] col-start-1 ${
                  index % 2 === 0 ? "md:col-end-7 " : "text-right  md:col-start-7 "
                } relative  px-8 z-10`}>
                {project.isFeatured && <p className="my-4 md:text-sky-500 text-white mt-8 text-1.2 ">Featured Project</p>}

                <h3 className="mb-8 text-2.6 font-semibold ">
                  <a href={project.link} className="relative z-[1] md:text-slate-700  text-white" rel="noopener noreferrer" target="_blank">
                    {project.title}
                  </a>
                </h3>
                <div className="shadow-sm transition-all relative z-10 md:px-10 py-10 rounded-md md:bg-[#1e293b] text-slate-300">
                  <p>{project.desc}</p>
                </div>
                <ul className={`${index % 2 === 0 ? "justify-start" : "justify-end"} flex flex-wrap relative z-10 mt-10 mb-4  p-0  `}>
                  {project.tech.map((tech, index) => (
                    <li key={`tech${index}`} className="mb-2 mr-8 text-slate-500 dark:text-slate-200 text-1.2 whitespace-nowrap">
                      {tech.toUpperCase()}
                    </li>
                  ))}
                </ul>

                <div
                  className={`${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } mr-0 -ml-4 flex items-center relative text-slate-700  dark:text-slate-200`}>
                  <a
                    href={project.link}
                    aria-label="External Link"
                    className="p-4 flex justify-center items-center"
                    rel="noopener noreferrer"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-9 h-9 hover:text-sky-500 focus:text-sky-500  transition-colors">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              <div
                className={`col-start-1 col-end-[-1] row-start-1 row-end-[-1] ${
                  index % 2 === 0 ? "md:col-start-6" : " md:col-end-8"
                }  relative md:z-[1] z-0 shadow-sm h-full md:h-auto `}>
                <a
                  href={project.link}
                  className="w-full inline-flex h-full bg-sky-500 overflow-hidden z-[1] hover:bg-transparent rounded-lg before:rounded-lg before:absolute before:w-full before:h-full before:inset-0 before:z-[3] before:transition-all before:mix-blend-screen before:bg-sky-900 hover:before:bg-transparent"
                  rel="noopener noreferrer"
                  target="_blank">
                  <div className="w-full max-w-full mix-blend-multiply rounded-lg hover:bg-transparent">
                    <div className="max-w-6xl block">
                      <img
                        alt=""
                        role="presentation"
                        aria-hidden="true"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      />
                    </div>
                    <img
                      aria-hidden="true"
                      data-placeholder-image=""
                      decoding="async"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII="
                      alt=""
                    />

                    <img
                      width="700"
                      height="438"
                      decoding="async"
                      src={project.img}
                      alt={project.title}
                      className="object-cover rounded-lg opacity-100 absolute top-0 left-0 h-full w-full right-0 bottom-0 max-w-none m-0 p-0"
                    />
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-center py-40 max-w-screen-lg mx-auto">
        <h2 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" className="mb-4 leading-[1.1] font-semibold text-3.2 ">
          Other Noteworthy Projects
        </h2>

        <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative p-0">
          {otherProjects.map((project, indx) => (
            <li key={`proj${indx}`} data-aos="fade-up" data-aos-delay={`${indx}00`} data-aos-duration="1000">
              <div className="flex hover:-translate-y-3 flex-col justify-between items-start relative h-full px-11 py-12 rounded-md transition-all overflow-auto bg-[#1e293b] shadow-sm">
                <header>
                  <div className="flex justify-between mb-14 items-center">
                    <div className="text-sky-500">
                      <svg
                        width="40"
                        height="40"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="">
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex justify-center items-center -mr-4 text-slate-500 dark:text-slate-200">
                      <a
                        href={project.link}
                        aria-label="External Link"
                        className="py-2 px-3 flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                          width="22"
                          height="22"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="-mt-2">
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="mb-4 dark:text-slate-500 text-slate-100 text-2.2">
                    <a
                      href={project.link}
                      target="_blank"
                      className="static z-[1] hover:text-sky-500 before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0">
                      {project.title}
                    </a>
                  </h3>
                  <div className="dark:text-slate-400 text-slate-300 font-normal">
                    <p className="m-0">{project.desc}</p>
                  </div>
                </header>
                <footer>
                  <ul className="flex items-end flex-grow flex-wrap p-0 mt-8 space-x-6 text-1.2 leading-7 text-slate-400">
                    {project.tech.map((tec, i) => (
                      <li key={`tec${i}`}>{tec}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Projects;
