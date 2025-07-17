import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ShoeLogo = () => (
    <div className="flex items-center">
      <div className="relative">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          className={`${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}
          fill="currentColor"
        >
          <path d="M4 20c0-1.5 1-3 2.5-4L12 12c1-1 2.5-1 3.5 0l5.5 4c1.5 1 2.5 2.5 2.5 4v2c0 2-1.5 4-3.5 4H7.5C5.5 26 4 24 4 22v-2z"/>
          <path d="M8 16c0-1 0.5-2 1.5-2.5L14 12c0.5-0.3 1-0.3 1.5 0l4.5 1.5c1 0.5 1.5 1.5 1.5 2.5v1H8v-1z"/>
          <circle cx="10" cy="18" r="1"/>
          <circle cx="14" cy="18" r="1"/>
          <circle cx="18" cy="18" r="1"/>
        </svg>
      </div>
    </div>
  );
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-8 py-4 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <ShoeLogo />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}>
              IT-Footwear
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className={`hover:text-[#001F3F] transition-all duration-300 hover:scale-110 hover:font-semibold relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#001F3F] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#catalog" className={`hover:text-[#001F3F] transition-all duration-300 hover:scale-110 hover:font-semibold relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Katalog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#001F3F] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className={`hover:text-[#001F3F] transition-all duration-300 hover:scale-110 hover:font-semibold relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#001F3F] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className={`hover:text-[#001F3F] transition-all duration-300 hover:scale-110 hover:font-semibold relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Testimoni
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#001F3F] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className={`hover:text-[#001F3F] transition-all duration-300 hover:scale-110 hover:font-semibold relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Harga
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#001F3F] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-[#001F3F] text-white px-6 py-2 rounded-full hover:bg-[#002A5C] transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform active:scale-95">
              Beli Sekarang
            </button>
            <button 
              onClick={onMenuClick}
              className={`md:hidden hover:scale-110 transition-transform duration-300 ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;