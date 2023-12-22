import React,{useState} from "react";

const Button = ({ text, color, hoverColor, textColor, hoverTextColor, border, onClick }) => {
    const borderClass = border ? `border border-${color}` : 'border-0';
  
    return (
      <div
        onClick={onClick}
        className={`text-center text-sm font-bold leading-normal ${textColor} ${borderClass} flex justify-center items-center py-2 px-4 rounded-lg cursor-pointer hover:bg-${hoverColor} hover:${hoverTextColor} hover:border-${hoverColor} mt-2 transition-colors duration-200`}
      >
        {text}
      </div>
    );
  };
  

  
  export default Button;