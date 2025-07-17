import React, { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show floating CTA after scrolling past hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#001F3F] text-white p-4 rounded-full shadow-lg hover:bg-[#002A5C] hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none"
        >
          <ShoppingCart className="h-6 w-6 hover:animate-pulse" />
        </button>
      ) : (
        <div className="bg-[#001F3F] text-white p-4 rounded-2xl shadow-xl max-w-sm hover:scale-105 transition-all duration-300 border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">Jangan Kehabisan!</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/80 hover:text-white hover:scale-125 transition-all duration-300 hover:rotate-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-white/90 mb-4 text-sm">
            Stok terbatas! Hanya tersisa <span className="font-bold text-yellow-400 animate-pulse">23 pasang</span> dengan harga promo
          </p>
          
          <div className="flex flex-col space-y-2">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg">
              Beli Sekarang - Rp 279.000
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;