// InputField.js

import React from 'react';

const InputField = ({ name, type, placeholder, value, onChange, onBlur, error }) => {
  return (
    <div className="flex flex-col gap-1 w-full items-start">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`text-sm tracking-[0.1] leading-[20px] text-[#83859c] border ${
          error ? 'border-red-500' : 'border-[#c7c8d2]'
        } flex w-full h-10 px-3 rounded-lg py-0`}
      />
      {error && <div className="text-xs text-red-500">{error}</div>}
    </div>
  );
};

export default InputField;
