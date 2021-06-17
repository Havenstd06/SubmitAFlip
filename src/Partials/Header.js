import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroBackground from "../Components/Background/HeroBackground";

function Header({ id = null }) {
    return (
        <header className="relative bg-gray-50 md:min-h-screen overflow-hidden" id={id}>
            <HeroBackground />

            <div className="relative pt-6 pb-16 sm:pb-0 md:h-screen md:flex flex-col justify-between">
                <Navbar />

                <Hero />
            </div>
        </header>
    )
}

export default Header;
