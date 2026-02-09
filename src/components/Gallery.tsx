import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const templates = [
    {
      title: 'Classic Elegance',
      category: 'Klasik',
      description: 'Desain timeless dengan sentuhan modern',
      color: 'from-emerald-deep to-emerald-deep/80',
    },
    {
      title: 'Modern Luxury',
      category: 'Modern',
      description: 'Minimalis dengan kesan mewah',
      color: 'from-brown-mocha to-brown-mocha/80',
    },
    {
      title: 'Garden Romance',
      category: 'Romantic',
      description: 'Nuansa natural yang romantis',
      color: 'from-sage-soft to-sage-soft/80',
    },
    {
      title: 'Royal Wedding',
      category: 'Premium',
      description: 'Kemewahan kelas atas',
      color: 'from-gold-champagne to-gold-champagne/80',
    },
    {
      title: 'Tropical Paradise',
      category: 'Tropical',
      description: 'Kehangatan tropis yang elegan',
      color: 'from-emerald-deep/70 to-sage-soft',
    },
    {
      title: 'Vintage Charm',
      category: 'Vintage',
      description: 'Pesona klasik yang abadi',
      color: 'from-brown-mocha/70 to-gold-champagne/70',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="katalog" className="py-24 bg-gradient-to-b from-ivory-warm to-sage-soft/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gallery-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="#D6B37C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-pattern)" />
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
              Koleksi Tema
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Katalog Desain Premium
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-brown-mocha mt-6 max-w-2xl mx-auto leading-relaxed">
            Pilih dari 50+ tema eksklusif yang dirancang khusus untuk momen istimewa Anda
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {templates.map((template, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-80 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                    {template.title}
                  </h3>

                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-3">
                    <span className="text-sm text-white font-medium">{template.category}</span>
                  </div>

                  <div className="w-16 h-px bg-white/30 my-4"></div>

                  <div className="space-y-2 w-full">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-2 bg-white/20 rounded-full"
                        style={{ width: `${100 - i * 20}%`, margin: '0 auto' }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6 bg-white">
                <p className="text-brown-mocha text-center leading-relaxed">
                  {template.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center"
        >
          <button className="group inline-flex items-center gap-3 bg-emerald-deep text-ivory-warm px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-deep/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            <span>Lihat Semua Katalog</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <p className="text-brown-mocha/70 mt-6 text-sm">
            *Semua tema dapat dikustomisasi sesuai keinginan Anda
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
