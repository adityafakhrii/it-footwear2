import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Problem from './components/Problem';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
      <Hero />
      <ProductCatalog />
      <Problem />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingCTA />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  );
}

export default App;