import React from 'react';

const Banner = ({ src, alt }) => {
    return (
        <div className="flex justify-center md:w-1/2">
            <img className="mx-6" src={src} alt={alt} />
        </div>
    );
}

export default Banner;
