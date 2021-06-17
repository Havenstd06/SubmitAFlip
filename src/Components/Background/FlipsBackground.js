import Circle from "../../Svg/Circle";

export default function FlipsBackground() {
    return (
        <div className="absolute inset-y-0 h-full w-full hidden md:block">
            <div className="relative h-full max-w-7xl mx-auto">
                <Circle
                    className="absolute left-0 md:transform w-4 h-auto md:w-8 md:h-8 md:-translate-x-16 lg:translate-x-24 md:translate-y-12"
                />
            </div>
        </div>
    )
}
