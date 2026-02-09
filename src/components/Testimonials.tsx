import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rani & Dimas',
      wedding: 'Pernikahan di Bandung',
      date: 'Oktober 2024',
      rating: 5,
      text: 'MarrWell benar-benar mengubah cara kami mengirim undangan! Desainnya elegan, proses cepat, dan tamu-tamu kami sangat terkesan dengan undangan digitalnya. Highly recommended!',
      package: 'Premium',
    },
    {
      name: 'Ayu & Budi',
      wedding: 'Pernikahan di Jakarta',
      date: 'September 2024',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Tim MarrWell sangat responsif dan membantu kami memilih desain yang sempurna. Fitur RSVP-nya juga sangat memudahkan kami dalam mengelola daftar tamu.',
      package: 'Luxury',
    },
    {
      name: 'Sari & Eko',
      wedding: 'Pernikahan di Yogyakarta',
      date: 'Agustus 2024',
      rating: 5,
      text: 'Kualitas desain premium dengan harga yang sangat reasonable. Undangan digital kami terlihat sangat profesional dan berkelas. Tamu-tamu banyak yang menanyakan dimana kami membuatnya!',
      package: 'Premium',
    },
    {
      name: 'Maya & Rizki',
      wedding: 'Pernikahan di Surabaya',
      date: 'Juli 2024',
      rating: 5,
      text: 'Proses pembuatan sangat cepat dan mudah. Dalam hitungan jam, undangan kami sudah jadi dan siap dibagikan. Desainnya sangat cantik dan sesuai dengan tema pernikahan kami.',
      package: 'Essential',
    },
    {
      name: 'Dewi & Agung',
      wedding: 'Pernikahan di Bali',
      date: 'Juni 2024',
      rating: 5,
      text: 'Tim MarrWell sangat profesional dan detail. Mereka membantu kami dari awal sampai akhir. Hasilnya melampaui ekspektasi! Undangan digitalnya benar-benar premium dan elegan.',
      package: 'Luxury',
    },
    {
      name: 'Lina & Hendra',
      wedding: 'Pernikahan di Medan',
      date: 'Mei 2024',
      rating: 5,
      text: 'Sangat puas dengan layanan MarrWell! Fitur-fiturnya lengkap, desainnya mewah, dan yang paling penting ramah di kantong. Terima kasih telah membuat undangan pernikahan kami sempurna!',
      package: 'Premium',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="testimoni" className="py-24 bg-gradient-to-b from-sage-soft/20 to-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L50 100 M0 50 L100 50" stroke="#0F3D2E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <span className="text-gold-champagne font-medium text-sm uppercase tracking-wider mb-2 block">
              Testimoni
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Kisah Pasangan Bahagia
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-brown-mocha mt-6 max-w-2xl mx-auto leading-relaxed">
            Dengarkan pengalaman pasangan yang telah mempercayai kami untuk momen istimewa mereka
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-soft/30 hover:border-gold-champagne/50 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-full h-full text-gold-champagne" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-champagne fill-gold-champagne" />
                  ))}
                </div>

                <p className="text-brown-mocha leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-sage-soft/30 pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-semibold text-emerald-deep text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-brown-mocha/70 text-sm mb-1">{testimonial.wedding}</p>
                    <p className="text-brown-mocha/50 text-xs">{testimonial.date}</p>
                  </div>

                  <div className="bg-emerald-deep/10 px-3 py-1 rounded-full">
                    <span className="text-emerald-deep text-xs font-semibold">
                      {testimonial.package}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-deep via-gold-champagne to-emerald-deep transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center bg-emerald-deep/5 border border-emerald-deep/20 rounded-2xl px-12 py-8 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold-champagne fill-gold-champagne" />
              ))}
            </div>
            <div className="text-4xl font-serif font-bold text-emerald-deep mb-2">4.9/5.0</div>
            <p className="text-brown-mocha">Berdasarkan 500+ review dari pasangan bahagia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
