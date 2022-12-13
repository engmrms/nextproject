import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkMode from "../DrakMode";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Experience", href: "#job", current: false },
  { name: "Work", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent ">
          {({ open }) => (
            <>
              <div className="mx-auto  px-5 sm:px-10 lg:px-20">
                <div className="flex h-40 items-center justify-between">
                  <div className="flex items-center w-full">
                    <div className="flex-shrink-0">
                      <svg width="150" height="99.76293661772281" viewBox="0 0 320 99.76293661772281">
                        <defs id="SvgjsDefs4552"></defs>
                        <g transform="matrix(1.0759131454928899,0,0,1.0759131454928899,-4.010656544902989,-3.9737564761480417)" fill="#0ea5e9">
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M93.67,50c-0.4,9-8.84,14.39-15.12,19.54-6.08,5-10.27,11.3-15.62,17-7.09,7.51-15.66,9.2-23.62,1.85-5.69-5.25-9.59-12.08-15.48-17.16S9.3,61.23,7.17,53.25C4.73,44.13,13,37.56,19.28,32.53S30.14,22,35.27,16C41.18,9,49.1,3.23,58,9.13,65.36,14,69.51,22.59,76.1,28.4,82.85,34.34,93.22,39.95,93.67,50c0.09,1.92,3.09,1.93,3,0-0.43-9.53-8.15-15.31-15-20.84C74.09,23,69.22,14.46,61.78,8.27,55.37,2.93,47.38,2,40.4,6.88,32.57,12.37,28,21.39,20.73,27.51,14.33,32.87,5.7,38.28,4,47.13c-1.74,9.11,5.18,15.93,11.6,21.2,3.6,3,7.34,5.74,10.47,9.22s6,7.57,9.28,11.07C41,94.63,48.71,98.71,56.86,95c9.45-4.35,14.2-15.05,21.84-21.65C86.18,66.85,96.18,61,96.67,50,96.76,48.07,93.76,48.07,93.67,50Z"></path>
                        </g>
                        <g
                          transform="matrix(1.6290358944199008,0,0,1.6290358944199008,117.45870176756459,7.972864916742335)"
                          className="fill-slate-700 dark:fill-slate-200">
                          <path d="M7.68 12 l3.2 19.88 l0.08 0 l2.96 -19.88 l6.12 0 l0 28 l-4.16 0 l0 -20.08 l-0.08 0 l-2.96 20.08 l-4.16 0 l-3.2 -19.8 l-0.08 0 l0 19.8 l-3.84 0 l0 -28 l6.12 0 z M28.362000000000002 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M23.962 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z M54.92400000000001 40 l-4.48 0 c-0.24 -0.72 -0.4 -1.16 -0.4 -3.44 l0 -4.4 c0 -2.6 -0.88 -3.56 -2.88 -3.56 l-1.52 0 l0 11.4 l-4.4 0 l0 -28 l6.64 0 c4.56 0 6.52 2.12 6.52 6.44 l0 2.2 c0 2.88 -0.92 4.72 -2.88 5.64 l0 0.08 c2.2 0.92 2.92 3 2.92 5.92 l0 4.32 c0 1.36 0.04 2.36 0.48 3.4 z M47.764 16 l-2.12 0 l0 8.6 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -2.76 c0 -2 -0.68 -2.88 -2.24 -2.88 z M68.16600000000001 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M64.686 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M82.408 12 c4.56 0 6.52 2.12 6.52 6.44 l0 1 c0 2.88 -0.88 4.68 -2.84 5.6 l0 0.08 c2.36 0.92 3.28 3 3.28 5.96 l0 2.28 c0 4.32 -2.28 6.64 -6.68 6.64 l-6.92 0 l0 -28 l6.64 0 z M82.128 27.4 l-1.96 0 l0 8.6 l2.52 0 c1.48 0 2.28 -0.68 2.28 -2.76 l0 -2.44 c0 -2.6 -0.84 -3.4 -2.84 -3.4 z M82.28800000000001 16 l-2.12 0 l0 7.4 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -1.56 c0 -2 -0.68 -2.88 -2.24 -2.88 z M102.85000000000001 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M99.37 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M114.852 28 l0 12 l-4.4 0 l0 -28 l4.4 0 l0 12 l5 0 l0 -12 l4.48 0 l0 28 l-4.48 0 l0 -12 l-5 0 z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="hidden md:flex ml-auto items-center">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, indx) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? "text-sky-400" : "",
                              "hover:text-sky-500 text-[14px] cursor-pointer p-4 dark:hover:text-sky-400"
                            )}
                            data-aos="fade-down"
                            data-aos-delay={`${indx}00`}
                            data-aos-duration="1000"
                            aria-current={item.current ? "page" : undefined}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div>
                        <a
                          href="/resume.pdf"
                          className="px-5 py-2 hover:bg-sky-400/20 text-sky-500 rounded-lg text-[13px] cursor-pointer border ml-6 border-sky-500"
                          target="_blank"
                          data-aos="fade-down"
                          data-aos-delay={`700`}
                          data-aos-duration="1000"
                          rel="noopener noreferrer">
                          Resume
                        </a>
                      </div>
                      <div className="border-l flex ml-4 pl-2">
                        <DarkMode />
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md  p-2 border border-sky-400  hover:bg-sky-400/20  focus:outline-none ">
                      <span className="sr-only">Open main menu</span>
                      {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                    <div className="border-l flex ml-4 pl-2">
                      <DarkMode />
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(item.current ? "text-sky-400" : "", "block px-3 py-2  text-[14px]")}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <div className="pt-3">
                    <a
                      href="/resume.pdf"
                      className="px-5 py-2 hover:bg-sky-400/20 rounded-lg text-[13px] cursor-pointer mx-3 mt-2 border w-full border-sky-400"
                      target="_blank"
                      rel="noopener noreferrer">
                      Resume
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
