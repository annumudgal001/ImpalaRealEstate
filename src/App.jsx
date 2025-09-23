import React from 'react';
import Header from './components/Header';
import Hero from './Components/Hero/Hero.jsx';
import FeaturedProperties from './Components/FeaturedProperties/FeaturedProperties.jsx';
import PropertiesByArea from './Components/PropertiesByArea/PropertiesByArea.jsx';
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