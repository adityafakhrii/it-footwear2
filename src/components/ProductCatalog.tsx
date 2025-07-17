import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const { ref: catalogRef, isVisible: catalogVisible } = useScrollAnimation();

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'casual', name: 'Casual' },
    { id: 'sport', name: 'Sport' },
    { id: 'formal', name: 'Formal' }
  ];

  const products = [
    {
      id: 1,
      name: "IT-Runner Pro",
      category: "sport",
      originalPrice: 599000,
      salePrice: 299000,
      discount: 50,
      rating: 4.9,
      reviews: 234,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4'],
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: "IT-Casual Elite",
      category: "casual",
      originalPrice: 499000,
      salePrice: 249000,
      discount: 50,
      rating: 4.8,
      reviews: 189,
      image: "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg?auto=compress&cs=tinysrgb&w=400",
      colors: ['#8B4513', '#000000', '#FFFFFF'],
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: "IT-Formal Classic",
      category: "formal",
      originalPrice: 699000,
      salePrice: 349000,
      discount: 50,
      rating: 4.7,
      reviews: 156,
      image: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=400",
      colors: ['#000000', '#8B4513'],
      isNew: false,
      isBestseller: false
    },
    {
      id: 4,
      name: "IT-Street Style",
      category: "casual",
      originalPrice: 549000,
      salePrice: 274000,
      discount: 50,
      rating: 4.9,
      reviews: 298,
      image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400",
      colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#000000'],
      isNew: true,
      isBestseller: true
    },
    {
      id: 5,
      name: "IT-Eco Walker",
      category: "casual",
      originalPrice: 459000,
      salePrice: 229000,
      discount: 50,
      rating: 4.8,
      reviews: 167,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      colors: ['#228B22', '#000000', '#FFFFFF'],
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: "IT-Sport Max",
      category: "sport",
      originalPrice: 649000,
      salePrice: 324000,
      discount: 50,
      rating: 4.9,
      reviews: 312,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      colors: ['#FF6B6B', '#000000', '#FFFFFF', '#4ECDC4'],
      isNew: false,
      isBestseller: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="catalog" className="py-16 bg-gradient-to-b from-white to-gray-50" ref={catalogRef}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${catalogVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Katalog Produk Terbaru
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Koleksi lengkap sepatu premium dengan diskon hingga 50% untuk waktu terbatas!
          </p>
        </div>

        {/* Flash Sale Banner */}
        <div className={`bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-2xl p-6 mb-8 text-center text-white transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${catalogVisible ? 'animate-fade-in-up delay-300' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">⚡ FLASH SALE 50% OFF ⚡</h3>
          <p className="text-lg mb-4">Semua produk diskon 50%! Stok terbatas, buruan pesan!</p>
          <div className="flex justify-center space-x-4 text-sm">
            <div className="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default">🔥 Terlaris</div>
            <div className="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default">🚚 Gratis Ongkir</div>
            <div className="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default">💳 Cicilan 0%</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${catalogVisible ? 'animate-fade-in-up delay-500' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                selectedCategory === category.id
                  ? 'bg-[#001F3F] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 transition-all duration-1000 ${catalogVisible ? 'animate-fade-in-up delay-700' : 'opacity-0 translate-y-10'}`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 hover:-translate-y-2 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse hover:animate-bounce transition-all duration-300">
                      NEW
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold hover:scale-110 transition-transform duration-300">
                      TERLARIS
                    </span>
                  )}
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold hover:scale-110 hover:bg-red-600 transition-all duration-300">
                    -{product.discount}%
                  </span>
                </div>

                {/* Wishlist Button */}
                <button 
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 group/heart"
                >
                  <Heart className={`h-5 w-5 transition-all duration-300 ${
                    likedProducts.includes(product.id) 
                      ? 'text-red-500 fill-current scale-110' 
                      : 'text-gray-600 group-hover/heart:text-red-500 group-hover/heart:scale-110'
                  }`} />
                </button>
                
                {/* Quick View Button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white text-[#001F3F] px-6 py-2 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform scale-90 hover:scale-100">
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#001F3F] transition-colors duration-300 cursor-pointer">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" />
                    <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews} ulasan)</span>
                </div>

                {/* Colors */}
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-600 mr-2">Warna:</span>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-[#001F3F] hover:scale-125 transition-all duration-300 cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#001F3F] hover:scale-105 transition-transform duration-300">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-medium hover:text-green-700 transition-colors duration-300">
                    Hemat {formatPrice(product.originalPrice - product.salePrice)}!
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#001F3F] text-white py-3 px-6 rounded-full font-bold hover:bg-[#002A5C] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 group/btn hover:shadow-lg">
                  <ShoppingCart className="h-5 w-5 group-hover/btn:animate-bounce" />
                  <span>Beli Sekarang</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 ${catalogVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#001F3F] text-white rounded-2xl p-8 max-w-2xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:bg-[#002A5C]">
            <h3 className="text-2xl font-bold mb-4">Jangan Sampai Kehabisan!</h3>
            <p className="text-lg mb-6">
              Flash sale 50% OFF hanya berlaku hari ini. Stok terbatas untuk setiap model!
            </p>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-lg">
              Lihat Semua Produk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;