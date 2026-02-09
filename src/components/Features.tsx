import { motion } from 'framer-motion';
import { Sparkles, Palette, Zap, Globe, Shield, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Desain Premium',
      description: 'Koleksi tema eksklusif dengan desain elegan dan modern yang mencerminkan kemewahan acara Anda',
    },
    {
      icon: Palette,
      title: 'Kustomisasi Penuh',
      description: 'Sesuaikan setiap elemen undangan dengan warna, font, dan gaya yang Anda inginkan',
    },
    {
      icon: Zap,
      title: 'Proses Cepat',
      description: 'Undangan digital Anda siap dalam hitungan menit tanpa perlu menunggu lama',
    },
    {
      icon: Globe,
      title: 'Akses Mudah',
      description: 'Tamu dapat membuka undangan dari perangkat apapun tanpa perlu instalasi',
    },
    {
      icon: Shield,
      title: 'Data Aman',
      description: 'Informasi acara dan data tamu tersimpan dengan aman dan terenkripsi',
    },
    {
      icon: Heart,
      title: 'RSVP Digital',
      description: 'Kelola konfirmasi kehadiran tamu dengan mudah melalui sistem RSVP terintegrasi',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="fitur" className="py-24 bg-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-champagne rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-deep rounded-full blur-3xl"></div>
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
              Keunggulan Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Mengapa Memilih MarrWell?
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-brown-mocha mt-6 max-w-2xl mx-auto leading-relaxed">
            Kami menghadirkan solusi undangan digital terbaik dengan fitur lengkap dan desain premium
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-soft/30 hover:border-gold-champagne/50 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-champagne/5 to-emerald-deep/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-deep to-emerald-deep/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-gold-champagne" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-emerald-deep mb-3 group-hover:text-gold-champagne transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-brown-mocha leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gold-champagne/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-emerald-deep/5 border border-emerald-deep/20 rounded-full px-6 py-3">
            <Heart className="w-5 h-5 text-gold-champagne" fill="currentColor" />
            <span className="text-brown-mocha font-medium">
              Dipercaya oleh 500+ pasangan untuk momen istimewa mereka
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
