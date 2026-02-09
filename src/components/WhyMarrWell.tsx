import { motion } from 'framer-motion';
import { Clock, RefreshCw, Users, Music, Sparkles, Monitor } from 'lucide-react';

const WhyMarrWell = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Pengerjaan Cepat',
      description: '≤ 24 jam',
      detail: 'Undangan Anda siap dalam hitungan jam',
    },
    {
      icon: RefreshCw,
      title: 'Revisi Fleksibel',
      description: 'Sampai hari-H',
      detail: 'Ubah desain kapan saja sesuai keinginan',
    },
    {
      icon: Users,
      title: 'Nama Tamu',
      description: 'Tanpa batas',
      detail: 'Personalisasi untuk setiap tamu undangan',
    },
    {
      icon: Music,
      title: 'Bebas Request Musik',
      description: 'Pilih lagu favorit',
      detail: 'Tambahkan lagu spesial untuk momen Anda',
    },
    {
      icon: Sparkles,
      title: 'Desain Eksklusif',
      description: 'Premium quality',
      detail: 'Koleksi tema yang elegan dan berkelas',
    },
    {
      icon: Monitor,
      title: 'Akses Semua Device',
      description: 'Mobile & Desktop',
      detail: 'Responsif di semua perangkat',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-ivory-warm to-sage-soft/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold-champagne rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-deep rounded-full blur-3xl"></div>
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
              Kenapa MarrWell?
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-ivory-warm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gold-champagne/20 hover:border-gold-champagne/50 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-deep to-emerald-deep/80 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <Icon className="w-7 h-7 text-gold-champagne" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-emerald-deep mb-2 group-hover:text-gold-champagne transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <div className="inline-block bg-gold-champagne/10 px-3 py-1 rounded-full mb-3">
                    <span className="text-sm font-semibold text-gold-champagne">
                      {benefit.description}
                    </span>
                  </div>

                  <p className="text-brown-mocha/80 text-sm leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-gold-champagne/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMarrWell;
