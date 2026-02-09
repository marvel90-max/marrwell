import { motion } from 'framer-motion';
import { Check, Sparkles, Crown, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Essential',
      price: '299.000',
      period: 'sekali bayar',
      icon: Star,
      description: 'Cocok untuk acara intimate',
      badge: null,
      features: [
        '1 tema desain premium',
        'Galeri foto (max 20 foto)',
        'Musik latar',
        'Countdown timer',
        'RSVP digital (max 100 tamu)',
        'Google Maps lokasi',
        'Aktif 3 bulan',
        'Revisi 2x',
      ],
      popular: false,
      gradient: 'from-sage-soft to-sage-soft/80',
      textColor: 'text-emerald-deep',
    },
    {
      name: 'Premium',
      price: '499.000',
      period: 'sekali bayar',
      icon: Sparkles,
      description: 'Paling populer untuk pernikahan',
      badge: 'Terpopuler',
      features: [
        '3 tema desain premium',
        'Galeri foto unlimited',
        'Video story pernikahan',
        'Musik latar custom',
        'Countdown timer',
        'RSVP digital unlimited',
        'Google Maps lokasi',
        'Filter ucapan selamat',
        'Love story timeline',
        'Aktif 6 bulan',
        'Revisi unlimited',
        'Custom domain',
      ],
      popular: true,
      gradient: 'from-emerald-deep to-emerald-deep/80',
      textColor: 'text-ivory-warm',
    },
    {
      name: 'Luxury',
      price: '799.000',
      period: 'sekali bayar',
      icon: Crown,
      description: 'Untuk pengalaman premium',
      badge: 'Best Value',
      features: [
        'Semua fitur Premium',
        'Desain custom eksklusif',
        'Animasi interaktif advanced',
        'Virtual wedding live stream',
        'Guest book digital',
        'QR code invitation',
        'Amplop digital',
        'Analytics dashboard',
        'Priority support 24/7',
        'Aktif 12 bulan',
        'Team dedicated',
        'Konsultasi desain personal',
      ],
      popular: false,
      gradient: 'from-gold-champagne to-gold-champagne/80',
      textColor: 'text-emerald-deep',
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
    <section id="harga" className="py-24 bg-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-emerald-deep rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-gold-champagne rounded-full blur-3xl"></div>
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
              Pilihan Paket
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-emerald-deep mb-4">
              Harga Terjangkau & Transparan
            </h2>
            <div className="h-1 w-24 bg-gold-champagne mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-brown-mocha mt-6 max-w-2xl mx-auto leading-relaxed">
            Tanpa biaya tersembunyi. Bayar sekali untuk undangan digital premium Anda
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  plan.popular ? 'md:scale-105 border-4 border-gold-champagne' : 'border-2 border-sage-soft/30'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-champagne to-gold-champagne/80 text-emerald-deep text-center py-2 font-semibold text-sm">
                    {plan.badge}
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.gradient} ${plan.textColor} p-8 ${plan.badge ? 'pt-14' : ''}`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-center mb-2">
                    {plan.name}
                  </h3>

                  <p className={`text-center text-sm mb-6 ${plan.popular ? 'text-sage-soft' : 'opacity-80'}`}>
                    {plan.description}
                  </p>

                  <div className="text-center mb-2">
                    <span className="text-4xl font-serif font-bold">Rp {plan.price}</span>
                  </div>
                  <p className={`text-center text-sm ${plan.popular ? 'text-sage-soft' : 'opacity-80'}`}>
                    {plan.period}
                  </p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-emerald-deep/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-emerald-deep" />
                        </div>
                        <span className="text-brown-mocha text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                      plan.popular
                        ? 'bg-gold-champagne text-emerald-deep hover:bg-gold-champagne/90'
                        : 'bg-emerald-deep text-ivory-warm hover:bg-emerald-deep/90'
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>

                {plan.popular && (
                  <div className="absolute -top-1 -right-1 w-20 h-20 bg-gold-champagne/20 rounded-full blur-2xl"></div>
                )}
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-emerald-deep/5 border border-emerald-deep/20 rounded-2xl px-8 py-6">
            <Sparkles className="w-8 h-8 text-gold-champagne" />
            <div className="text-left">
              <h4 className="text-emerald-deep font-semibold mb-1">Butuh paket custom?</h4>
              <p className="text-brown-mocha text-sm">Hubungi kami untuk solusi yang sesuai kebutuhan Anda</p>
            </div>
            <button className="bg-emerald-deep text-ivory-warm px-6 py-3 rounded-full font-semibold hover:bg-emerald-deep/90 transition-all duration-300 whitespace-nowrap">
              Konsultasi Gratis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
