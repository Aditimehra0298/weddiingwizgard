import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWeddings from '@/components/FeaturedWeddings';
import ServicesOverview from '@/components/ServicesOverview';
import BudgetPlanner from '@/components/BudgetPlanner';
import PackagesSection from '@/components/PackagesSection';
import CustomizationFlow from '@/components/CustomizationFlow';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedWeddings />
      <ServicesOverview />
      <BudgetPlanner />
      <PackagesSection />
      <CustomizationFlow />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
