import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm h-full ml-auto shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button 
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="space-y-6">
            <button 
              onClick={() => handleLinkClick('#hero')}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleLinkClick('#catalog')}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Katalog
            </button>
            <button 
              onClick={() => handleLinkClick('#features')}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleLinkClick('#testimonials')}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Testimoni
            </button>
            <button 
              onClick={() => handleLinkClick('#pricing')}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Harga
            </button>
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <button className="w-full bg-[#001F3F] text-white py-3 px-6 rounded-full font-medium hover:bg-[#002A5C] transition-colors">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;