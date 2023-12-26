import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses, removeAddress, updateAddress, addAddress } from '../redux/actions/addressActions';
import AddressForm from './AddressForm'; // A separate component for address form
import Button from "../components/common/Button";

const ShippingAddresses = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state)
  const addresses = useSelector(state => state.address.addresses);
  const [editingAddress, setEditingAddress] = useState(null);


  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleRemoveAddress = (addressId) => {
    dispatch(removeAddress(addressId));
    dispatch(fetchAddresses());
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    // dispatch(fetchAddresses());
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-6">Your Shipping Addresses</h2>
      {addresses&&addresses.map(address => (
        <div key={address._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Zip Code: {address.zipCode}</p>
          <p>Country: {address.country}</p>
          <div className="flex justify-end gap-2 mt-4">
            <Button text="Edit" onClick={() => handleEditAddress(address)} />
            <Button text="Delete" color="red-600" hoverColor="red-700" onClick={() => handleRemoveAddress(address._id)} />
          </div>
        </div>
      ))}

      {editingAddress ? 
        <AddressForm
          initialValues={editingAddress}
          onSubmit={(values) => {
            dispatch(updateAddress(values));
            setEditingAddress(null);
          }}
          onCancel={() => setEditingAddress(null)}
        />
        :
        <AddressForm onSubmit={(values) => dispatch(addAddress(values))} />
      }

      
    </div>
  );
};

export default ShippingAddresses;
