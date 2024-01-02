import React, { useState, useEffect } from 'react';

const CarouselDot = ({ index, activeIndex, onClick }) => (
  <div 
    className={`dot ${index === activeIndex ? 'active' : ''}`} 
    onClick={() => onClick(index)}
  />
);

const ReviewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 1 ? 0 : current + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="NewRootRoot" className="flex flex-row w-full items-start">
      <div id="Bg" className="bg-[#697bff] flex flex-col gap-16 w-full items-start pt-12 pb-20 px-16">
        {/* First Section */}
        <div style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
          {/* Place your first section HTML here */}
        </div>

        {/* Second Section */}
        <div style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
          {/* Place your second section HTML here */}
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {[0, 1].map((index) => (
            <CarouselDot 
              key={index} 
              index={index} 
              activeIndex={activeIndex} 
              onClick={handleDotClick} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
