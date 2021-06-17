import React from 'react';

const FlipsCard = (props) => {
    const { img, title, description } = props;

    return (
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <div className="py-6 h-72 w-full flex justify-center shadow-xl rounded-2xl bg-white">
                <div className="w-10/12 flex flex-col">
                    <div className="md:h-16 mb-6">
                        <img src={img} width="59" height="60" alt={title + '\'s logo'}/>
                    </div>

                    <h4 className={"small-border text-gray-900 font-semibold text-xl"}>
                        {title}
                    </h4>

                    <p className={"text-gray-400 mt-3 "}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FlipsCard;
