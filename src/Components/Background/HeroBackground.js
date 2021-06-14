import Cross from "../../Svg/Cross";
import Circle from "../../Svg/Circle";
import Rectangle from "../../Svg/Rectangle";

export default function HeroBackground() {
    return (
        <div className="absolute inset-y-0 h-full w-full">
            <div className="relative h-full max-w-7xl mx-auto">
                <Circle
                    className="absolute right-0 transform w-4 h-auto md:w-12 md:h-12 -translate-x-16 translate-y-20 md:-translate-x-16 lg:-translate-x-24 md:translate-y-44"
                />

                <Cross
                    className="absolute left-0 transform w-4 h-auto md:w-12 md:h-12 translate-x-12 translate-y-80 md:translate-x-24 md:translate-y-96"
                />

                <Rectangle
                    className="absolute right-0 bottom-0 transform w-4 h-auto md:w-12 md:h-12 -translate-x-12 -translate-y-56 md:-translate-x-24 lg:-translate-x-40 md:-translate-y-64"
                />
            </div>
        </div>
    )
}
