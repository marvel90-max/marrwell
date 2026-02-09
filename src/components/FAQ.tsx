import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apa itu undangan digital MarrWell?',
      answer: 'MarrWell adalah layanan undangan pernikahan digital premium dengan desain elegan dan fitur lengkap. Undangan dapat diakses melalui link yang dibagikan via WhatsApp, email, atau media sosial tanpa perlu instalasi aplikasi.',
    },
    {
      question: 'Berapa lama proses pembuatan undangan?',
      answer: 'Proses pembuatan undangan sangat cepat! Setelah Anda melengkapi data dan memilih desain, undangan Anda akan siap dalam 1-3 jam kerja. Untuk paket Luxury dengan desain custom, prosesnya memakan waktu 1-2 hari.',
    },
    {
      question: 'Apakah bisa mengubah desain setelah jadi?',
      answer: 'Tentu saja! Setiap paket memiliki kuota revisi. Paket Essential mendapat 2x revisi, Premium mendapat revisi unlimited, dan Luxury juga revisi unlimited dengan dedicated team. Anda dapat mengubah teks, foto, warna, dan elemen desain lainnya.',
    },
    {
      question: 'Bagaimana cara membagikan undangan ke tamu?',
      answer: 'Setelah undangan jadi, Anda akan mendapatkan link unik yang dapat dibagikan melalui WhatsApp, email, Instagram, atau platform digital lainnya. Kami juga menyediakan template pesan siap pakai untuk memudahkan Anda.',
    },
    {
      question: 'Apakah ada batasan jumlah tamu yang bisa mengakses?',
      answer: 'Tidak ada batasan! Undangan dapat diakses oleh unlimited pengunjung. Yang dibatasi hanya jumlah RSVP (konfirmasi kehadiran): Paket Essential max 100 tamu, sedangkan Premium dan Luxury unlimited.',
    },
    {
      question: 'Apakah undangan bisa diakses tanpa internet?',
      answer: 'Undangan digital memerlukan koneksi internet untuk diakses karena berbasis web. Namun, kami mengoptimalkan loading speed sehingga undangan dapat dibuka dengan cepat bahkan dengan koneksi internet yang lambat.',
    },
    {
      question: 'Bagaimana dengan keamanan data pribadi?',
      answer: 'Keamanan data adalah prioritas kami. Semua data Anda disimpan dengan enkripsi dan hanya dapat diakses oleh Anda. Kami tidak membagikan data pribadi Anda ke pihak ketiga manapun.',
    },
    {
      question: 'Apakah bisa menambah fitur di tengah jalan?',
      answer: 'Ya, Anda dapat upgrade paket atau menambah fitur tambahan kapan saja. Hubungi tim customer service kami untuk informasi lebih lanjut mengenai upgrade paket dan harga tambahan fitur.',
    },
    {
      question: 'Berapa lama undangan aktif?',
      answer: 'Masa aktif undangan tergantung paket: Essential 3 bulan, Premium 6 bulan, dan Luxury 12 bulan. Setelah masa aktif berakhir, Anda dapat memperpanjang dengan biaya yang sangat terjangkau.',
    },
    {
      question: 'Apakah ada garansi jika ada kendala teknis?',
      answer: 'Ya, kami memberikan garansi 100% uptime selama masa aktif. Jika terjadi kendala teknis dari sisi kami, tim support kami siap membantu 24/7 dan akan segera memperbaiki masalah tersebut.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-deep rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-champagne rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <span className="text-gold-champagne font-medium text-sm uppercase tracking-wider mb-2 block">
              Pertanyaan Umum
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-brown-mocha mt-6 max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sage-soft/30 hover:border-gold-champagne/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-sage-soft/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-deep/10 rounded-full flex items-center justify-center mt-1">
                    <HelpCircle className="w-5 h-5 text-emerald-deep" />
                  </div>
                  <span className="font-serif text-lg font-semibold text-emerald-deep pr-4">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 w-8 h-8 bg-gold-champagne/20 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gold-champagne" />
                  ) : (
                    <Plus className="w-5 h-5 text-gold-champagne" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pl-[72px]">
                      <p className="text-brown-mocha leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-emerald-deep to-emerald-deep/90 rounded-2xl px-12 py-8 text-ivory-warm">
            <h3 className="text-2xl font-serif font-semibold mb-2">Masih ada pertanyaan?</h3>
            <p className="text-sage-soft mb-6">Tim kami siap membantu Anda 24/7</p>
            <button className="bg-gold-champagne text-emerald-deep px-8 py-3 rounded-full font-semibold hover:bg-gold-champagne/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Hubungi Customer Service
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
