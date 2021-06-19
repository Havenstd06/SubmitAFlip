import React from 'react';
import { Fade } from "react-awesome-reveal";

import CashApp from '../Assets/Images/Cashapp.png'
import Venmo from '../Assets/Images/Venmo.png'
import Paypal from '../Assets/Images/Paypal.png'
import ChooseBackground from "../Components/Background/ChooseBackground";
import GetStarted from "../Assets/Images/GetStarted.png";

function Choose({ id = null }) {

    return (
        <section className="relative bg-gray-50 md:min-h-screen overflow-hidden" id={id}>
            <ChooseBackground />

            <div className="relative z-50">

                <div className="max-w-xl mx-auto px-4 sm:px-6 pb-12">

                    <h1 className="text-gray-900 text-4xl font-bold text-center uppercase pt-4" data-aos="zoom-y-out" data-aos-delay="250">
                        Why <span className="text-maldive">choose</span> us?
                    </h1>

                    <h3 className="mt-3 text-gray-600 text-center" data-aos="zoom-y-out" data-aos-delay="350">
                        All your information is safe with us until a price is agreed beforehand. We don’t share or use ANY of your submissions without paying you first.
                    </h3>

                </div>

                <div className="mt-0 md:mt-16 lg:mt-24">

                    <Fade cascade>

                        <div className="bg-maldive bg-opacity-10">
                            <div className="max-w-5xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                                <h2 className="text-gray-900 text-3xl font-bold text-center uppercase mb-3">
                                    Flexible payout options
                                </h2>
                                <div className="w-full md:flex justify-center">
                                    <div className="w-full flex flex-wrap justify-between space-x-12 lg:-ml-4">
                                        <div className="mt-4 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                            <img
                                                className="h-4 md:h-9"
                                                src={CashApp}
                                                alt="Cashapp's logo"
                                            />
                                        </div>
                                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                            <img className="h-4 md:h-9"
                                                 src={Venmo}
                                                 alt="Venmo's logo" />
                                        </div>
                                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                            <img className="h-4 md:h-9"
                                                 src={Paypal}
                                                 alt="Paypal's logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:max-w-4xl mx-auto mt-12 mx-2 z-30 relative">
                            <div className="md:flex items-center justify-between">
                                <div className="md:w-2/4">
                                    <h3 className="text-gray-900 text-7xl md:text-4xl text-center md:text-left font-bold pb-6">
                                        Lets get
                                        {' '}
                                        <span className="block md:hidden">{' '}</span>
                                        <span className="text-maldive">
                                            started!
                                        </span>
                                    </h3>

                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdOt3eZEWV6DMI5EB3OwvpGlRQQ9yXdvErLum2HzcoNzunhRg/viewform?usp=sf_link"
                                        target="_blank"
                                        className="w-44 mx-auto md:mx-0 flex justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-maldive hover:bg-maldive-dark md:py-3 md:text-lg" rel="noreferrer"
                                    >
                                        Submit A Flip
                                    </a>
                                </div>

                                <div className="md:w-2/4 hidden md:block">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img src={GetStarted} alt="Image"/>
                                </div>
                            </div>
                        </div>

                    </Fade>

                </div>

            </div>

        </section>
    )
}

export default Choose;
