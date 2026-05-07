import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 h-[50px] rounded-full font-sans font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark flex items-center justify-center";
  
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-green-600 focus:ring-brand-accent",
    outline: "px-9 bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white",
    icon: "px-0 w-[50px] rounded-xl bg-transparent border border-white text-white hover:bg-white/10 hover:border-white focus:ring-white",
    trend: "px-9 rounded-xl bg-transparent border border-white text-white hover:bg-white/10 hover:border-white focus:ring-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
