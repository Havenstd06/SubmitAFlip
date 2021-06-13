import React from "react";
import Header from "../Components/Header";

export default function Home() {
    return (
        <div className="bg-white">
            <div className="application">
                <div className="flex flex-col min-h-screen overflow-hidden">
                    {/*  Site header */}
                    <Header id="header" />

                    {/*  Page content */}
                    <main className="flex-grow bg-white z-40">
                        Coming soon
                        {/*  Page sections */}

                    </main>

                    {/*  Site footer */}
                    {/*<Footer id="footer" />*/}

                </div>
            </div>
        </div>
    )
}
