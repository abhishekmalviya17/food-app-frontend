import React, {useState} from "react";
import Header from "./Header";
import BannerImg1 from '../../images/Banner.png'
import BannerImg2 from '../../images/Banner1.png'
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { FaPizzaSlice, FaHamburger, FaIceCream, FaLeaf } from 'react-icons/fa';
import { GiChopsticks, GiBarbecue } from 'react-icons/gi';
import { MdOutlineLocalPizza, MdFastfood } from 'react-icons/md';


const categoryIcons = {
    Pizza: <MdOutlineLocalPizza className="text-2xl" />,
    Burger: <MdFastfood className="text-2xl" />,
    BBQ: <GiBarbecue className="text-2xl" />,
    Sushi: <GiChopsticks className="text-2xl" />,
    Vegan: <FaLeaf className="text-2xl" />,
    Desserts: <FaIceCream className="text-2xl" />,
  };

const Home = () => {
    const restaurants = [
        {
          id: 1,
          name: "Burgers & Pizza",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
          time: "40-60 min",
          minimum: "$24 min sum",
          categories: ["Burger", "Pizza"],
          isFeatured: true,
          orderCount: 2,
        },
        // ... more restaurants
      ];


    return(
    <>
        <Header />
        <div className="container mx-auto">
            {/* Promotion Section */}
            <div className="py-8 px-4 flex justify-between px-6">
                {/* Left promo - Assuming the entire promo is an image */}
                <div className="mb-4 md:mb-0 md:mr-2 flex justify-center md:w-1/2">
                <img
                    className="rounded-lg shadow-lg"
                    src={BannerImg2}
                    alt="20% Off Banner"
                />
                </div>

                {/* Right promo - Assuming the entire promo is an image */}
                <div className="flex justify-center md:w-1/2">
                <img
                    className="rounded-lg shadow-lg"
                    src={BannerImg1}
                    alt="50% Off Banner"
                />
                </div>
            </div>

            {/* Category Section */}
            <div className="flex flex-wrap justify-between  p-4">
                {Object.entries(categoryIcons).map(([category, icon]) => (
                    <div key={category} className={`bg-[#F3F4FF] hover:border hover:border-[#4E60FF] rounded-lg shadow-lg flex flex-col items-center p-4 text-center`}>
                    <div className="w-40 h-12 rounded-full flex items-center justify-center">
                        {icon} {/* Display the icon */}
                    </div>
                    <span className="font-semibold block mt-2">{category}</span>
                    </div>
                ))}
            </div>

            {/* Nearby Restaurants Section */}
            <div className="py-8 px-4 md:px-6">
                <h3 className="text-xl font-bold mb-4">Nearby restaurants</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="bg-white rounded-lg shadow-lg relative">
                        <img
                        className="w-full h-40 object-cover rounded-t-lg"
                        src={restaurant.image}
                        alt={restaurant.name}
                        />
                        {restaurant.isFeatured && (
                        <span className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                            FEATURED
                        </span>
                        )}
                        <div className="p-4">
                        <h4 className="text-lg font-bold">{restaurant.name}</h4>
                        <p className="text-sm text-gray-600">{restaurant.time} • {restaurant.minimum}</p>
                        <div className="flex items-center mt-2">
                            {restaurant.categories.map((category) => (
                            <span key={category} className="mr-2">
                                {/* Icons for each category */}
                                <span className="text-sm">{category}</span>
                            </span>
                            ))}
                        </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        <ShoppingCartIcon className="w-5 h-5" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                            {restaurant.orderCount}
                        </span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
 
        </div>

    </>
        

    )
}

export default Home;