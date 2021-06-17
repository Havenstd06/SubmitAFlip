import React from 'react';
import { Fade } from "react-awesome-reveal";

import CashApp from '../Assets/Images/Cashapp.png'
import Venmo from '../Assets/Images/Venmo.png'
import Paypal from '../Assets/Images/Paypal.png'
import ChooseBackground from "../Components/Background/ChooseBackground";

function Choose({ id = null }) {

    return (
        <section className="relative bg-gray-50 md:min-h-screen overflow-hidden" id={id}>
            <ChooseBackground />

            <div className="relative z-50">

                <div className="max-w-xl mx-auto px-4 sm:px-6 pb-12">

                    <h1 className="text-gray-900 text-4xl font-bold text-center uppercase pt-4" data-aos="zoom-y-out" data-aos-delay="250">
                        Why <span className="text-maldive">choose</span> us?
                    </h1>

                    <h3 className="mt-3 text-gray-600 text-center">
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
                                                className="h-5 md:h-10"
                                                src={CashApp}
                                                alt="Cashapp's logo"
                                            />
                                        </div>
                                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                            <img className="h-5 md:h-10"
                                                 src={Venmo}
                                                 alt="Venmo's logo" />
                                        </div>
                                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                            <img className="h-5 md:h-10"
                                                 src={Paypal}
                                                 alt="Paypal's logo" />
                                        </div>
                                    </div>
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
