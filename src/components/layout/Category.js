import React from 'react';

const Category = ({ category,icon, onSelect, isSelected }) => {
    const selectedClass = isSelected ? 'border-2 border-blue-500' : '';
 
    return (
        <>
            


            <div onClick={onSelect} id="MenuCategorySelectedRoot" className={`hover:border hover:border-[#4E60FF] rounded-lg shadow-lg cursor-pointer flex flex-col items-center p-4 text-center ${selectedClass} custom-sm:w-full custom-sm:py-8`}>
                <div
                    id="Label"
                    className="custom-sm:text-lg text-center text-xs font-bold tracking-[0.1] leading-[18px] text-[#4e60ff] px-14 py-4"
                    >
                    {category}
                    </div>
                    <img
                    src={icon}
                    alt="EmojiPizza"
                    id="EmojiPizza"
                    className="mt-px w-6 custom-sm:w-8 py-1"
                    />
            </div>
        </>
    );
}

export default Category;
