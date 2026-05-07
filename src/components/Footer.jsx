import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark px-6 pt-20 pb-8 lg:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20 relative">
        
        {/* Col 1 */}
        <div className="flex flex-col items-start w-full md:w-[35%] xl:w-[30%]">
          <div className="flex items-center gap-4 z-50 px-0 py-3 mb-4 md:mb-8 w-fit">
            <img src="/plant.png" alt="logo" className='w-12 h-12 object-contain'/>
            <span className="font-sans font-black text-[32px] leading-none text-white tracking-normal">FloraVision.</span>
          </div>
          <p className="text-white/75 font-sans text-[15px] leading-relaxed max-w-sm mb-10 md:mb-16">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
          <div className="flex items-center gap-8 text-white font-sans font-bold text-xl tracking-widest relative mt-0 md:mt-auto md:absolute md:bottom-0 md:left-0">
            <a href="#" className="hover:text-brand-accent transition-colors">FB</a>
            <a href="#" className="hover:text-brand-accent transition-colors">TW</a>
            <a href="#" className="hover:text-brand-accent transition-colors">LI</a>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col items-start w-full md:w-[25%] xl:w-[20%]">
          <div>
            <h4 className="text-white font-sans font-bold text-xl tracking-wide mb-8">Quick Link's</h4>
            <ul className="flex flex-col gap-6">
              <li><a href="#" className="text-white/75 font-sans text-[17px] hover:text-white transition-colors underline underline-offset-4 decoration-white/30 decoration-1">Home</a></li>
              <li><a href="#" className="text-white/75 font-sans text-[17px] hover:text-white transition-colors underline underline-offset-4 decoration-white/30 decoration-1">Type's Of plant's</a></li>
              <li><a href="#" className="text-white/75 font-sans text-[17px] hover:text-white transition-colors underline underline-offset-4 decoration-white/30 decoration-1">Contact</a></li>
              <li><a href="#" className="text-white/75 font-sans text-[17px] hover:text-white transition-colors underline underline-offset-4 decoration-white/30 decoration-1">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-start w-full md:w-[40%] relative min-h-[100px]">
          <div className="w-full max-w-[500px]">
            <h4 className="text-white font-sans font-bold text-xl tracking-wide mb-8">For Every Update.</h4>
            <form className="relative flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent border border-white rounded-[10px] p-4 text-white/50 text-base font-sans focus:outline-none focus:border-white w-full h-[60px]"
                required
              />
              <button type="submit" className="absolute right-1 top-1 bottom-1 bg-white text-brand-dark px-6 rounded-[8px] font-sans font-bold text-sm h-[52px]">
                SUBSCRIBE
              </button>
            </form>
          </div>
          
          <div className="mt-12 w-full text-center md:text-right md:mt-24 md:bottom-0 md:right-0">
            <p className="text-white/75 font-sans text-[17px]">
              FloraVision © all right reserve
            </p>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
