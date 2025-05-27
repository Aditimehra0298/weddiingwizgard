import React from 'react';
import { Link } from 'wouter';
import { weddingPackages } from '@/lib/constants';

const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-2">Our Wedding Packages</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Choose from our carefully crafted packages or create your own custom solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Silver Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden package-card transform transition-all">
            <div className="bg-charcoal/90 py-4 px-6 text-center">
              <h3 className="text-white font-serif text-2xl">{weddingPackages.silver.title}</h3>
              <p className="text-gold font-script text-xl">{weddingPackages.silver.subtitle}</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-3xl font-medium text-gold">₹{(weddingPackages.silver.price).toLocaleString()}</p>
                <p className="text-charcoal/70">Starting Price</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Catering
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.silver.catering.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Photography
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.silver.photography.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15 4.414A1 1 0 0116.414 6L14 8.414l.293.293a1 1 0 11-1.414 1.414L12 9.414l-.293.293a1 1 0 01-1.414-1.414L10.586 8 8.707 6.707a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Decoration
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.silver.decoration.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center space-x-2">
                <a 
                  href="#planner" 
                  className="bg-gold hover:bg-opacity-80 text-white px-4 py-2 rounded-full transition-all"
                >
                  Customize
                </a>
                <Link 
                  href="/payment" 
                  className="bg-charcoal hover:bg-charcoal/80 text-white px-4 py-2 rounded-full transition-all"
                >
                  Pay Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Gold Package */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden package-card transform transition-all scale-105 z-10 border-2 border-gold">
            <div className="bg-gold py-4 px-6 text-center relative">
              {weddingPackages.gold.popular && (
                <span className="absolute top-0 right-0 bg-charcoal text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-4 rotate-45">
                  POPULAR
                </span>
              )}
              <h3 className="text-white font-serif text-2xl">{weddingPackages.gold.title}</h3>
              <p className="text-white font-script text-xl">{weddingPackages.gold.subtitle}</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-3xl font-medium text-gold">₹{(weddingPackages.gold.price).toLocaleString()}</p>
                <p className="text-charcoal/70">Starting Price</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Catering
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.gold.catering.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Photography
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.gold.photography.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15 4.414A1 1 0 0116.414 6L14 8.414l.293.293a1 1 0 11-1.414 1.414L12 9.414l-.293.293a1 1 0 01-1.414-1.414L10.586 8 8.707 6.707a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Decoration
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.gold.decoration.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center space-x-2">
                <a 
                  href="#planner" 
                  className="bg-gold hover:bg-opacity-80 text-white px-4 py-2 rounded-full transition-all"
                >
                  Customize
                </a>
                <Link 
                  href="/payment" 
                  className="bg-charcoal hover:bg-charcoal/80 text-white px-4 py-2 rounded-full transition-all"
                >
                  Pay Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Platinum Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden package-card transform transition-all">
            <div className="bg-charcoal/90 py-4 px-6 text-center">
              <h3 className="text-white font-serif text-2xl">{weddingPackages.platinum.title}</h3>
              <p className="text-gold font-script text-xl">{weddingPackages.platinum.subtitle}</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-3xl font-medium text-gold">₹{(weddingPackages.platinum.price).toLocaleString()}</p>
                <p className="text-charcoal/70">Starting Price</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Catering
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.platinum.catering.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Photography
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.platinum.photography.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15 4.414A1 1 0 0116.414 6L14 8.414l.293.293a1 1 0 11-1.414 1.414L12 9.414l-.293.293a1 1 0 01-1.414-1.414L10.586 8 8.707 6.707a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Decoration
                </h4>
                <ul className="text-charcoal/70 text-sm space-y-2 pl-7">
                  {weddingPackages.platinum.decoration.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center space-x-2">
                <a 
                  href="#planner" 
                  className="bg-gold hover:bg-opacity-80 text-white px-4 py-2 rounded-full transition-all"
                >
                  Customize
                </a>
                <Link 
                  href="/payment" 
                  className="bg-charcoal hover:bg-charcoal/80 text-white px-4 py-2 rounded-full transition-all"
                >
                  Pay Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-charcoal/70 mb-4">Don't see what you need? We can create a custom package just for you.</p>
          <a 
            href="#contact" 
            className="inline-block bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full transition-all"
          >
            Request Custom Package
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;