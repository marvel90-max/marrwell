import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Katalog Tema', href: '#katalog' },
      { name: 'Fitur', href: '#fitur' },
      { name: 'Harga', href: '#harga' },
      { name: 'Cara Kerja', href: '#' },
    ],
    company: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Testimoni', href: '#testimoni' },
      { name: 'Blog', href: '#' },
      { name: 'Karir', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Panduan', href: '#' },
      { name: 'Kontak', href: '#' },
      { name: 'WhatsApp', href: '#' },
    ],
    legal: [
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
      { name: 'Pengembalian Dana', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-deep via-charcoal to-emerald-deep text-ivory-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#D6B37C" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-gold-champagne mr-3" fill="currentColor" />
                <span className="text-3xl font-serif font-semibold">MarrWell</span>
              </div>
              <p className="text-sage-soft leading-relaxed mb-6">
                Solusi undangan digital premium dengan desain elegan untuk momen istimewa pernikahan Anda.
              </p>

              <div className="space-y-3 mb-6">
                <a href="mailto:hello@marrwell.com" className="flex items-center gap-3 text-sage-soft hover:text-gold-champagne transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <span>hello@marrwell.com</span>
                </a>
                <a href="tel:+6281234567890" className="flex items-center gap-3 text-sage-soft hover:text-gold-champagne transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  <span>+62 812-3456-7890</span>
                </a>
                <div className="flex items-center gap-3 text-sage-soft">
                  <MapPin className="w-5 h-5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gold-champagne/20 hover:bg-gold-champagne/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-gold-champagne" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold-champagne">Produk</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sage-soft hover:text-gold-champagne transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold-champagne">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sage-soft hover:text-gold-champagne transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold-champagne">Bantuan</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sage-soft hover:text-gold-champagne transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold-champagne">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sage-soft hover:text-gold-champagne transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="py-8 border-t border-gold-champagne/20"
        >
          <div className="bg-gold-champagne/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-semibold mb-2">Newsletter</h3>
              <p className="text-sage-soft mb-6">
                Dapatkan tips pernikahan, promo spesial, dan update tema terbaru
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-gold-champagne/30 text-ivory-warm placeholder-sage-soft focus:outline-none focus:border-gold-champagne transition-colors duration-300"
                />
                <button className="bg-gold-champagne text-emerald-deep px-8 py-3 rounded-full font-semibold hover:bg-gold-champagne/90 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105">
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sage-soft text-sm">
            <p>© {currentYear} MarrWell. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-gold-champagne" fill="currentColor" /> in Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
