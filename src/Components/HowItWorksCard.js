import React from 'react';

const HowItWorksCard = (props) => {
    const { className, number, title, description } = props;

    return (
        <div className={"w-full lg:w-64 z-40 " + className}>
            <div className="py-6 h-64 md:h-56 lg:h-72 w-full flex justify-center shadow-xl rounded-2xl bg-white">
                <div className="w-10/12 flex flex-col">
                    <div className="lg:h-16 mb-6">
                        {number}
                    </div>

                    <h4 className={"small-border text-gray-900 font-semibold text-xl"}>
                        {title}
                    </h4>

                    <p className={"text-gray-400 mt-3"}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksCard;
