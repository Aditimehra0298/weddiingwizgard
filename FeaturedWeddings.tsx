import React from 'react';
import { featuredWeddings } from '@/lib/constants';

const FeaturedWeddings: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-2">Featured Weddings</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Be inspired by some of our most memorable celebrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWeddings.map((wedding) => (
            <div 
              key={wedding.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all"
            >
              <img 
                src={wedding.image} 
                alt={`${wedding.couple}'s ${wedding.type}`} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{wedding.couple}</h3>
                <p className="text-blush mb-3 font-medium">{wedding.type}</p>
                <p className="text-charcoal/70 mb-4">{wedding.description}</p>
                <a 
                  href="#" 
                  className="text-gold hover:text-charcoal transition-all inline-flex items-center"
                >
                  View Gallery
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-block bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full transition-all"
          >
            View All Weddings
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWeddings;
