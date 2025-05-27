import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/lib/constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const updateSlider = () => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth;
      const slider = document.getElementById('testimonial-slider');
      if (slider) {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    }
  };
  
  useEffect(() => {
    updateSlider();
    
    // Handle window resize
    window.addEventListener('resize', updateSlider);
    return () => {
      window.removeEventListener('resize', updateSlider);
    };
  }, [currentIndex]);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-2">Happy Couples</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            See what our clients have to say about their special day.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden" ref={containerRef} id="testimonial-container">
            <div className="flex transition-all duration-300" id="testimonial-slider">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 relative">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div className="text-center mt-6 mb-8">
                      <p className="text-charcoal/80 italic">"{testimonial.text}"</p>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.couple} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-charcoal">{testimonial.couple}</h4>
                        <p className="text-blush text-sm">{testimonial.package}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-gold hover:text-charcoal transition-all"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-gold hover:text-charcoal transition-all"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gold' : 'bg-blush/30'}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
