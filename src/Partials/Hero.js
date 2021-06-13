import Wave from "../Svg/Wave";

export default function Hero() {
    return (
        <main className="flex flex-col justify-center items-center px-4 pb-6 lg:px-20 py-8 md:py-16 h-full">
            <div className="text-center">
                <h1 className="text-5xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-7xl lg:text-8xl space-y-3">
                    <span className="block">
                        Get paid up
                    </span>
                    {' '}
                    <span className="block">
                        to
                        <span className="text-maldive-dark">
                            {' '}$5,000
                        </span>
                    </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    <span className="block">
                        Submit your information of anything profitable in return for cash.
                    </span>
                    {' '}
                    <span className="block">
                        No strings attached.
                    </span>
                </p>
                <div className="mt-5 sm:flex sm:justify-center md:mt-8">
                    <a
                        href="#"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-maldive hover:bg-maldive-dark md:py-3 md:text-lg md:px-10"
                    >
                        Submit A Flip
                    </a>
                </div>
            </div>
            <div className="my-6">
                <Wave />
            </div>
        </main>
    )
}
