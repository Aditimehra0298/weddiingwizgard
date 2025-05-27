import React from 'react';
import { services } from '@/lib/constants';

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-2">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            We offer three key services that can be customized and bundled to create your perfect day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <img 
                src={service.image} 
                alt={`${service.title} Services`} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-charcoal/70 mb-4">{service.description}</p>
                <ul className="mb-6 text-charcoal/70">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#planner" className="inline-block text-gold hover:text-charcoal transition-all">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
