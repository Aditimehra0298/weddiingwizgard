import React, { useState } from 'react';
import { Link } from 'wouter';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-3xl text-gold font-script">Eternal Unions</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="nav-item active text-charcoal hover:text-gold transition-all">Home</a>
          <a href="#packages" className="nav-item text-charcoal hover:text-gold transition-all">Packages</a>
          <a href="#planner" className="nav-item text-charcoal hover:text-gold transition-all">Budget Planner</a>
          <a href="#vendors" className="nav-item text-charcoal hover:text-gold transition-all">Vendors</a>
          <a href="#testimonials" className="nav-item text-charcoal hover:text-gold transition-all">Testimonials</a>
          <a href="#contact" className="nav-item text-charcoal hover:text-gold transition-all">Contact</a>
          <Link href="/payment" className="nav-item text-charcoal hover:text-gold transition-all">Payment</Link>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-charcoal focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex space-x-3">
          <a href="#planner" className="bg-gold hover:bg-opacity-80 text-white px-6 py-2 rounded-full transition-all">
            Plan My Wedding
          </a>
          <Link href="/payment" className="bg-charcoal hover:bg-charcoal/80 text-white px-6 py-2 rounded-full transition-all">
            Make Payment
          </Link>
        </div>
      </div>
      
      <div className={`px-4 py-3 bg-white md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3">
          <a href="#home" className="text-charcoal hover:text-gold">Home</a>
          <a href="#packages" className="text-charcoal hover:text-gold">Packages</a>
          <a href="#planner" className="text-charcoal hover:text-gold">Budget Planner</a>
          <a href="#vendors" className="text-charcoal hover:text-gold">Vendors</a>
          <a href="#testimonials" className="text-charcoal hover:text-gold">Testimonials</a>
          <a href="#contact" className="text-charcoal hover:text-gold">Contact</a>
          <Link href="/payment" className="text-charcoal hover:text-gold">Payment</Link>
          <a href="#planner" className="bg-gold hover:bg-opacity-80 text-white px-4 py-2 rounded-full text-center transition-all">
            Plan My Wedding
          </a>
          <Link href="/payment" className="bg-charcoal hover:bg-charcoal/80 text-white px-4 py-2 rounded-full text-center transition-all">
            Make Payment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
