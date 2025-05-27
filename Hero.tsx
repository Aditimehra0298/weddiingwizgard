import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://pixabay.com/get/gdac750b9b7220d56322fcd7e12fd9d8cdd90e97782eceaf03ddb805736e0dd8cd35b77101cc45051fb369421d5b1d1ba9b729e4a6825d6a7bbe6be778ae45cff_1280.jpg')" 
        }}
      >
        <div className="hero-gradient absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl text-white font-serif mb-4">Your Perfect Day</h1>
        <p className="text-3xl md:text-4xl text-white font-script mb-8">Begins with perfect planning</p>
        <p className="text-lg text-white max-w-2xl mb-10">
          We bring your wedding dreams to life with our all-inclusive packages for catering, photography, and decoration — tailored to your unique vision and budget.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#planner" 
            className="bg-gold hover:bg-opacity-80 text-white px-8 py-3 rounded-full text-lg transition-all"
          >
            Plan My Wedding
          </a>
          <a 
            href="#packages" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-3 rounded-full text-lg transition-all"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
