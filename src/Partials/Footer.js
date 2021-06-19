import React from 'react';
import {Fade} from "react-awesome-reveal";

import Twitter from "../Svg/Twitter";
import Instagram from "../Svg/Instagram";

function Footer({ id = null }) {

    return (
            <footer className="bg-maldive bg-opacity-10 mt-8 md:mt-0 transform md:-translate-y-7 md:-mb-7 z-40 relative" id={id}>
                <Fade>
                    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-4 md:order-2">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                href="https://twitter.com/ResellUniv"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                                <Twitter
                                    className="h-10 w-10"
                                />
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                href="https://www.instagram.com/reselluniversity/"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                                <Instagram
                                    className="h-10 w-10"
                                />
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center text-base font-semibold text-maldive">
                                Associated with Resell University.
                            </p>
                        </div>
                    </div>
                </Fade>

            </footer>
    )
}

export default Footer;
