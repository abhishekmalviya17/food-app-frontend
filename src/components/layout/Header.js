import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import avatarImage from '../../images/abhishek.jpeg'

import { MenuIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { fetchCart } from '../../redux/actions/cartActions';
import { ShoppingBagIcon } from "@heroicons/react/outline";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const { items } = useSelector((state) => state.cart);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen(!isAvatarMenuOpen);
  }

  useEffect(() => {
    dispatch(fetchCart()); // Fetch cart items when the component mounts
  }, [dispatch]);

 

  const totalCartItems = items.reduce((total, currentItem) => total + currentItem.quantity, 0);


  return (
    //Main Header container
    <div className="mx-auto flex flex-col w-full custom-sm:w-full custom-sm:p-0 custom-sm:m-0 items-start">
      {/* Container Providing height and width to the header*/}
      <div
        id="Box"
        className="cursor-pointer bg-white flex flex-col justify-end gap-3 w-full h-20 custom-sm:h-30 items-start font-['Nunito'] custom-sm:mr-2 custom-sm:ml-2"
      >
        {/* Our main header container containing all the header items */}
        <div className="custom-md:pl-40 custom-md:pr-40 flex flex-row justify-between custom-sm:items-end custom-sm:ml-2 custom-sm:w-full w-full items-start">

          {/* Left Part of the header */}
          <div className="flex flex-row mt-2 gap-12 w-2/5 custom-sm:w-1/4 items-end">
            <img
              src="https://file.rendit.io/n/UDxGnOZshAV2KGpCr6OY.svg"
              alt="Shape"
              id="Shape"
              className="mt-0 w-20 custom-sm:w-30"
              onClick={() => navigate('/home')}
            />
           <SearchBar />
          </div>

          {/* Right Part of the header */}
          <div className="flex flex-row gap-6 w-3/5 justify-end custom-sm:justify-start custom-sm:w-3/4 custom-sm:w-60 custom-sm:mx-2 font-['Nunito'] items-start">

            <div className="flex flex-row justify-between custom-sm:w-full items-start text-custom-black tracking-custom-1 font-normal">
              <label  onClick={() => navigate('/home')} className="cursor-pointer  font-['Nunito'] gap-3 font-semibold mx-4 my-2 hover:text-custom-blue custom-sm:hidden">
                Restaurants
              </label>
              <label  onClick={() => navigate('/home')} className="cursor-pointer  font-['Nunito'] gap-3 font-semibold d px-4 my-2 border-r-2 border-[#EDEEF2] hover:text-custom-blue custom-sm:hidden">
                Deals
              </label>
              <label  onClick={() => navigate('/settings')} className="cursor-pointer  font-['Nunito'] gap-3 font-semibold  mx-4 my-2 hover:text-custom-blue custom-sm:hidden">
                My orders
              </label>

                {/* Avatar */}
              <div class="cursor-pointer custom-sm:w-14 custom-sm:h-14 w-11 h-11 rounded-xl border-4 border-[#EDEEF2] flex justify-center items-center overflow-hidden mx-2">
                <img src={avatarImage} alt="User avatar" class="object-cover w-full h-full" onClick={() => {toggleAvatarMenu()}}/>
              </div>
              {/* Avatar Menu*/}
              {isAvatarMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      width: '10vw',
                      top: '80px', 
                  
                      right: '3vw'
                    }}
                    className="z-10 bg-white custom-sm:mr-40"
                  >
                    <div className="flex flex-col">
                      <a href="#" className="p-2 hover:bg-gray-100"  onClick={() => navigate('/home')}>
                        Profile
                      </a>
                      <a href="#" className="p-2 hover:bg-gray-100" onClick={() => navigate('/logout')}>
                        Logout
                      </a>
                    </div>
                  </div>
                )}

                {/* Cart icon */}
                <div className="cursor-pointer relative inline-block mx-2 my-1 custom-sm:my-2" onClick={() => navigate('/cart')}>
                  <ShoppingBagIcon className="h-8 w-8 custom-sm:w-10 custom-sm:h-10 text-blue-500" />
                  {totalCartItems > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                      {totalCartItems}
                    </span>
                  )}
                </div>

                <img
                  src="https://file.rendit.io/n/ZrybYG1r5ewxWCmX0woU.svg"
                  alt="Divider"
                  id="DividerRoot"
                  className="custom-sm:w-1 custom-md:hidden"
                />

              {/* Ham menu icon */}
              <div className="flex flex-row w-10 items-start custom-md:hidden">
                <div
                  id="Box"
                  className="mt-2 bg-[#edeef2] flex flex-row justify-center pt-3 w-10 h-10 items-start rounded-lg"
                >
                  <img
                    src="https://file.rendit.io/n/R9ddhKxRDIi9DU46yRmd.svg"
                    alt="IconOutlinedActionMainMenu"
                    className="custom-sm:w-4 custom-md:hidden"
                    onClick={toggleMenu}
                  />
                </div>
              </div>

              {isMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      width: '100vw',
                      top: '80px', 
                    }}
                    className="z-10 bg-white"
                  >
                    <div className="flex flex-col">
                      <a href="#" className="p-2 hover:bg-gray-100"  onClick={() => navigate('/home')}>
                        Restaurants
                      </a>
                      <a href="#" className="p-2 hover:bg-gray-100"  onClick={() => navigate('/home')}>
                        Deals
                      </a>
                      <a href="#" className="p-2 hover:bg-gray-100">
                        My Orders
                      </a>
                    </div>
                  </div>
                )}
            </div>


            
          </div>
        </div>

         
      </div>
      {/* Divider */}
      <img
          src="https://file.rendit.io/n/zVwUftAATGt39Zfl8Nhe.svg"
          alt="Divider"
          id="Divider"
          className="my-5 w-full"
        />
    </div>
  );
 };

export default Header;
