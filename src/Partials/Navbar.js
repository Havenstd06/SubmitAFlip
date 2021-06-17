import {Fragment} from "react";
import {Disclosure, Transition} from "@headlessui/react";
import Logo from "../Svg/Logo";
import {MenuIcon} from "@heroicons/react/outline";

export default function Navbar() {
    return (
        <Disclosure as="div">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pb-12 lg:pb-16">
                        <nav
                            className="relative flex items-center justify-between sm:h-10 md:justify-center"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <Logo className="h-16 w-auto" />

                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Disclosure.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 space-x-8">
                                <a
                                    href="#"
                                    className="small-border inline-block text-base font-bold text-black hover:text-gray-800"
                                >
                                    Home
                                </a>

                                <a
                                    href="#"
                                    className="inline-block bg-maldive hover:bg-maldive-dark py-1 px-5 border border-transparent rounded-xl text-base font-medium text-white transition duration-200 ease-in-out"
                                >
                                    Submit
                                </a>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel
                            static
                            className="md:hidden"
                        >
                            <div className="overflow-hidden">
                                <div className="px-2 pt-2 pb-3 flex flex-col justify-center items-center space-y-4">
                                    <a
                                        href="#"
                                        className="inline-block text-base font-medium text-black hover:text-gray-800"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="#"
                                        className="inline-block rounded-xl text-base font-medium text-maldive transition duration-200 ease-in-out"
                                    >
                                        Submit A Flip
                                    </a>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}
