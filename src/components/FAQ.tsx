import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah sepatu IT-Footwear benar-benar waterproof?",
      answer: "Ya! Sepatu IT-Footwear menggunakan teknologi coating khusus yang tahan air 100%. Sudah ditest di berbagai kondisi cuaca dan terbukti anti-air. Kami juga memberikan garansi jika produk tidak sesuai dengan klaim."
    },
    {
      question: "Berapa lama pengiriman ke seluruh Indonesia?",
      answer: "Untuk Jabodetabek 1-2 hari kerja, pulau Jawa 2-3 hari kerja, dan luar Jawa 3-5 hari kerja. Semua pengiriman gratis menggunakan ekspedisi terpercaya dengan tracking number yang bisa kamu pantau real-time."
    },
    {
      question: "Bagaimana cara menentukan ukuran yang tepat?",
      answer: "Kami menyediakan size chart lengkap dan panduan mengukur kaki yang akurat. Jika masih ragu, tim customer service kami siap membantu via WhatsApp. Tersedia juga program tukar ukuran gratis jika tidak pas."
    },
    {
      question: "Apakah ada garansi jika produk rusak?",
      answer: "Tentu! Kami memberikan garansi 2 tahun untuk kerusakan produksi dan 30 hari money back guarantee jika tidak puas. Proses klaim mudah dan cepat melalui customer service kami."
    },
    {
      question: "Bisa bayar cicilan atau cash on delivery?",
      answer: "Bisa! Kami terima berbagai metode pembayaran: transfer bank, e-wallet, cicilan 0% melalui kartu kredit, dan COD untuk area tertentu. Pilih yang paling nyaman untuk kamu."
    },
    {
      question: "Apakah bahan benar-benar ramah lingkungan?",
      answer: "100% eco-friendly! Dibuat dari 70% bahan daur ulang dan 30% serat bambu organik. Proses produksi zero waste dan sudah tersertifikasi ISO 14001 untuk manajemen lingkungan."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Ditanya
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Masih ada pertanyaan? Cek di sini atau hubungi customer service kami!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-102 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-[#001F3F] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#001F3F] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#001F3F] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 animate-fade-in-up">
                    <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#001F3F] text-white rounded-xl p-8 max-w-2xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:bg-[#002A5C]">
            <h3 className="text-2xl font-bold mb-4">Masih Ada Pertanyaan?</h3>
            <p className="text-lg mb-6">
              Tim customer service kami siap membantu 24/7 via WhatsApp, email, atau live chat
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg">
                💬 Chat WhatsApp
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg">
                📧 Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;