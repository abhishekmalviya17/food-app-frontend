import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses } from '../redux/actions/addressActions';
import Header from './layout/Header';
import Button from '../components/common/Button';
import { CheckCircleIcon } from '@heroicons/react/solid';

const OrdersPage = () => {
  const dispatch = useDispatch();
  //const { user } = useSelector((state) => state.user);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const addresses = useSelector(state => state.address.addresses);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleCheckout = () => {
    // Checkout logic here
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Choose Your Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addresses && addresses.map((address, index) => (
            <div key={index} 
              className={`p-4 border rounded-md cursor-pointer ${selectedAddress === address ? 'border-blue-500' : 'border-gray-300'}`} 
              onClick={() => handleAddressSelect(address)}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Address {index + 1}</h3>
              <p className="text-md text-gray-600">{address.street}</p>
              <p className="text-md text-gray-600">{address.city}, {address.state} {address.zipCode}</p>
              <p className="text-md text-gray-600">{address.country}</p>
              {selectedAddress === address && <CheckCircleIcon className="h-6 w-6 text-green-500 mt-2" />}
            </div>
          ))}
        </div>
        {selectedAddress && (
          <Button 
            text="Proceed to Checkout" 
            onClick={handleCheckout} 
            className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          />
        )}
      </div>
    </>
  );
};

export default OrdersPage;
