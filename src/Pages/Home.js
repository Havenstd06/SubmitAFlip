import React from "react";
import Header from "../Components/Header";
import Flips from "../Components/Flips";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <div className="application">
                <div className="flex flex-col min-h-screen overflow-hidden">
                    {/*  Site header */}
                    <Header id="header" />

                    {/*  Page content */}
                    <main className="flex-grow bg-gray-50 z-40">
                        <Flips />
                        {/*  Page sections */}

                    </main>

                    {/*  Site footer */}
                    {/*<Footer id="footer" />*/}

                </div>
            </div>
        </div>
    )
}
