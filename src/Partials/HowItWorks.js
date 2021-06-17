import React from 'react';
import { Fade } from "react-awesome-reveal";

import HowItWorksBackground from "../Components/Background/HowItWorksBackground";
import HowItWorksCard from "../Components/HowItWorksCard";
import Number1 from "../Svg/Number1";
import Number2 from "../Svg/Number2";
import Number3 from "../Svg/Number3";

function HowItWorks({ id = null }) {

    return (
        <section className="relative bg-gray-50 md:min-h-screen overflow-hidden" id={id}>
            <HowItWorksBackground />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-50">

                <h1 className="text-gray-900 text-4xl font-bold text-center uppercase pt-4" data-aos="zoom-y-out" data-aos-delay="250">
                    How It Works
                </h1>

                <div className="lg:flex space-y-6 lg:space-y-0 justify-between w-full my-12">

                    <Fade cascade>

                        <HowItWorksCard
                                number={<Number1 />}
                                title="Submit your Flip"
                                description="Submit your information in our google form. We will do our best to review it within 24 hours."
                                className="relative md:transform md:-translate-y-6 lg:-translate-y-6 lg:-translate-x-4"
                            />

                            <HowItWorksCard
                                number={<Number2 />}
                                title="Agree on a Price"
                                description="We will contact you via email or discord regarding price and make a mutual agreement before ANY information is released."
                                className="relative lg:transform md:translate-y-42 lg:translate-y-64"
                            />

                            <HowItWorksCard
                                number={<Number3 />}
                                title="Payment Sent!"
                                description="Once everything is agreed on, you will be cashed out for your profitable info on one of our available payment platforms!"
                                className="relative md:transform lg:translate-y-12 lg:translate-x-6 lg:mr-12 xl:mr-0"
                            />

                    </Fade>

                </div>

            </div>

        </section>
    )
}

export default HowItWorks;
