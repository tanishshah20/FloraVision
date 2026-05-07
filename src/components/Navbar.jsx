import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; // Removed unused icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Plants Type', href: '#', hasDropdown: true },
    { name: 'More', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent px-6 py-4 lg:px-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <img src="/plant.png" alt="logo" className='rounded-full w-10 h-10'/> {/* Added leading slash for consistent path */}
          <span className="font-sans font-black text-[28px] leading-none text-white/75 tracking-normal">FloraVision.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.name} className="relative group z-50">
                <button className="flex items-center gap-1 text-white font-indie font-normal text-[24px] leading-none hover:text-brand-accent transition-colors focus:outline-none">
                  {link.name}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 font-indie font-normal text-[24px] leading-none bg-brand-card rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <a href="#" className="block px-4 py-3 text-white hover:bg-brand-accent/20 hover:text-brand-accent transition-colors">Indoor Plants</a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-brand-accent/20 hover:text-brand-accent transition-colors">Outdoor Plants</a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-brand-accent/20 hover:text-brand-accent transition-colors">Succulents</a>
                </div>
              </div>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white font-indie font-normal text-[24px] leading-none hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="opacity-75 hover:opacity-100 transition-opacity" aria-label="Search">
            <img src="/search-interface-symbol.png" alt="Search" className="w-[26px] h-[26px] object-contain" />
          </button>
          <button className="opacity-75 hover:opacity-100 transition-opacity relative" aria-label="Cart">
            <img src="/bag.png" alt="Cart" className="w-[26px] h-[26px] object-contain" />
            <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button className="text-white opacity-75 hover:opacity-100 transition-opacity flex flex-col gap-1.5 items-end justify-center w-[26px] h-[26px]" aria-label="Menu">
            <span className="w-full h-[3px] bg-current rounded-full"></span>
            <span className="w-4/5 h-[3px] bg-current rounded-full"></span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-brand-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`
          fixed inset-0 bg-brand-dark z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-8
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.name} className="flex flex-col items-center group">
                <button className="flex items-center gap-2 text-white text-2xl font-indie font-medium hover:text-brand-accent transition-colors focus:outline-none">
                  {link.name}
                  <ChevronDownIcon className="w-6 h-6 group-focus:rotate-180 transition-transform" />
                </button>
                <div className="hidden group-hover:flex group-focus:flex group-focus-within:flex flex-col items-center mt-4 gap-4">
                  <a href="#" onClick={() => setIsOpen(false)} className="text-brand-muted text-xl hover:text-brand-accent transition-colors">Indoor Plants</a>
                  <a href="#" onClick={() => setIsOpen(false)} className="text-brand-muted text-xl hover:text-brand-accent transition-colors">Outdoor Plants</a>
                  <a href="#" onClick={() => setIsOpen(false)} className="text-brand-muted text-xl hover:text-brand-accent transition-colors">Succulents</a>
                </div>
              </div>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-indie font-medium hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="flex items-center gap-8 mt-4">
            <button className="text-white hover:opacity-80 transition-opacity" aria-label="Search">
              <img src="/search-interface-symbol.png" alt="Search" className="w-6 h-6 object-contain" />
            </button>
            <button className="text-white hover:opacity-80 transition-opacity relative" aria-label="Cart">
              <img src="/bag.png" alt="Cart" className="w-6 h-6 object-contain" />
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <button className="text-white hover:text-brand-accent transition-colors flex flex-col gap-2 items-end justify-center w-8 h-8" aria-label="Menu">
              <span className="w-full h-[3px] bg-current rounded-full"></span>
              <span className="w-4/5 h-[3px] bg-current rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
