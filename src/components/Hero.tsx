import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('problem');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#001F3F] via-[#002A5C] to-[#001F3F] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/3 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/2 rounded-full animate-ping delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-20 pb-8 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center w-full max-w-7xl mx-auto">
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
              Melangkah Keren,<br />
              <span className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Harga Santai, Style Maksimal!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-300 hover:text-white transition-colors duration-300">
              Sepatu kekinian, eco-friendly, siap nemenin lo tampil beda & makin pede. Upgrade gaya lo bareng teknologi terbaru!
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto md:mx-0 animate-fade-in-up delay-500 hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-yellow-400/50 hover:shadow-2xl">
              <div className="text-3xl font-bold text-yellow-400 mb-2">DISKON 30%</div>
              <div className="text-sm text-gray-300 mb-4">Penawaran terbatas berakhir dalam:</div>
              
              <div className="flex justify-center space-x-4 mb-4">
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 min-w-[60px] hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default">
                    <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">JAM</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 min-w-[60px] hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default">
                    <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">MENIT</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 min-w-[60px] hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default animate-pulse">
                    <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">DETIK</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-white text-[#001F3F] px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-2xl animate-fade-in-up delay-700 group">
              <span className="group-hover:animate-pulse">
              Beli Sekarang - Hemat 30%
              </span>
            </button>

            <div className="text-center mt-8 md:hidden">
              <button 
                onClick={scrollToNext}
                className="animate-bounce text-white hover:text-yellow-400 transition-colors duration-300 hover:scale-125"
              >
                <ArrowDown className="h-8 w-8 mx-auto" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center animate-fade-in-right delay-1000">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IT-Footwear Premium Shoes"
                className="rounded-2xl shadow-2xl max-w-sm md:max-w-md w-full hover:scale-105 transition-transform duration-500 hover:shadow-3xl group-hover:rotate-2"
                loading="lazy"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce hover:animate-pulse hover:scale-110 transition-transform duration-300 cursor-default">
                NEW!
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-yellow-400/20 rounded-full animate-float delay-1000"></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-white/5 rounded-full animate-float delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;