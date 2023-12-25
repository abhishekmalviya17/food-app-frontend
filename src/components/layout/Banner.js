// Banner.js
import React from 'react';

const Banner = ({ src, alt }) => {
    return (
        <div className="custom-sm:w-full mb-4 md:mb-0 md:mr-2 flex justify-center md:w-1/2">
            <img className="rounded-lg shadow-lg" src={src} alt={alt} />
        </div>
    );
}

export default Banner;
