import React from "react";

const SettingsNav = ({ selectedOption, onOptionChange }) => {
    const isSelected = (option) => selectedOption === option;

    return (
        <div className="flex flex-col gap-4 w-full font-['Nunito'] items-start">
            <div className="text-xl font-['Nunito'] font-semibold tracking-[0.1] leading-[28px] text-[#2b2b43] w-min">
                Settings
            </div>
            <div className="flex flex-col justify-between gap-3 w-full items-start">
                <div
                    className={`border-solid ${isSelected('personalInfo') ? 'border-[#4e60ff] bg-[#f3f4ff]' : 'border-[#edeef2] bg-white'} flex flex-row gap-3 w-full h-16 items-start pt-3 px-3 border-2 rounded-lg`}
                    onClick={() => onOptionChange('personalInfo')}
                >
                    <div className={`bg-${isSelected('personalInfo') ? '[#4e60ff]' : '[#edeef2]'} flex flex-row justify-center pt-2 w-10 h-10 items-start rounded-lg`}>
                        <img src="https://file.rendit.io/n/pcTxGejiteSj4TYXkzjW.svg" alt="IconOutlinedOtherPersonUser" className="w-5" />
                    </div>
                    <div className="flex flex-col gap-px w-2/5 font-['Nunito'] items-start">
                        <div className="text-sm font-bold tracking-[0.1] leading-[20px] text-[#2b2b43]">Account</div>
                        <div className="text-xs tracking-[0.2] leading-[18px] text-[#545563]">Personal information</div>
                    </div>
                </div>
                <div
                    className={`border-solid ${isSelected('shippingAddresses') ? 'border-[#4e60ff] bg-[#f3f4ff]' : 'border-[#edeef2] bg-white'} flex flex-row gap-3 w-full h-16 items-start pt-4 px-4 border rounded-lg`}
                    onClick={() => onOptionChange('shippingAddresses')}
                >
                    <div className={`bg-${isSelected('shippingAddresses') ? '[#4e60ff]' : '[#edeef2]'} flex flex-row justify-center pt-2 w-10 h-10 items-start rounded-lg`}>
                        <img src="https://file.rendit.io/n/YvjRwBg8ghJFh2BgNVbL.svg" alt="IconOutlinedOtherLocationMapPin" className="w-5" />
                    </div>
                    <div className="flex flex-col gap-px w-2/5 font-['Nunito'] items-start">
                        <div className="text-sm font-bold tracking-[0.1] leading-[20px] text-[#2b2b43]">Address</div>
                        <div className="text-xs tracking-[0.2] leading-[18px] text-[#545563]">Shipping addresses</div>
                    </div>
                </div>
                {/* Render more options similarly */}
            </div>
        </div>
    )
}

export default SettingsNav;
