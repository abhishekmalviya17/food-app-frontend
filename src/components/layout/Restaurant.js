import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Restaurant = ({ restaurant, categories}) => {
    const navigate = useNavigate();

    const filteredCategories = categories.filter(category => 
        restaurant.categories.includes(category.name)
      );

      const { items } = useSelector((state) => state.cart);



      const numberOfItemsInCart = items.filter(item => item.menuItem.restaurant === restaurant._id).reduce((total, item) => total + item.quantity, 0);

    return(
        <div className="flex flex-row w-full items-start" onClick={() => navigate(`/restaurants/${restaurant._id}`)}>
            <div
                id="Box"
                className="border-solid border-[#edeef2] bg-white flex flex-col pb-4 gap-4 w-full items-start border rounded-lg"
            >
                <div
                    id="ImgMask"
                    style={{
                        backgroundImage: `url(${restaurant.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'normal',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="flex flex-row justify-end ml-0 w-full h-40 items-start"
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
                        <div className="relative">
                        <ShoppingBagIcon className="h-9 w-9 mt-1 mr-2 custom-sm:mt-0 custom-sm:wr-0 custom-sm:w-9 custom-sm:h-10 text-blue-500" />
                            {numberOfItemsInCart > 0 && (
                                <span className="absolute right-0 top-0 inline-flex items-center justify-center px-2 py-1 custom-sm:py-0 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
                                    {numberOfItemsInCart}
                                </span>
                            )}
                        
                        </div>
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
                
                <div className='flex flex-row w-100'>
                {
                    filteredCategories.map((category) => {
                        return(
                            <div
                    id="BadgeIconLeftDefault"
                    className="bg-[#edeef2] flex flex-row justify-center pt-1 gap-2 pr-3 pl-3 mr-6 h-6 items-start rounded-[40px]"
                            >
                                <img
                                src={category.imageUrl}
                                alt="EmojiSushi"
                                id="EmojiSushi"
                                className="mt-px w-3"
                                />
                                <div
                                id="Label"
                                className="text-xs font-semibold leading-[16px] text-[#545563]"
                                >
                                {category.name}
                                </div>
                            </div>
                        )
                    })
                }
                </div>
               
               
                </div>
            </div>
        </div>

    )
}

export default Restaurant;
