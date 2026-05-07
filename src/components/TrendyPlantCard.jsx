import React from 'react';
import Button from './Button';
import { BookmarkIcon } from '@heroicons/react/24/outline';

const TrendyPlantCard = ({ 
  imageSrc, 
  title, 
  description, 
  price, 
  imagePosition = 'left' 
}) => {
  // Determine flex direction based on imagePosition prop
  const layoutClass = imagePosition === 'right' 
    ? 'flex-col-reverse md:flex-row-reverse' 
    : 'flex-col md:flex-row';

  return (
    <div className={`bg-white/5 backdrop-blur-md rounded-[140px] p-6 mt-4 mb-16 flex items-center justify-center border-2 border-white/50 group ${layoutClass}`}>
      
      {/* Image Side */}
      <div className="w-full md:w-1/2 flex items-end justify-center relative -mt-24 md:-mt-32 mb-auto z-10 pointer-events-none">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-auto object-contain max-h-[350px] md:max-h-[450px] scale-110 transition-transform duration-700 group-hover:scale-[1.15] drop-shadow-2xl pointer-events-auto"
        />
      </div>

      {/* Text Side */}
      <div className='w-full md:w-1/2 flex flex-col items-start px-8'>
        <h3 className="text-2xl md:text-3xl font-sans font-semibold text-white mb-4">
          {title}
        </h3>
        <p className="w-full text-sm md:text-base font-sans font-semibold mb-4">
          {description}
        </p>
        <span className="text-2xl md:text-3xl font-sans font-semibold text-white mb-4">{price}</span>
        <div className="flex items-center gap-4">
          <Button variant="trend">Explore</Button>
          <Button variant="icon" aria-label="Add to cart" className="p-2">
            <img src="/bag.png" alt="Cart" className="w-[20px] h-[20px] object-contain invert brightness-0" />
          </Button>            
        </div>
      </div>
      
    </div>
  );
};

export default TrendyPlantCard;