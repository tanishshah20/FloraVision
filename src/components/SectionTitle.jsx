import React from 'react';

const SectionTitle = ({ title, className = '',background }) => {
  const gradientStyle = {
    background: background || 'linear-gradient(316.11deg, rgba(251, 211, 0, 0.5) 0.4%, rgba(255, 255, 255, 0.5) 110.43%)',
  };

  return (
    <div className={`flex justify-center items-center mb-12 ${className}`}>
      <div className="relative inline-block px-2 py-1">
        {/* Top-Right Corner */}
        <div 
          className="absolute top-0 right-0 w-12 h-12 pt-[2px] pr-[2px] rounded-tr-3xl"
          style={{
            ...gradientStyle,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
            borderTop: '2px solid transparent',
            borderRight: '2px solid transparent',
          }}
        ></div>

        {/* Bottom-Left Corner */}
        <div 
          className="absolute bottom-0 left-0 w-12 h-12 pb-[2px] pl-[2px] rounded-bl-3xl"
          style={{
            ...gradientStyle,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
            borderBottom: '2px solid transparent',
            borderLeft: '2px solid transparent',
          }}
        ></div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-5xl font-sans font-semibold text-white tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;