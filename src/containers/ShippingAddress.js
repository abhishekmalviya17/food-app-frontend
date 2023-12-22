import React, { useState } from "react";
import Button from "../components/common/Button";
import { FaMapMarkerAlt, FaCity, FaFlag, FaMapPin } from "react-icons/fa"; // Import specific icons
import TextField from "../components/common/TextField";

const ShippingAddresses = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSaveClick = () => {
    console.log("Save Address");
    // Logic to save the address
  };

  const handleDiscardClick = () => {
    console.log("Discard Changes");
    // Logic to discard changes
  };

  return (
    <div className="flex flex-col w-full items-start">
      <div className="text-xl font-['Nunito'] font-semibold leading-[28px] text-[#2b2b43] mb-5 mt-4">
        Address
      </div>
      <div className="border-solid border-[#edeef2] bg-white flex flex-col justify-center gap-6 w-full font-['Nunito'] items-start pt-6 pb-5 px-4 border rounded-lg">
        <div className="text-lg font-bold tracking-[0.1] leading-[24px] text-[#2b2b43]">
          Shipping Addresses
        </div>

        <div className="flex flex-col gap-4 w-full items-start">
          <TextField 
            icon={FaMapMarkerAlt}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div className="flex flex-row gap-4 w-full items-center">
            <TextField 
              icon={FaCity}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
            <TextField 
              icon={FaFlag}
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
          <TextField 
            icon={FaMapPin}
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
          />
        </div>

        <div className="flex justify-end w-full mt-4 gap-4">
          <Button
            text="Discard Changes"
            color="gray-400"
            hoverColor="gray-500"
            textColor="text-gray-600"
            hoverTextColor="text-white"
            onClick={handleDiscardClick}
            border={true}
          />
          <Button
            text="Save Changes"
            color="blue-600"
            hoverColor="blue-700"
            textColor="text-white"
            hoverTextColor="text-white"
            onClick={handleSaveClick}
            border={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddresses;
