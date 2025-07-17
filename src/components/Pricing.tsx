import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Harga yang Bikin Hati Senang
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kualitas premium dengan harga yang ramah di kantong mahasiswa
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl p-4 text-center">
            <h3 className="text-white text-2xl font-bold">⚡ PROMO FLASH SALE ⚡</h3>
            <p className="text-white/90">Diskon 30% - Berakhir Hari Ini!</p>
          </div>

          <div className="bg-gray-50 rounded-b-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Harga Kompetitor</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sepatu Brand A</span>
                    <span className="font-bold text-red-500">Rp 450.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sepatu Brand B</span>
                    <span className="font-bold text-red-500">Rp 520.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sepatu Brand C</span>
                    <span className="font-bold text-red-500">Rp 380.000</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <h5 className="font-bold text-red-700 mb-2">Yang Tidak Kamu Dapat:</h5>
                  <ul className="space-y-1 text-red-600">
                    <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Garansi terbatas</li>
                    <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Kualitas standar</li>
                    <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Tidak eco-friendly</li>
                    <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Desain mainstream</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#001F3F] text-white rounded-xl p-6 shadow-xl relative hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-[#002A5C]">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                  BEST DEAL!
                </div>
                
                <h4 className="text-xl font-bold mb-4">IT-Footwear Premium</h4>
                
                <div className="text-center mb-6">
                  <div className="text-gray-300 line-through text-lg">Rp 399.000</div>
                  <div className="text-3xl font-bold text-yellow-400">Rp 279.000</div>
                  <div className="text-sm text-gray-300">Hemat Rp 120.000!</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span>Garansi 2 tahun</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span>100% eco-friendly</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span>Waterproof & anti-bakteri</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span>Desain eksklusif</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span>Gratis ongkir seluruh Indonesia</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span>30 hari money back guarantee</span>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-black py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors">
                  Pesan Sekarang - Bayar Nanti!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">💰 Jaminan Harga Terbaik</h3>
            <p className="text-green-700 mb-6">
              Jika kamu menemukan harga yang lebih murah dengan kualitas yang sama, kami akan refund 2x lipat selisihnya!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-full text-green-800 font-medium">
                💳 Cicilan 0%
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-green-800 font-medium">
                🚚 Gratis Ongkir
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-green-800 font-medium">
                ↩️ 30 Hari Garansi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;