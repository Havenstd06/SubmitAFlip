import Cross from "../../Svg/Cross";
import Rectangle from "../../Svg/Rectangle";
import VectorLine from "../../Svg/VectorLine";

export default function HowItWorksBackground() {
    return (
        <div className="absolute inset-y-0 h-full w-full z-50">
            <VectorLine
                className="absolute transform translate-y-24"
            />

            <div className="relative h-full max-w-7xl mx-auto">
                <Cross
                    className="absolute right-0 transform w-4 h-auto md:w-12 md:h-12 -translate-x-16 translate-y-20 md:-translate-x-16 lg:-translate-x-20 md:translate-y-24"
                />

                <Rectangle
                    className="absolute left-0 bottom-0 transform w-4 h-auto md:w-12 md:h-12 translate-x-12 -translate-y-56 md:translate-x-24 lg:translate-x-40 md:-translate-y-64"
                />
            </div>
        </div>
    )
}
