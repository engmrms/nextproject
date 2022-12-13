import { Tab } from "@headlessui/react";
import useSWR from "swr";
import DTO from "../../../model/DTO";
import { getJobs } from "../../../utils/db/job";
function Jobs() {
  const { data: jobs, error, isLoading } = useSWR("api/jobs", getJobs);

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
            {jobs?.data?.jobsData?.map((job: DTO.IJob) => (
              <Tab
                as="button"
                key={`jobTab${job?.id}`}
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
            {jobs?.data?.jobsData?.map((job: DTO.IJob) => (
              <Tab.Panel key={`job${job?.id}`} className="px-2 py-4">
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
