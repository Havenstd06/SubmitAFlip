import React from 'react';
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";

import FlipsBackground from "../Components/Background/FlipsBackground";
import FlipsCard from "../Components/FlipsCard";
import ListsCard from "../Components/ListsCard";

import ProfitableFlips from "../Assets/Images/ProfitableFlips.png";
import PriceFlips from "../Assets/Images/PriceFlips.png";
import LoopFlips from "../Assets/Images/LoopFlips.png";
import MassiveDiscount from "../Assets/Images/MassiveDiscount.png";

import SignedBook from "../Assets/Images/SignedBook.png";
import Playstation5 from "../Assets/Images/Playstation5.png";
import UberEats from "../Assets/Images/UberEats.png";
import WWIICoin from "../Assets/Images/WWIICoin.png";
import AirpodsPro from "../Assets/Images/AirpodsPro.png";
import SpaldingBall from "../Assets/Images/SpaldingBall.png";
import BowflexCurlBar from "../Assets/Images/BowflexCurlBar.png";
import GhostFunkoPop from "../Assets/Images/GhostFunkoPop.png";
import BadBunnyTicket from "../Assets/Images/BadBunnyTicket.png";


function Flips({ id = null }) {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="relative bg-gray-50 md:min-h-screen overflow-hidden pt-6 pb-12 sm:pb-24" id={id}>
            <FlipsBackground />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-50">

                <h1 className="text-gray-900 text-4xl font-bold text-center uppercase pt-16" data-aos="zoom-y-out" data-aos-delay="250">
                    Have any of the following flips?
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

                    <Fade>
                        <FlipsCard img={ProfitableFlips}
                                   title="Profitable Flips"
                                   description="Know a lowkey flip release that will be profitable in the aftermarket or eBay? Tell us about it in return for cash!"
                        />
                        <FlipsCard img={PriceFlips}
                                   title="Price Errors"
                                   description="See an item priced that's too good to be true on Amazon or any other stores? It may be a price error!"
                        />
                        <FlipsCard img={LoopFlips}
                                   title="Method Loops"
                                   description="Have a LEGAL method that can be looped over and over again for free stuff, money, or giftcards? Submit it today!"
                        />
                        <FlipsCard img={MassiveDiscount}
                                   title="Massive Discounts"
                                   description="Have an insane discount or coupon for a random item which could be profitable? Higher the discount, higher the payout!"
                        />
                    </Fade>

                </div>


            </div>

            <div className="my-16 md:my-24 px-4 md:px-0">
                <Fade>
                    <Slider
                        {...settings}
                    >

                        <ListsCard img={SignedBook}
                                   title="Signed Book"
                                   desc1="Retail: $15"
                                   desc2="Resold @ $130+"
                        />

                        <ListsCard img={Playstation5}
                                   title="Playstation 5"
                                   desc1="Retail: $499"
                                   desc2="Resold @ $800+"
                        />

                        <ListsCard img={UberEats}
                                   title="UberEats Tools"
                                   desc1="Cost: FREE"
                                   desc2="Reward: Unlimited $25 GCs"
                        />

                        <ListsCard img={WWIICoin}
                                   title="WWII Coin"
                                   desc1="Retail: $2,599"
                                   desc2="Resold @ $10,000"
                        />

                        <ListsCard img={AirpodsPro}
                                   title="Free Airpods Pros"
                                   desc1="Our Cost: FREE"
                                   desc2="MSRP: $250"
                        />

                        <ListsCard img={SpaldingBall}
                                   title="Spalding Ball"
                                   desc1="Retail: $400"
                                   desc2="Resold @ $900+"
                        />

                        <ListsCard img={BowflexCurlBar}
                                   title="Bowflex Curl Bar"
                                   desc1="Our Cost: FREE"
                                   desc2="MSRP: $250"
                        />

                        <ListsCard img={GhostFunkoPop}
                                   title="Ghost Funko Pop"
                                   desc1="Retail: $30"
                                   desc2="Resell: $200+"
                        />

                        <ListsCard img={BadBunnyTicket}
                                   title="Bad Bunny Ticket"
                                   desc1="Retail: $200"
                                   desc2="Resell: $1,500+"
                        />

                    </Slider>
                </Fade>
            </div>


        </section>
    )
}

export default Flips;
