import React, { useState } from 'react';
import { Link } from 'wouter';
import { cateringOptions, photographyOptions, decorationOptions } from '@/lib/constants';

type ServiceOption = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  popular?: boolean;
  trending?: boolean;
  badge?: string;
  badgeColor?: string;
};

const CustomizationFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCatering, setSelectedCatering] = useState<string | null>(null);
  const [selectedPhotography, setSelectedPhotography] = useState<string | null>(null);
  const [selectedDecoration, setSelectedDecoration] = useState<string | null>(null);
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderServiceOption = (option: ServiceOption, isSelected: boolean, onClick: () => void) => (
    <div 
      key={option.id}
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition-all ${isSelected ? 'border-2 border-gold' : ''}`}
      onClick={onClick}
    >
      <img 
        src={option.image} 
        alt={option.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="font-medium text-charcoal mb-2">{option.title}</h4>
        <p className="text-charcoal/70 text-sm mb-4">{option.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gold font-medium">Starting from ₹{option.price.toLocaleString()}</span>
          {(option.popular || option.trending) && (
            <span className={`text-xs px-3 py-1 bg-${option.badgeColor}/10 text-${option.badgeColor} rounded-full`}>
              {option.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-2">Customize Your Experience</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Follow our simple steps to create your perfect wedding package.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Step Indicators */}
          <div className="flex justify-between items-center mb-10 relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-blush/30"></div>
            <div 
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gold" 
              style={{ width: `${(currentStep - 1) * 50}%` }}
            ></div>
            
            <div className={`w-12 h-12 rounded-full ${currentStep >= 1 ? 'bg-gold text-white' : 'bg-blush/30 text-charcoal'} flex items-center justify-center font-medium z-10`}>
              1
            </div>
            <div className={`w-12 h-12 rounded-full ${currentStep >= 2 ? 'bg-gold text-white' : 'bg-blush/30 text-charcoal'} flex items-center justify-center font-medium z-10`}>
              2
            </div>
            <div className={`w-12 h-12 rounded-full ${currentStep >= 3 ? 'bg-gold text-white' : 'bg-blush/30 text-charcoal'} flex items-center justify-center font-medium z-10`}>
              3
            </div>
          </div>
          
          {/* Step Content */}
          <div className="bg-ivory rounded-lg shadow-lg p-8">
            {/* Step 1: Catering */}
            {currentStep === 1 && (
              <div id="step-1">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Step 1: Choose Your Catering Theme</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {cateringOptions.map((option) => renderServiceOption(
                    option,
                    selectedCatering === option.id,
                    () => setSelectedCatering(option.id)
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div></div>
                  <button 
                    onClick={nextStep}
                    className="bg-gold hover:bg-opacity-80 text-white px-6 py-2 rounded-full transition-all flex items-center"
                  >
                    Next: Photography
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Photography */}
            {currentStep === 2 && (
              <div id="step-2">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Step 2: Choose Your Photography Style</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {photographyOptions.map((option) => renderServiceOption(
                    option,
                    selectedPhotography === option.id,
                    () => setSelectedPhotography(option.id)
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    className="bg-white border border-gold text-gold hover:bg-gold hover:text-white px-6 py-2 rounded-full transition-all flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back: Catering
                  </button>
                  <button 
                    onClick={nextStep}
                    className="bg-gold hover:bg-opacity-80 text-white px-6 py-2 rounded-full transition-all flex items-center"
                  >
                    Next: Decoration
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Decoration */}
            {currentStep === 3 && (
              <div id="step-3">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Step 3: Choose Your Decoration Style</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {decorationOptions.map((option) => renderServiceOption(
                    option,
                    selectedDecoration === option.id,
                    () => setSelectedDecoration(option.id)
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    className="bg-white border border-gold text-gold hover:bg-gold hover:text-white px-6 py-2 rounded-full transition-all flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back: Photography
                  </button>
                  <div className="flex space-x-3">
                    <a 
                      href="#contact"
                      className="bg-gold hover:bg-opacity-80 text-white px-6 py-2 rounded-full transition-all"
                    >
                      Complete Your Package
                    </a>
                    <Link 
                      href="/payment" 
                      className="bg-charcoal hover:bg-charcoal/80 text-white px-6 py-2 rounded-full transition-all"
                    >
                      Pay Now
                    </Link>
                  </div>
                </div>
                
                {/* Package Summary */}
                {selectedCatering && selectedPhotography && selectedDecoration && (
                  <div className="mt-8 p-4 bg-white rounded-lg border border-gold">
                    <h4 className="font-serif text-xl text-charcoal mb-3">Your Custom Package</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="font-medium">Catering: {cateringOptions.find(o => o.id === selectedCatering)?.title}</p>
                      </div>
                      <div>
                        <p className="font-medium">Photography: {photographyOptions.find(o => o.id === selectedPhotography)?.title}</p>
                      </div>
                      <div>
                        <p className="font-medium">Decoration: {decorationOptions.find(o => o.id === selectedDecoration)?.title}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <span>Estimated Price:</span>
                      <span className="text-gold font-medium">
                        ₹{(
                          (cateringOptions.find(o => o.id === selectedCatering)?.price || 0) +
                          (photographyOptions.find(o => o.id === selectedPhotography)?.price || 0) +
                          (decorationOptions.find(o => o.id === selectedDecoration)?.price || 0)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationFlow;
