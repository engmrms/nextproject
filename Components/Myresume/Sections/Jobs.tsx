import { Tab } from "@headlessui/react";

function Jobs() {
  const jobs = [
    {
      institute: { name: "Tatweer Educational Technology", abbreviation: "Tetco" },
      jobTitle: "SENIOR FRONTEND",
      city: "Riyadh",
      country: "Saudi Arabia",
      link: "https://www.tetco.sa/",
      from: { month: "June", year: "2017" },
      to: null,
      duties: [
        "UI development by PEGA platform",
        "Write clean, testable code using React, knockout, jQuery programminglibrary",
        "Writing cross-browser compliant HTML, JS and CSS",
        "Review and refactor code",
        "Deploy fully functional applications",
        "Performing SCRUM to manage agile methodology",
      ],
    },
    {
      institute: { name: "Ministry of Education", abbreviation: "MOE" },
      jobTitle: "FRONTEND",
      city: "Riyadh",
      country: "Saudi Arabia",
      link: "https://moe.gov.sa/",
      from: { month: "May", year: "2016" },
      to: { month: "May", year: "2017" },
      duties: [
        "Developing and maintaining front end functionality of websites",
        "Write clean, testable code usingknockout, jQuery programming library",
        "Writing cross-browser compliant HTML, JS and CSS",
        "Applying web themes to MVC, ASP web forms AND ADF application",
      ],
    },
    {
      institute: { name: "Saudi Cultural Attaché", abbreviation: "SCA" },
      jobTitle: "FULL STACK",
      city: "Amman",
      country: "Jodan",
      link: "https://jo.moe.gov.sa/ar/Pages/default.aspx",
      from: { month: "August", year: "2008" },
      to: { month: "April", year: "2016" },
      duties: [
        "Gathering requirements",
        "Creating database structure, design and Development",
        "Hiring programming concepts and skills for developing software",
        "Working on handling the new requirements and fixing bugs",
        "Working on generating and gathering feeds for the project",
        "Training employeeto use ERP (Enterprise Resources Planning) system (Financial and HR system) and follow up with developers for any updates,upgrade or solve any bug in the system",
      ],
    },
  ];
  return (
    <section id="job" className="py-40 max-w-screen-lg mx-auto">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="whitespace-nowrap mt-4 text-3.2 font-semibold mb-16 relative flex  items-center after:block after:w-[30rem] after:h-[1px] after:relative after:ml-8 after:bg-sky-500 dark:after:bg-sky-400">
        Where I’ve Worked
      </h2>

      <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="w-full flex px-2 py-16 sm:px-0 space-x-8 md:flex-row flex-col">
        <Tab.Group vertical>
          <Tab.List className="flex md:flex-col  mb-12">
            {jobs.map(job => (
              <Tab
                as="button"
                className={({ selected }) =>
                  `flex items-center h-16 w-full px-8 pb-1  md:border-l-2 border-b-2 md:border-b-0  whitespace-nowrap text-1.4 outline-none ${
                    selected
                      ? "text-sky-500 md:border-l-sky-500 border-b-sky-500"
                      : "text-slate-500 dark:text-slate-200 md:border-l-sky-200 border-b-200"
                  } `
                }>
                {job.institute.abbreviation.toUpperCase()}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {jobs.map((job, index) => (
              <Tab.Panel key={`job${index}`} className="px-2 py-4">
                <h3 className="">
                  <span>{job.jobTitle.toUpperCase()}</span>
                  <span className="text-sky-500">
                    &nbsp;@&nbsp;
                    <a href={job.link} className="inline-block" rel="noopener noreferrer" target="_blank">
                      {job.institute.name}
                    </a>
                  </span>
                  <span>
                    {" "}
                    ,{job.city}, {job.country}
                  </span>
                </h3>
                <p className="mb-10 text-slate-400 text-1.4 dark:text-slate-200">
                  {job.from.month} {job.from.year} - {!job.to ? "Present" : `${job?.to?.month} ${job?.to?.year}`}
                </p>
                <div>
                  <ul className="text-slate-500 dark:text-slate-200">
                    {job.duties.map((duty, index) => (
                      <li
                        key={`duty${index}`}
                        className="text-1.4 pl-12  mb-4 relative before:absolute before:left-0 before:text-sky-500 before:content-['▹'] before:text-1.2">
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

export default Jobs;
