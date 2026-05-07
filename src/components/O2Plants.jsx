import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const O2Plants = () => {
  return (
    <section className="bg-brand-dark px-6 py-20 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Best o2" background='linear-gradient(136.03deg, #55B000 -1.83%, rgba(255, 255, 255, 0.156606) 49.18%, #50790B 100%)'/>

        <div 
          className="relative rounded-[40px] md:rounded-[92px] p-6 md:p-16 mt-20 flex flex-col lg:flex-row items-center justify-between gap-12 group lg:h-[600px] w-full"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)"
          }}
        >
          <div 
            className="absolute inset-0 rounded-[40px] md:rounded-[92px] pointer-events-none"
            style={{
              padding: "3px",
              background: "linear-gradient(101.82deg, rgba(255, 255, 255, 0.44) 2.51%, rgba(0, 0, 0, 0) 39.22%, rgba(255, 255, 255, 0.33) 97.85%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude"
            }}
          ></div>

          {/* Image */}
          <div className="w-full lg:w-1/2 lg:flex-shrink-0 relative z-10 flex items-center justify-center -mt-20 md:-mt-40 lg:-ml-20 mb-auto shrink-0 pointer-events-none">
            <img 
              src="/rosegold.png" 
              alt="Best O2 Plant" 
              className="w-[100%] sm:w-[120%] max-w-[500px] lg:max-w-[700px] lg:w-[130%] h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl pointer-events-auto mix-blend-normal"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 md:pr-12 md:pl-8">
            <h3 className="text-3xl md:text-[40px] font-sans font-bold text-white/90 mb-6 leading-tight">
              We Have Small And Best O2 Plants Collection's
            </h3>
            
            <p className="text-white/70 font-sans text-lg mb-6 leading-relaxed">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            
            <p className="text-white/70 font-sans text-lg mb-12 leading-relaxed">
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>

            <div className="flex flex-wrap items-center justify-between w-full mt-4">
              <Button variant="trend" className="px-10 py-3 text-lg border-white/60">Explore</Button>
              
              <div className="flex items-center gap-6">
                <button className="text-white/60 hover:text-white transition-colors" aria-label="Previous">
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <span className="text-white/90 font-sans font-bold text-sm tracking-widest">01/04</span>
                <button className="text-white/60 hover:text-white transition-colors" aria-label="Next">
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>
        </div>
        
        {/* Pagination Indicator */}
        <div className="flex items-center justify-center gap-4 mt-12 w-full">
          <div className="w-[31px] h-[11px] rounded-full bg-white/75"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-white/75"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-white/75"></div>
        </div>
      </div>
    </section>
  );
};

export default O2Plants;
