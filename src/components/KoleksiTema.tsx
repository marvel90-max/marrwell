import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, Gem, Sparkles, Flower2, Clock, Landmark, Moon } from 'lucide-react';

const KoleksiTema = () => {
  const [activeCategory, setActiveCategory] = useState('Signature Photo');

  const categories = [
    { name: 'Signature Photo', icon: Camera },
    { name: 'Signature No Photo', icon: CameraOff },
    { name: 'Luxury Minimalist', icon: Gem },
    { name: 'Modern Elegant', icon: Sparkles },
    { name: 'Romantic Floral', icon: Flower2 },
    { name: 'Classic Vintage', icon: Clock },
    { name: 'Cultural / Adat', icon: Landmark },
    { name: 'Islamic Elegant', icon: Moon },
  ];

  const themesData: Record<string, { name: string; description: string; gradient: string }[]> = {
    'Signature Photo': [
      { name: 'Golden Memories', description: 'Elegan dengan galeri foto premium', gradient: 'from-gold-champagne/30 to-emerald-deep/20' },
      { name: 'Love Portrait', description: 'Showcase foto pasangan yang romantis', gradient: 'from-emerald-deep/30 to-sage-soft/30' },
      { name: 'Timeless Moments', description: 'Abadikan momen indah Anda', gradient: 'from-brown-mocha/20 to-gold-champagne/20' },
    ],
    'Signature No Photo': [
      { name: 'Pure Elegance', description: 'Minimalis tanpa foto, penuh makna', gradient: 'from-emerald-deep/20 to-sage-soft/20' },
      { name: 'Simple Luxury', description: 'Sederhana namun mewah', gradient: 'from-gold-champagne/20 to-brown-mocha/20' },
      { name: 'Classic Grace', description: 'Keanggunan dalam kesederhanaan', gradient: 'from-sage-soft/30 to-emerald-deep/20' },
    ],
    'Luxury Minimalist': [
      { name: 'Modern Essence', description: 'Minimalis modern yang eksklusif', gradient: 'from-charcoal/20 to-gold-champagne/30' },
      { name: 'Premium Simplicity', description: 'Kemewahan dalam kesederhanaan', gradient: 'from-emerald-deep/30 to-ivory-warm/50' },
      { name: 'Elite Minimal', description: 'Desain kelas atas yang clean', gradient: 'from-brown-mocha/30 to-sage-soft/20' },
    ],
    'Modern Elegant': [
      { name: 'Contemporary Chic', description: 'Elegan dengan sentuhan modern', gradient: 'from-emerald-deep/30 to-gold-champagne/30' },
      { name: 'Sophisticated Style', description: 'Gaya sophisticated yang memukau', gradient: 'from-gold-champagne/30 to-sage-soft/30' },
      { name: 'Urban Elegance', description: 'Keanggunan urban yang stylish', gradient: 'from-brown-mocha/30 to-emerald-deep/20' },
    ],
    'Romantic Floral': [
      { name: 'Garden Romance', description: 'Bunga-bunga romantis yang indah', gradient: 'from-sage-soft/40 to-gold-champagne/20' },
      { name: 'Blooming Love', description: 'Cinta yang mekar seperti bunga', gradient: 'from-emerald-deep/20 to-sage-soft/40' },
      { name: 'Floral Dream', description: 'Mimpi indah dengan sentuhan floral', gradient: 'from-gold-champagne/20 to-sage-soft/30' },
    ],
    'Classic Vintage': [
      { name: 'Timeless Classic', description: 'Klasik yang tidak lekang waktu', gradient: 'from-brown-mocha/40 to-gold-champagne/30' },
      { name: 'Heritage Style', description: 'Gaya heritage yang menawan', gradient: 'from-gold-champagne/30 to-brown-mocha/30' },
      { name: 'Vintage Charm', description: 'Pesona vintage yang memesona', gradient: 'from-emerald-deep/20 to-brown-mocha/30' },
    ],
    'Cultural / Adat': [
      { name: 'Traditional Elegance', description: 'Keanggunan budaya tradisional', gradient: 'from-gold-champagne/40 to-emerald-deep/30' },
      { name: 'Cultural Heritage', description: 'Warisan budaya yang kaya', gradient: 'from-brown-mocha/30 to-gold-champagne/30' },
      { name: 'Ethnic Luxury', description: 'Kemewahan dengan nuansa etnik', gradient: 'from-emerald-deep/30 to-brown-mocha/20' },
    ],
    'Islamic Elegant': [
      { name: 'Islamic Luxury', description: 'Kemewahan dengan nilai islami', gradient: 'from-emerald-deep/40 to-gold-champagne/30' },
      { name: 'Mosque Ornament', description: 'Ornamen masjid yang indah', gradient: 'from-gold-champagne/40 to-emerald-deep/30' },
      { name: 'Arabic Style', description: 'Gaya arab yang elegan', gradient: 'from-brown-mocha/30 to-emerald-deep/30' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="koleksi-tema" className="py-24 bg-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tema-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#D6B37C" />
              <circle cx="0" cy="0" r="1" fill="#D6B37C" />
              <circle cx="80" cy="0" r="1" fill="#D6B37C" />
              <circle cx="0" cy="80" r="1" fill="#D6B37C" />
              <circle cx="80" cy="80" r="1" fill="#D6B37C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tema-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Koleksi Tema MarrWell
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full mb-4"></div>
          </div>
          <p className="text-lg text-brown-mocha max-w-2xl mx-auto leading-relaxed">
            Setiap tema dirancang dengan detail dan estetika kelas premium
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-emerald-deep text-ivory-warm shadow-lg scale-105'
                    : 'bg-white text-emerald-deep hover:bg-emerald-deep/5 border border-emerald-deep/20 hover:border-emerald-deep/40'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span>{category.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-emerald-deep rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {themesData[activeCategory].map((theme, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-sage-soft/30 hover:border-gold-champagne/50"
              >
                <div className={`h-48 bg-gradient-to-br ${theme.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                      className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    >
                      <Sparkles className="w-10 h-10 text-emerald-deep/80" />
                    </motion.div>
                  </div>

                  <div className="absolute top-4 right-4 bg-emerald-deep/90 backdrop-blur-sm text-ivory-warm text-xs font-semibold px-3 py-1 rounded-full">
                    Premium
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-emerald-deep mb-2 group-hover:text-gold-champagne transition-colors duration-300">
                    {theme.name}
                  </h3>
                  <p className="text-brown-mocha/80 text-sm leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-deep via-gold-champagne to-emerald-deep transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KoleksiTema;
