import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Heart } from 'lucide-react';

const Katalog = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const catalogs = [
    {
      id: 1,
      name: 'MARRWELL – SIGNATURE 01',
      badge: 'BEST SELLER',
      badgeColor: 'bg-emerald-deep',
      image: 'https://images.pexels.com/photos/2738071/pexels-photo-2738071.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 2,
      name: 'MARRWELL – LUXURY GOLD 02',
      badge: 'NEW',
      badgeColor: 'bg-gold-champagne text-emerald-deep',
      image: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 3,
      name: 'MARRWELL – FLORAL ROMANCE 03',
      badge: 'LIMITED',
      badgeColor: 'bg-sage-soft text-emerald-deep',
      image: 'https://images.pexels.com/photos/2773804/pexels-photo-2773804.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 4,
      name: 'MARRWELL – MINIMALIST CHIC 04',
      badge: 'BEST SELLER',
      badgeColor: 'bg-emerald-deep',
      image: 'https://images.pexels.com/photos/1462808/pexels-photo-1462808.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 5,
      name: 'MARRWELL – VINTAGE ELEGANCE 05',
      badge: 'NEW',
      badgeColor: 'bg-gold-champagne text-emerald-deep',
      image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 6,
      name: 'MARRWELL – CULTURAL ADAT 06',
      badge: 'LIMITED',
      badgeColor: 'bg-sage-soft text-emerald-deep',
      image: 'https://images.pexels.com/photos/1699895/pexels-photo-1699895.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 7,
      name: 'MARRWELL – ISLAMIC ELEGANCE 07',
      badge: 'NEW',
      badgeColor: 'bg-gold-champagne text-emerald-deep',
      image: 'https://images.pexels.com/photos/2828857/pexels-photo-2828857.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
    {
      id: 8,
      name: 'MARRWELL – MODERN LUXURY 08',
      badge: 'BEST SELLER',
      badgeColor: 'bg-emerald-deep',
      image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="katalog-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#D6B37C" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#katalog-pattern)" />
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
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Katalog Undangan
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full mb-4"></div>
          </div>
          <p className="text-lg text-brown-mocha max-w-2xl mx-auto leading-relaxed">
            Pilih dari koleksi eksklusif undangan digital premium kami
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(catalog.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-sage-soft/30"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-deep/10 to-gold-champagne/10">
                <motion.img
                  src={catalog.image}
                  alt={catalog.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${catalog.badgeColor} shadow-lg`}>
                  {catalog.badge}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredId === catalog.id ? 1 : 0, y: hoveredId === catalog.id ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <a
                    href={catalog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-deep text-ivory-warm py-3 px-4 rounded-lg font-semibold text-center hover:bg-emerald-deep/90 transition-all duration-300 text-sm"
                  >
                    Lihat Contoh
                  </a>
                </motion.div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-serif font-semibold text-emerald-deep group-hover:text-gold-champagne transition-colors duration-300 leading-tight min-h-12 flex items-center">
                  {catalog.name}
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-deep via-gold-champagne to-emerald-deep transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Katalog;
