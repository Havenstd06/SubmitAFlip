import React from 'react';

const ListsCard = (props) => {
    const { img, title, desc1, desc2 } = props;

    return (
        <div className="mx-5 my-9">
            <div className="w-full py-3 px-3 flex items-center shadow-xl rounded-3xl bg-white">
                <div className="mr-5 w-1/4">
                    <img src={img} alt={title + '\' logo'} />
                </div>
                <div className="w-3/4">
                    <h4 className="text-maldive-dark font-semibold text-2xl">
                        {title}
                    </h4>
                    <div className="mt-px text-sm text-gray-500">
                        <p>
                            {desc1}
                        </p>
                        <p>
                            {desc2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListsCard;
