import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

function classNames(...classes) {
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
                      <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
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
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md  p-2 border border-sky-400  hover:bg-sky-400/20  focus:outline-none ">
                      <span className="sr-only">Open main menu</span>
                      {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
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
