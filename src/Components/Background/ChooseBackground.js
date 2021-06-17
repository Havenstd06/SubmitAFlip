import Cross from "../../Svg/Cross";
import Rectangle from "../../Svg/Rectangle";
import VectorLine from "../../Svg/VectorLine";
import Circle from "../../Svg/Circle";

export default function ChooseBackground() {
    return (
        <div className="absolute inset-y-0 h-full w-full z-50 hidden md:block">
            <div className="relative h-full max-w-7xl mx-auto">
                <Circle
                    className="absolute right-0 transform w-4 h-auto md:w-10 md:h-10 -translate-x-16 translate-y-20 md:-translate-x-16 lg:-translate-x-20 md:translate-y-44"
                />

                <Cross
                    className="absolute left-0 bottom-0 transform w-4 h-auto md:w-10 md:h-10 translate-x-12 -translate-y-56 md:translate-x-24 lg:translate-x-40 md:-translate-y-64"
                />
            </div>
        </div>
    )
}
