import React, { useState } from "react";
import Header from "../components/layout/Header";
import PersonalInfo from "./PersonalInfo";
import ShippingAddresses from "./ShippingAddress";
import SettingsNav from '../components/SettingsNav';

const Settings = () => {
    const [selectedOption, setSelectedOption] = useState('personalInfo');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    }

    const renderOption = () => {
        switch (selectedOption) {
            case 'personalInfo':
                return <PersonalInfo />;
            case 'shippingAddresses':
                return <ShippingAddresses />;
            
            default:
                return <PersonalInfo />;
        }
    }

    return (
        <div>
            <Header />
            <div className="flex flex-row custom-sm:flex-col">
                <div className="flex justify-center w-1/3 ml-40 custom-sm:ml-1 mr-10 custom-sm:mr-1 mt-5 custom-sm:mt-3 custom-sm:w-full">
                    <SettingsNav selectedOption={selectedOption} onOptionChange={handleOptionChange} />
                </div>
                <div className="flex justify-center w-2/3 mr-40 custom-sm:w-full custom-sm:mr-0">
                    {renderOption()}
                </div>
            </div>
        </div>
    )
}

export default Settings;
