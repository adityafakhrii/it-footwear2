import React from 'react';
import { AlertTriangle, Frown, Clock, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Problem: React.FC = () => {
  const { ref: problemRef, isVisible: problemVisible } = useScrollAnimation();

  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Sepatu Cepat Rusak",
      description: "Kualitas buruk membuat sepatu tidak tahan lama dan cepat robek"
    },
    {
      icon: <Frown className="h-8 w-8 text-red-500" />,
      title: "Tidak Nyaman",
      description: "Kaki sakit dan lecet karena material yang tidak breathable"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Gaya Ketinggalan Zaman",
      description: "Desain yang itu-itu saja, tidak cocok untuk anak muda masa kini"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Harga Mahal Tanpa Nilai",
      description: "Bayar mahal tapi dapat kualitas yang mengecewakan"
    }
  ];

  return (
    <section id="problem" className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={problemRef}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${problemVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Capek dengan Sepatu yang Begini?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kamu pasti pernah merasakan frustasi ini. Saatnya beralih ke solusi yang lebih baik!
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 transition-all duration-1000 ${problemVisible ? 'animate-fade-in-up delay-300' : 'opacity-0 translate-y-10'}`}>
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group border border-gray-100 hover:border-red-200 hover:bg-gradient-to-br hover:from-white hover:to-red-50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${problemVisible ? 'animate-fade-in-up delay-700' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#001F3F] text-white rounded-xl p-8 max-w-2xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:bg-[#002A5C]">
            <h3 className="text-2xl font-bold mb-4">Sudah Waktunya Upgrade!</h3>
            <p className="text-lg mb-6">
              Jangan biarkan sepatu yang buruk menghambat langkahmu. IT-Footwear hadir dengan solusi terbaik!
            </p>
            <button className="bg-white text-[#001F3F] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-lg">
              Lihat Solusinya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;