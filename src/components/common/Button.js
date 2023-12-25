import React from 'react';

const Button = ({ text, color, hoverColor, textColor, hoverTextColor, border, onClick, extraClasses = '' }) => {
    const borderClass = border ? `border border-${color}` : 'border-0';
    const backgroundColorClass = `bg-${color}`;

    return (
        <div
            onClick={onClick}
            className={`text-center text-sm font-bold leading-normal text-${textColor} ${borderClass} ${backgroundColorClass} flex justify-center items-center py-2 px-4 rounded-lg cursor-pointer hover:bg-${hoverColor} hover:text-${hoverTextColor} hover:border-${hoverColor} mt-2 transition-colors duration-200 ${extraClasses}`}
        >
            {text}
        </div>
    );
};

export default Button;
