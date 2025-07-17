import React, { useState } from 'react';
import { Leaf, Shield, Zap, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features: React.FC = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "100% Eco-Friendly",
      description: "Sepatu ramah bumi, biar gaya lo makin keren tanpa nyampah!",
      details: "Dibikin dari plastik daur ulang & serat bambu, super eco! Produksi zero waste, udah certified internasional. Setiap beli, lo bantu ngurangin 5kg sampah plastik di laut. Keren kan, bro/sis?",
      image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Tahan Lama & Waterproof",
      description: "Kena hujan? Santai, sepatu lo anti air & anti bau, siap tempur kapan aja!",
      details: "Lapisan waterproof & anti-bakteri, kaki tetap fresh walau hujan badai. Sol kuat, tahan sampe 50.000 langkah (jalan-jalan terus juga aman). Garansi 2 tahun, no worry no drama!",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Teknologi Smart Comfort",
      description: "Kaki adem, nggak bau, nyaman seharian. Udah kayak sepatu sultan!",
      details: "Ventilasi 360°, memory foam empuk ngikutin bentuk kaki lo. Teknologi anti-lembab, nggak ada lagi drama kaki basah/gerah. Nyaman buat nongkrong sampe marathon Netflix.",
      image: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Desain Futuristik",
      description: "Style kekinian, siap jadi pusat perhatian di IG & TikTok!",
      details: "Desain eksklusif, 15 warna hype abis. Cocok buat hangout, olahraga, sampe kondangan. Udah dipake 10.000+ influencer, lo kapan?",
      image: "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50" ref={featuresRef}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa IT-Footwear Beda?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 keunggulan utama yang membuat IT-Footwear jadi pilihan #1 anak muda Indonesia
          </p>
        </div>

        <div className={`space-y-8 lg:space-y-12 transition-all duration-1000 ${featuresVisible ? 'animate-fade-in-up delay-300' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-white p-3 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#001F3F] transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFeature(index)}
                    className="text-[#001F3F] hover:text-[#002A5C] hover:scale-125 transition-all duration-300 hover:bg-blue-50 p-2 rounded-full"
                  >
                    {expandedFeature === index ? (
                      <ChevronUp className="h-6 w-6 animate-bounce" />
                    ) : (
                      <ChevronDown className="h-6 w-6 hover:animate-bounce" />
                    )}
                  </button>
                </div>

                {expandedFeature === index && (
                  <div className="mt-6 p-6 bg-white rounded-lg animate-fade-in-up shadow-inner border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {feature.details}
                        </p>
                        <button className="bg-[#001F3F] text-white px-6 py-2 rounded-full hover:bg-[#002A5C] hover:scale-105 active:scale-95 transition-all duration-300 font-medium hover:shadow-lg">
                          Pelajari Lebih Lanjut
                        </button>
                      </div>
                      <div className="order-first md:order-last">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="rounded-lg shadow-md w-full h-48 object-cover hover:scale-105 hover:shadow-xl transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${featuresVisible ? 'animate-fade-in-up delay-700' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-[#001F3F] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#002A5C] hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-2xl animate-pulse hover:animate-none">
            Pesan Sekarang - Gratis Ongkir!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;