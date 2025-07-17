import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart, ThumbsUp, MessageCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [likedTestimonials, setLikedTestimonials] = useState<number[]>([]);

  const testimonials = [
    {
      name: "Rina Sari",
      age: "19 tahun",
      location: "Jakarta",
      rating: 5,
      verified: true,
      likes: 234,
      helpful: 189,
      text: "Gila sih ini sepatu! Udah 6 bulan pakai setiap hari, masih kayak baru. Nyaman banget dan instagramable. Temen-temen pada nanya belinya dimana 😍",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      product: "IT-Runner Pro"
    },
    {
      name: "Dika Pratama",
      age: "22 tahun", 
      location: "Bandung",
      rating: 5,
      verified: true,
      likes: 198,
      helpful: 156,
      text: "Sebagai mahasiswa yang sering jalan kaki, sepatu ini life saver banget. Tahan air, nyaman, dan gaya. Worth it banget dengan harganya!",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      product: "IT-Casual Elite"
    },
    {
      name: "Sarah Amanda",
      age: "20 tahun",
      location: "Surabaya", 
      rating: 5,
      verified: true,
      likes: 267,
      helpful: 203,
      text: "Awalnya ragu beli online, tapi setelah sampai wow banget! Kualitas premium, packaging rapih, dan customer service responsif. Recommended!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      product: "IT-Street Style"
    },
    {
      name: "Fajar Ramadhan",
      age: "21 tahun",
      location: "Yogyakarta",
      rating: 5,
      verified: true,
      likes: 312,
      helpful: 278,
      text: "Udah beli 3 pasang buat koleksi. Setiap model keren-keren dan cocok buat berbagai acara. Kualitas internasional dengan harga lokal!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      product: "IT-Formal Classic"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const toggleLike = (index: number) => {
    setLikedTestimonials(prev => 
      prev.includes(index) 
        ? prev.filter(id => id !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka yang Sudah Pakai
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lebih dari 10,000+ customer puas dengan IT-Footwear
          </p>
          
          {/* Auto-play toggle */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <span className="text-sm text-gray-600">Auto-play:</span>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAutoPlay ? 'bg-[#001F3F]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAutoPlay ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-[#001F3F]/10">
              <Quote className="h-16 w-16" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {testimonials[currentTestimonial].verified && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-lg">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center mb-4 space-x-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({testimonials[currentTestimonial].rating}.0)
                  </span>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                    {testimonials[currentTestimonial].verified && (
                      <span className="ml-2 text-green-500 text-sm">✓ Verified</span>
                    )}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-sm text-[#001F3F] font-medium">
                    Produk: {testimonials[currentTestimonial].product}
                  </p>
                </div>
                
                {/* Interaction buttons */}
                <div className="flex justify-center md:justify-start items-center space-x-6">
                  <button
                    onClick={() => toggleLike(currentTestimonial)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                      likedTestimonials.includes(currentTestimonial)
                        ? 'bg-red-50 text-red-500 border border-red-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-500 border border-gray-200'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${likedTestimonials.includes(currentTestimonial) ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">
                      {testimonials[currentTestimonial].likes + (likedTestimonials.includes(currentTestimonial) ? 1 : 0)}
                    </span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{testimonials[currentTestimonial].helpful}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-500 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-[#001F3F] text-white p-3 rounded-full hover:bg-[#002A5C] transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              onMouseEnter={() => setIsAutoPlay(false)}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial 
                      ? 'bg-[#001F3F] scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onMouseEnter={() => setIsAutoPlay(false)}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-[#001F3F] text-white p-3 rounded-full hover:bg-[#002A5C] transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              onMouseEnter={() => setIsAutoPlay(false)}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mini testimonials preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  index === currentTestimonial
                    ? 'bg-[#001F3F] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto mb-2"
                  loading="lazy"
                />
                <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                <p className="text-xs opacity-80">{testimonial.location}</p>
                <div className="flex justify-center mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#001F3F] text-white rounded-xl p-8 max-w-2xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:bg-[#002A5C]">
            <h3 className="text-2xl font-bold mb-4">Jadi Bagian dari Komunitas!</h3>
            <p className="text-lg mb-6">
              Bergabung dengan ribuan anak muda Indonesia yang sudah merasakan kenyamanan IT-Footwear
            </p>
            <button className="bg-white text-[#001F3F] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg">
              Pesan Sekarang Juga!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;