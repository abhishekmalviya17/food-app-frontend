import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const Restaurant = ({ restaurant, categories }) => {
    return(
        <div className="flex flex-row w-full items-start">
            <div
                id="Box"
                className="border-solid border-[#edeef2] bg-white flex flex-col pb-4 gap-4 w-full items-start border rounded-lg"
            >
                <div
                id="ImgMask"
                className="bg-[url(https://file.rendit.io/n/aep7vbCuA1rlf6IRUhDF.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end ml-0 w-full h-40 items-start"
                >
                     {restaurant.isFeatured && 
                <div className="text-xs font-['Nunito'] font-bold tracking-[0.6] leading-[16px] uppercase text-white bg-[#4e60ff] flex flex-row justify-center pt-2 w-24 h-8 items-start rounded-tr-lg rounded-bl-lg">
                    FEATURED
                </div>}
                </div>
                <div className="flex flex-col ml-4 gap-3 w-5/6 font-['Nunito'] items-start">
                <div className="flex flex-col gap-1 w-full items-start">
                    <div className="flex flex-row justify-between w-full items-start">
                        <div
                            id="CardTitle"
                            className="text-lg font-bold tracking-[0.1] leading-[24px] text-[#2b2b43]"
                        >
                            {restaurant.name}
                        </div>
                        <img
                            src="https://file.rendit.io/n/08fzoodKtBtny6lJEcMe.svg"
                            alt="IconOutlinedOtherShopShoppingBag"
                            className="w-5 mr-12"
                        />
                    </div>
                    <div className="flex flex-row justify-between w-1/2 items-start">
                    <div className="flex flex-row gap-1 w-20 items-start">
                        <img
                        src="https://file.rendit.io/n/XCameLh9pSFMJqSAQLre.svg"
                        alt="IconOutlinedActionMainClock"
                        className="mt-px w-3"
                        />
                        <div
                        id="Min"
                        className="text-xs font-semibold leading-[16px] text-[#83859c]"
                        >
                        {restaurant.time} - {restaurant.minimum}
                        </div>
                    </div>
                    <img
                        src="https://file.rendit.io/n/Fv5fi9WPHh8agaRupLDn.svg"
                        alt="Ellipse"
                        id="Ellipse"
                        className="mt-2 w-1"
                    />
                    <div
                        id="MinSum"
                        className="text-xs font-semibold leading-[16px] text-[#83859c]"
                    >
                        $32 min sum
                    </div>
                    </div>
                </div>
                <div
                    id="BadgeIconLeftDefault"
                    className="bg-[#edeef2] flex flex-row justify-center pt-1 gap-2 w-16 h-6 items-start rounded-[100px]"
                >
                    <img
                    src={"https://file.rendit.io/n/CKG2IE17kFdC3Fe5LUZ8.png"}
                    alt="EmojiSushi"
                    id="EmojiSushi"
                    className="mt-px w-3"
                    />
                    <div
                    id="Label"
                    className="text-xs font-semibold leading-[16px] text-[#545563]"
                    >
                    Sushi
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Restaurant;
