import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ icon: Icon, value, onChange, placeholder, type = 'text' }) => {
  const iconSize = "text-lg sm:text-xl"; 
  const textSize = "text-sm sm:text-base"; 
  const iconColor = "#6b7280";

  return (
    <div className={`flex flex-row items-center border border-[#c7c8d2] w-full h-10 px-3 rounded-lg focus-within:border-blue-600`}>
      {Icon && <Icon className={`${iconSize} mr-2`} color={iconColor} />}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${textSize} w-full focus:outline-none`}
      />
    </div>
  );
};

TextField.propTypes = {
  icon: PropTypes.elementType,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default TextField;
