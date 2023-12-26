import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, removeFromCart } from '../redux/actions/cartActions';
import { fetchAddresses } from '../redux/actions/addressActions';
import { createOrder } from '../redux/actions/orderActions';
import Header from './layout/Header';
import { TrashIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, error, user } = useSelector((state) => ({...state.cart, user: state.user}));
  
  const addresses = useSelector(state => state.address.addresses);
  const hasAddress = addresses && addresses.length > 0;

  const handleRemoveFromCart = (menuItemId) => {
    dispatch(removeFromCart(menuItemId));
    dispatch(fetchCart());
  };

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchAddresses());
  }, [dispatch, items]);

  

  const handleOrderNow = () => {
    if (hasAddress) {
      dispatch(createOrder(items)); // Assuming createOrder action handles order creation
      navigate('/orders'); // Navigate to orders page
    } else {
      navigate('/settings'); // Navigate to settings page for address addition
    }
  };

  const total = useMemo(() => items.reduce((acc, item) => item.menuItem ? acc + (item.menuItem.price * item.quantity) : acc, 0), [items]);



  return (
    <>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Your Shopping Cart</h2>
        
        {items.length === 0 ? (
          <p className="text-lg text-gray-500">Your cart is empty. Time to fill it up!</p>
        ) : (
          <div className="divide-y divide-gray-300">
            {items.length === 0 ? (
  <p className="text-lg text-gray-500">Your cart is empty. Time to fill it up!</p>
) : (
  <div className="divide-y divide-gray-300">
    {items
      .filter(item => item.menuItem) // Only render items with a defined menuItem
      .map((item) => (
        <>
        {
          item.menuItem.price
          ?
          <div key={item.menuItem._id} className="py-4 flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">{item.menuItem.name}</h3>
            <p className="text-gray-600 mt-2 text-md">{item.menuItem.description}</p>
          </div>
          <div className="flex items-center text-lg font-medium">
            <span className="text-blue-600 mr-4">${item.menuItem.price.toFixed(2)} x {item.quantity}</span>
            <button
              onClick={() => handleRemoveFromCart(item.menuItem._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded inline-flex items-center ml-4"
            >
              <TrashIcon className="h-4 w-4 mr-1"/>
              Remove
            </button>
          </div>
        </div>
        :
        null
        }
        
        </>
      ))
    }
  </div>
)}
            <div className="pt-4 text-right">
              <h3 className="text-2xl font-bold text-gray-900">Total: ${total.toFixed(2)}</h3>
              <button
                onClick={handleOrderNow}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
