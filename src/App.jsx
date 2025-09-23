import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import PropertiesByArea from './components/PropertiesByArea';
import PopularProperties from './components/PopularProperties';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import MortgageCalculator from './components/MortgageCalculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Agents from './components/Agents';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <PropertiesByArea />
      <PopularProperties />
      <AboutSection />
      <PartnersSection />
      <MortgageCalculator />
      <Testimonials />
      <Agents />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;