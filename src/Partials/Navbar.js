import {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";
import Logo from "../Svg/Logo";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

export default function Navbar() {
    return (
        <Popover>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav
                            className="relative flex items-center justify-between sm:h-10 md:justify-center"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <Logo className="h-16 w-auto" />

                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                <a
                                    href="#"
                                    className="inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium text-black hover:text-gray-800"
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
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <Logo className="h-16 w-auto" />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 flex flex-col justify-center items-center">
                                    <a
                                        href="#"
                                        className="inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium text-black hover:text-gray-800"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="#"
                                        className="inline-block py-1 px-5 border border-transparent rounded-xl text-base font-medium text-maldive transition duration-200 ease-in-out"
                                    >
                                        Submit A Flip
                                    </a>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
