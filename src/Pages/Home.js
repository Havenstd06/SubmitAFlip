import React from "react";
import Header from "../Partials/Header";
import Flips from "../Partials/Flips";
import HowItWorks from "../Partials/HowItWorks";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header id="header" />

                {/*  Page content */}
                <main className="flex-grow z-40">
                    {/*  Page sections */}

                    <Flips id="flips"/>

                    <HowItWorks id="howItWorks" />

                </main>

                {/*  Site footer */}
                {/*<Footer id="footer" />*/}

            </div>
        </div>
    )
}
