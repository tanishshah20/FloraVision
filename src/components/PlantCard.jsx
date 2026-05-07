import React from 'react';
import Button from './Button';

const PlantCard = ({ plant }) => {
  return (
    <div className="relative transition-all duration-300 hover:scale-105 group min-h-[450px] flex flex-col p-[26px]">
      
      {/* SVG Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 512 624" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <foreignObject x="-15" y="-15" width="542" height="653.157">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_0_11_19_clip_path)', height: '100%', width: '100%'}}></div>
          </foreignObject>
          
          <path data-figma-bg-blur-radius="15" d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#border_gradient_plant)" strokeWidth="2"/>
          
          <defs>
            <clipPath id="bgblur_0_11_19_clip_path" transform="translate(15 15)">
              <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"/>
            </clipPath>
            
            {/* New Border Gradient matching requested Figma properties */}
            <linearGradient id="border_gradient_plant" x1="0" y1="0" x2="512" y2="624" gradientUnits="userSpaceOnUse">
              <stop offset="0.0668" stopColor="white" stopOpacity="0.2"/>
              <stop offset="0.5171" stopColor="black" stopOpacity="0"/>
              <stop offset="0.9327" stopColor="white" stopOpacity="0.2"/>
            </linearGradient>
            
          </defs>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full flex-grow">
        <div className="flex flex-center justify-center -mt-28 mb-12 drop-shadow-2xl pointer-events-none">
          <img 
            src={plant.image} 
            alt={plant.name} 
            className="w-full max-w-[200px] h-auto object-contain transition-transform duration-500 scale-[1.6] pointer-events-auto"
            loading="lazy"
          />
        </div>
        
        <div className="px-2 mt-auto flex flex-col flex-grow">  
          <h3 className="text-2xl font-sans font-normal text-white/75 mb-2">
            {plant.name}
          </h3>
          
          <p className="text-base font-sans font-normal text-white/75 mb-6 flex-grow line-clamp-4">
            {plant.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto pb-4">
            <span className="text-2xl font-sans font-normal text-white">{plant.price}</span>
            <Button variant="icon" aria-label={`Add ${plant.name} to cart`} className="p-2">
              <img src="/bag.png" alt="Cart" className="w-[20px] h-[20px] invert brightness-0 object-contain" />
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PlantCard;
