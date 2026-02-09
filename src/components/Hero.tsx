import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-deep via-charcoal to-emerald-deep">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#D6B37C" fill="none" strokeWidth="0.5" />
              <path d="M0 60 Q 25 35, 50 60 T 100 60" stroke="#D6B37C" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold-champagne/10 backdrop-blur-sm border border-gold-champagne/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-champagne" />
              <span className="text-sm font-medium text-gold-champagne">Undangan Digital Pernikahan Premium</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
            >
              <span className="text-ivory-warm">MarrWell</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight"
            >
              <span className="text-ivory-warm">Undangan Pernikahan </span>
              <span className="text-gold-champagne">Digital</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-lg sm:text-xl text-sage-soft mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Solusi undangan digital premium dengan desain elegan dan berkelas untuk momen istimewa pernikahan Anda
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('katalog')}
                className="group relative bg-gold-champagne text-emerald-deep px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Lihat Katalog</span>
                <div className="absolute inset-0 bg-gold-champagne rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              <button
                onClick={() => scrollToSection('harga')}
                className="border-2 border-gold-champagne text-ivory-warm px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-champagne/10 transition-all duration-300"
              >
                Lihat Harga
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-ivory-warm/70"
            >
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-gold-champagne">500+</div>
                <div className="text-sm mt-1">Pasangan Bahagia</div>
              </div>
              <div className="w-px h-12 bg-gold-champagne/30"></div>
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-gold-champagne">50+</div>
                <div className="text-sm mt-1">Tema Premium</div>
              </div>
              <div className="w-px h-12 bg-gold-champagne/30"></div>
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-gold-champagne">4.9</div>
                <div className="text-sm mt-1">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative flex items-center justify-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative w-64 h-[500px] bg-gradient-to-br from-ivory-warm to-sage-soft rounded-[3rem] shadow-2xl overflow-hidden border-8 border-charcoal transform hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/20 to-gold-champagne/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 bg-gold-champagne/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-10 h-10 text-gold-champagne" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-emerald-deep mb-2">Elegant</h3>
                  <p className="text-brown-mocha text-sm">Desain Premium</p>
                  <div className="mt-8 w-full space-y-3">
                    <div className="h-2 bg-emerald-deep/20 rounded-full"></div>
                    <div className="h-2 bg-gold-champagne/30 rounded-full w-3/4"></div>
                    <div className="h-2 bg-emerald-deep/20 rounded-full w-1/2"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="relative w-64 h-[500px] bg-gradient-to-br from-sage-soft to-ivory-warm rounded-[3rem] shadow-2xl overflow-hidden border-8 border-charcoal transform hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-champagne/20 to-emerald-deep/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 bg-emerald-deep/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-10 h-10 text-emerald-deep" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-emerald-deep mb-2">Luxury</h3>
                  <p className="text-brown-mocha text-sm">Fitur Lengkap</p>
                  <div className="mt-8 w-full space-y-3">
                    <div className="h-2 bg-gold-champagne/30 rounded-full"></div>
                    <div className="h-2 bg-emerald-deep/20 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gold-champagne/30 rounded-full w-1/2"></div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -z-10 inset-0 bg-gold-champagne/10 blur-3xl rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        onClick={() => scrollToSection('fitur')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ivory-warm hover:text-gold-champagne transition-colors duration-300"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
