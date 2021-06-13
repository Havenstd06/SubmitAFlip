import Cross from "../../Svg/Cross";
import Circle from "../../Svg/Circle";
import Rectangle from "../../Svg/Rectangle";

export default function HeroBackground() {
    return (
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
            <div className="relative h-full max-w-7xl mx-auto">
                <Circle
                    className="absolute right-0 transform -translate-x-16 lg:-translate-x-24 translate-y-44"
                />

                <Cross
                    className="absolute left-0 transform translate-x-24 translate-y-96"
                />

                <Rectangle
                    className="absolute right-0 bottom-0 transform -translate-x-24 lg:-translate-x-40 -translate-y-64"
                />
            </div>
        </div>
    )
}
