import React from 'react';
import { PlayCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const HeroBanner = () => {
  return (
    <section className="relative bg-transparent px-6 py-20 lg:px-12 min-h-[90vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 w-full">
        {/* Left Column */}
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="font-sans font-semibold text-[44px] sm:text-[50px] md:text-[70px] lg:text-[80px] text-white/75 leading-none mb-6">
            Earth's Exhale
          </h1>
          <p className="font-sans font-medium text-[20px] text-white/75 leading-tight mb-8 w-full">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <Button variant="outline" className="font-thin text-[20px] px-10 py-3 !rounded-[12px] border-white/80 hover:bg-white/10">Buy Now</Button>
            <div className="flex items-center gap-3 group cursor-pointer">
              <PlayCircleIcon className="w-14 h-14 group-hover:text-brand-accent transition-colors" />
              <span className="text-white font-indie font-normal text-[25px] leading-none group-hover:text-brand-accent transition-colors">Live Demo...</span>
            </div>
          </div>

          {/* Avatar Row */}
          <div className="flex items-start flex-col gap-4 bg-white/5 px-4 py-6 rounded-3xl backdrop-blur-sm border border-white/50 mt-32">
            <div className="flex items-center gap-4">
              <img src="/image.png" alt="Ronnie Hamill" className="w-12 h-12 object-cover rounded-full" />
              <div className="flex items-start flex-col">
                <h4 className="text-white font-sans font-normal text-sm">Ronnie Hamill</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-brand-muted font-sans text-xs mt-1 max-w-[250px]">I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-center justify-center lg:justify-end z-10 mt-20 md:mt-32 lg:mt-0">
          
          {/* Card Wrapper with SVG Background */}
          <div className="relative flex flex-col p-4 md:p-[26px] w-full sm:w-[512px] min-h-[450px] md:min-h-[600px]">
            {/* SVG Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 512 624" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-15" y="-15" width="542" height="653.157">
                  <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_0_11_19_clip_path)', height: '100%', width: '100%'}}></div>
                </foreignObject>
                <path data-figma-bg-blur-radius="15" d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_11_19)"/>
                <defs>
                  <clipPath id="bgblur_0_11_19_clip_path" transform="translate(15 15)">
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"/>
                  </clipPath>
                  <linearGradient id="paint0_linear_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Content Layer */}
            <div className="relative z-10 flex flex-col w-full flex-grow">
              <img 
                src="rosegold.png" 
                alt="Aglaonema in white pot" 
                className="-mt-32 mb-auto w-full sm:w-[459px] h-auto sm:h-[459px] object-contain mx-auto drop-shadow-2xl"
              />
              
              <div className="mt-8 w-full px-4 mb-4">
                <span className="text-white/75 font-sans font-normal text-[23px] leading-none block mb-3">Indoor Plant</span>
                
                <div className="flex items-center justify-between w-full mb-8">
                  <h3 className="text-white/75 font-sans font-normal text-[38px] leading-none">Aglaonema plant</h3>
                  <ChevronRightIcon className="w-6 h-6 text-white/75 cursor-pointer" />
                </div>
                
                <Button variant="outline" className="font-sans font-thin text-[20px] px-10 py-2 !rounded-[12px] border-white/80 hover:bg-white/10 w-auto">Buy Now</Button>
                
                <div className="flex items-center justify-center gap-2 mt-8 mb-2 w-full">
                  <div className="w-6 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
