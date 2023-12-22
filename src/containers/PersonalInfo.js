import React, { useState } from "react";
import Checkbox from "../components/common/Checkbox";
import Button from "../components/common/Button";
import '../../src/App.css';
import '../../src/index.css'
const PersonalInfo = () => {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Robertson');
  const [email, setEmail] = useState('jane.robertson@example.com');
  const [phoneNumber, setPhoneNumber] = useState('(217) 555-0113');

  const handleButtonClick = () => {
    console.log("Button clicked");
    // Add button click logic here
  };

  return (
    <div id="NewRootRoot" className="flex flex-col w-full items-start custom-sm:p-0 mt-4">
      <div className="text-xl font-['Nunito'] font-semibold leading-[28px] text-[#2b2b43] mb-5">
        Account
      </div>
      <div
        id="Box"
        className="border-solid border-[#edeef2] bg-white flex flex-col justify-center gap-6 w-full font-['Nunito'] items-start pt-6 pb-5 px-4 custom-sm:p-2 border rounded-lg"
      >
        <div className="flex flex-col gap-8 w-full items-start">
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-col justify-between gap-4 w-full items-start">
            <div className="text-lg font-bold tracking-[0.1] leading-[24px] text-[#2b2b43]">
              Personal information
            </div>
            <div className="flex flex-row gap-8 w-2/5 items-start">
              <div className="flex flex-col gap-2 w-2/3 items-start">
                <div className="text-xs font-semibold leading-[16px] text-[#545563]">
                  Avatar
                </div>
                <div className="flex flex-row gap-6 w-full items-start">
                  <img
                    src="https://file.rendit.io/n/hC80TTwFLS5zvCfZP904.svg"
                    alt="Avatar"
                    className="w-20"
                  />
                  <Button 
                    text="Change" 
                    color="blue-600" 
                    hoverColor="blue-600" 
                    textColor="text-blue-600" 
                    hoverTextColor="text-white" 
                    onClick={handleButtonClick} 
                    border={true}
                  />

                  <Button 
                    text="Remove" 
                    color="gray-700" 
                    hoverColor="gray-500" 
                    textColor="text-gray-600" 
                    hoverTextColor="text-white" 
                    onClick={handleButtonClick} 
                    border={false}
                  />
                </div>
              </div>
              
            </div>
          </div>

          {/* Name and Contact Information */}
          <div className="flex flex-col gap-1 w-full items-start">
            <div className="flex flex-row custom-sm:hidden justify-between w-3/5 custom-sm:w-full items-start">
              <div className="text-xs font-semibold leading-[16px] custom-sm:w-full text-[#545563]">
                First name
              </div>
              <div className="text-xs font-semibold leading-[16px] text-[#545563] custom-sm:w-full">
                Last name
              </div>
            </div>
            <div className="flex flex-row custom-sm:flex-col gap-4 w-full items-start">
              <div className="text-xs font-semibold leading-[16px] custom-sm:w-full custom-md:hidden text-[#545563]">
                First name
              </div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-sm custom-sm:w-full tracking-[0.1] leading-[20px] text-[#2b2b43] border-solid border-[#c7c8d2] flex flex-row w-1/2 h-10 items-center px-3 border rounded-lg"
              />
               <div className="text-xs custom-md:hidden font-semibold leading-[16px] custom-sm:w-full custom-md:hidden text-[#545563]">
                Last name
              </div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="text-sm custom-sm:w-full tracking-[0.1] leading-[20px] text-[#2b2b43] border-solid border-[#c7c8d2] flex flex-row w-1/2 h-10 items-center px-3 border rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full items-start">
            <div className="flex flex-row justify-between w-3/5 items-start custom-sm:hidden">
              <div className="text-xs font-semibold leading-[16px] text-[#545563]">
                Email
              </div>
              <div className="text-xs font-semibold leading-[16px] text-[#545563]">
                Phone number
              </div>
            </div>
            <div className="flex flex-row custom-sm:flex-col gap-4 w-full items-start">
              <div className="custom-md:hidden custom-sm:w-full text-xs font-semibold leading-[16px] text-[#545563]">
                Email
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-sm:w-full text-sm tracking-[0.1] leading-[20px] text-[#2b2b43] border-solid border-[#c7c8d2] flex flex-row w-1/2 h-10 items-center px-3 border rounded-lg"
              />
              <div className="custom-md:hidden custom-sm:w-full text-sm font-semibold leading-[16px] text-[#545563]">
                Phone number
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="custom-sm:w-full text-sm tracking-[0.1] leading-[20px] text-[#2b2b43] border-solid border-[#c7c8d2] flex flex-row w-1/2 h-10 items-center px-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="flex flex-row custom-sm:flex-col justify-between w-full items-start">
            <div className="flex flex-col gap-12 w-full items-start custom-md:w-1/4">
              <div className="flex flex-col justify-between w-full h-[148px] items-start">
                <div className="text-lg font-bold custom-sm:font-md tracking-[0.1] leading-[24px] text-[#2b2b43] ">
                  Email notifications
                </div>
                <Checkbox label="New deals" defaultChecked={true} />
                <Checkbox label="New restaurants" defaultChecked={false} />
                <Checkbox label="Order statuses" defaultChecked={true} />
              </div>
            </div>
            <div className="flex flex-col mt-10 custom-sm:mt-3 gap-12 w-full items-start custom-md:w-1/2">
              <div className="flex flex-col justify-between w-full h-[108px] items-start">
                <Checkbox label="Password Changes" defaultChecked={true} />
                <Checkbox label="News letters" defaultChecked={false} />
                <Checkbox label="Special Offers" defaultChecked={true} />
              </div>
            </div>
          </div>
        </div>

       

        <div className="border-t border-[#edeef2] p-4 w-full mt-6 flex flex-row justify-between items-start">
          <Button 
            text="Log out" 
            color="red-600" 
            hoverColor="red-700" 
            textColor="text-red-600" 
            hoverTextColor="text-white" 
            onClick={handleButtonClick} 
            border={true}
            /> 
            <div className="flex flex-row justify-between items-start w-1/3  custom-sm:w-3/5">
                <Button 
                  text="Discard changes" 
                  color="gray-400" 
                  hoverColor="gray-500" 
                  textColor="text-gray-600" 
                  hoverTextColor="text-white" 
                  onClick={handleButtonClick} 
                  border={true}
                />
                <Button 
                  text="Save changes" 
                  color="blue-600" 
                  hoverColor="blue-600" 
                  textColor="text-blue-600" 
                  hoverTextColor="text-white" 
                  onClick={handleButtonClick} 
                  border={true}
                  
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

{/* <div className="flex flex-row ml-16 gap-4 w-5/6 items-start">

</div>


*/}
