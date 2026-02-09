import { motion } from 'framer-motion';
import { MessageCircle, Heart } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = '6281234567890';
  const whatsappMessage = encodeURIComponent('Halo MarrWell! Saya tertarik untuk membuat undangan pernikahan premium. Bisa konsultasi lebih lanjut?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-charcoal to-emerald-deep/90"></div>

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#D6B37C" />
              <circle cx="40" cy="40" r="1.5" fill="#D6B37C" />
              <circle cx="70" cy="10" r="1" fill="#D6B37C" />
              <circle cx="10" cy="70" r="1" fill="#D6B37C" />
              <circle cx="70" cy="70" r="1.5" fill="#D6B37C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl opacity-20 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-soft/10 rounded-full blur-3xl opacity-20 -ml-48"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
            className="inline-block mb-6"
          >
            <Heart className="w-12 h-12 text-gold-champagne" fill="currentColor" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-ivory-warm mb-6 leading-tight">
            Wujudkan Undangan Pernikahan
            <br />
            <span className="text-gold-champagne">Berkelas Bersama MarrWell</span>
          </h2>

          <p className="text-lg md:text-xl text-sage-soft mb-12 max-w-2xl mx-auto leading-relaxed">
            Dari konsep hingga peluncuran, kami siap menciptakan undangan digital yang sempurna untuk hari spesial Anda
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gold-champagne text-emerald-deep px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold-champagne/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Hubungi Kami</span>
            </a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-ivory-warm/80"
            >
              <p className="text-sm">Respons cepat dalam 2 jam kerja</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 pt-8 border-t border-gold-champagne/30 space-y-3"
          >
            <p className="text-ivory-warm/70 text-sm">Kepercayaan dari ribuan pasangan di seluruh Indonesia</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-champagne">5000+</p>
                <p className="text-ivory-warm/60 text-xs">Pasangan Puas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-champagne">99%</p>
                <p className="text-ivory-warm/60 text-xs">Rating Kepuasan</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-champagne">50+</p>
                <p className="text-ivory-warm/60 text-xs">Tema Premium</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
