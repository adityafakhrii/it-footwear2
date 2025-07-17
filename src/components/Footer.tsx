import React from 'react';
import { MapPin, Phone, Mail, Shield, Truck, RefreshCw } from 'lucide-react';

const Footer: React.FC = () => {
  const ShoeLogo = () => (
    <div className="flex items-center">
      <div className="relative">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          className="text-yellow-400"
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
    <footer className="bg-[#001F3F] text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-12 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center mb-4">
              <ShoeLogo />
              <span className="ml-2 text-xl font-bold">IT-Footwear</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sepatu premium eco-friendly untuk generasi masa depan. Nyaman, tahan lama, dan ramah lingkungan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <svg className="h-6 w-6 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <svg className="h-6 w-6 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <svg className="h-6 w-6 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <svg className="h-6 w-6 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Produk</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Sepatu Casual</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Sepatu Sport</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Sepatu Formal</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Aksesori</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Gift Card</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Bantuan</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Cara Pesan</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Panduan Ukuran</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Kebijakan Return</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Garansi</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Jl. Sudirman No. 123, Jakarta Pusat</span>
              </li>
              <li className="flex items-center hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">0812-3456-7890</span>
              </li>
              <li className="flex items-center hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@itfootwear.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default">
                <Shield className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-sm">Garansi 2 Tahun</span>
              </div>
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default">
                <Truck className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm">Gratis Ongkir</span>
              </div>
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default">
                <RefreshCw className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm">30 Hari Return</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-sm">
                © 2024 IT-Footwear. All rights reserved.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="flex space-x-4">
                <div className="bg-white rounded px-2 py-1 hover:scale-110 transition-transform duration-300 cursor-default">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1 hover:scale-110 transition-transform duration-300 cursor-default">
                  <span className="text-red-600 font-bold text-xs">MC</span>
                </div>
                <div className="bg-purple-600 rounded px-2 py-1 hover:scale-110 transition-transform duration-300 cursor-default">
                  <span className="text-white font-bold text-xs">OVO</span>
                </div>
                <div className="bg-blue-500 rounded px-2 py-1 hover:scale-110 transition-transform duration-300 cursor-default">
                  <span className="text-white font-bold text-xs">DANA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;