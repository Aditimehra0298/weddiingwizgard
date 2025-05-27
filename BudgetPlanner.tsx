import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';

const BudgetPlanner: React.FC = () => {
  const [budget, setBudget] = useState(300000);
  const [cateringPercent, setCateringPercent] = useState(40);
  const [photographyPercent, setPhotographyPercent] = useState(30);
  const [decorationPercent, setDecorationPercent] = useState(30);
  
  const [cateringAmount, setCateringAmount] = useState(0);
  const [photographyAmount, setPhotographyAmount] = useState(0);
  const [decorationAmount, setDecorationAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  
  // Calculate the allocation based on percentages and budget
  useEffect(() => {
    // Ensure percentages add up to 100%
    const totalPercent = cateringPercent + photographyPercent + decorationPercent;
    const adjustmentFactor = 100 / totalPercent;
    
    const adjustedCatering = Math.round(cateringPercent * adjustmentFactor);
    const adjustedPhoto = Math.round(photographyPercent * adjustmentFactor);
    const adjustedDecor = 100 - adjustedCatering - adjustedPhoto;
    
    // Calculate monetary values
    const cateringValue = Math.round((budget * adjustedCatering) / 100);
    const photoValue = Math.round((budget * adjustedPhoto) / 100);
    const decorValue = Math.round((budget * adjustedDecor) / 100);
    
    setCateringAmount(cateringValue);
    setPhotographyAmount(photoValue);
    setDecorationAmount(decorValue);
    
    // Apply bundle discount (10%)
    const discount = Math.round(budget * 0.1);
    setFinalPrice(budget - discount);
  }, [budget, cateringPercent, photographyPercent, decorationPercent]);
  
  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };
  
  return (
    <section id="planner" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-2">Wedding Budget Planner</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Customize your wedding package based on your budget. Drag the slider to see what's possible.
          </p>
        </div>
        
        <div className="bg-ivory rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <label htmlFor="budget" className="block text-lg font-medium text-charcoal mb-2">
              Your Budget
            </label>
            <Slider 
              id="budget"
              min={50000}
              max={1000000}
              step={10000}
              value={[budget]}
              onValueChange={(value) => setBudget(value[0])}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-charcoal/70">₹50,000</span>
              <span className="text-xl font-medium text-gold">{formatCurrency(budget)}</span>
              <span className="text-charcoal/70">₹10,00,000+</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Catering Allocation */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-charcoal">Catering</h3>
                <span className="text-gold">{cateringPercent}%</span>
              </div>
              <Slider
                min={20}
                max={60}
                step={5}
                value={[cateringPercent]}
                onValueChange={(value) => setCateringPercent(value[0])}
                className="w-full mb-2"
              />
              <p className="text-charcoal/70 text-right">{formatCurrency(cateringAmount)}</p>
            </div>
            
            {/* Photography Allocation */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-charcoal">Photography</h3>
                <span className="text-gold">{photographyPercent}%</span>
              </div>
              <Slider
                min={20}
                max={60}
                step={5}
                value={[photographyPercent]}
                onValueChange={(value) => setPhotographyPercent(value[0])}
                className="w-full mb-2"
              />
              <p className="text-charcoal/70 text-right">{formatCurrency(photographyAmount)}</p>
            </div>
            
            {/* Decoration Allocation */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-charcoal">Decoration</h3>
                <span className="text-gold">{decorationPercent}%</span>
              </div>
              <Slider
                min={20}
                max={60}
                step={5}
                value={[decorationPercent]}
                onValueChange={(value) => setDecorationPercent(value[0])}
                className="w-full mb-2"
              />
              <p className="text-charcoal/70 text-right">{formatCurrency(decorationAmount)}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="font-serif text-xl mb-4">Recommended Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="border border-blush rounded p-3">
                <h4 className="font-medium mb-1">Catering</h4>
                <p className="text-sm text-charcoal/70">
                  {budget > 500000 
                    ? "Luxury Gourmet Menu with Premium Beverages" 
                    : budget > 250000 
                      ? "Traditional & Continental Menu with Premium Beverages"
                      : "Traditional Menu with Standard Beverages"}
                </p>
              </div>
              <div className="border border-blush rounded p-3">
                <h4 className="font-medium mb-1">Photography</h4>
                <p className="text-sm text-charcoal/70">
                  {budget > 500000 
                    ? "Full Day Coverage with Drone Shots & Cinematic Film" 
                    : budget > 250000 
                      ? "Full Day Coverage with Drone Shots & Highlight Video"
                      : "Standard Coverage with Digital Photos"}
                </p>
              </div>
              <div className="border border-blush rounded p-3">
                <h4 className="font-medium mb-1">Decoration</h4>
                <p className="text-sm text-charcoal/70">
                  {budget > 500000 
                    ? "Luxury Designer Floral Arrangements & Custom Lighting" 
                    : budget > 250000 
                      ? "Elegant Floral Arrangements with Accent Lighting"
                      : "Basic Floral Arrangements with Standard Lighting"}
                </p>
              </div>
            </div>
            <p className="text-charcoal/70 text-sm mb-4">
              This custom package is tailored to your budget allocation and provides excellent value.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-charcoal font-medium">Bundle Discount:</span>
              <span className="text-green-600">-10% ({formatCurrency(Math.round(budget * 0.1))})</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-charcoal font-medium">Final Price:</span>
              <span className="text-gold font-medium text-lg">{formatCurrency(finalPrice)}</span>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#packages" 
              className="bg-gold hover:bg-opacity-80 text-white px-8 py-3 rounded-full transition-all inline-block"
            >
              Explore Package Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetPlanner;
