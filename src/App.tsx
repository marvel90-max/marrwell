import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyMarrWell from './components/WhyMarrWell';
import KoleksiTema from './components/KoleksiTema';
import Katalog from './components/Katalog';
import CTA from './components/CTA';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory-warm font-sans">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-emerald-deep/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Heart className="w-6 h-6 text-gold-champagne mr-2" fill="currentColor" />
              <span className="text-2xl font-serif font-semibold text-ivory-warm">MarrWell</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Fitur', 'Katalog', 'Harga', 'Testimoni', 'FAQ'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-ivory-warm hover:text-gold-champagne transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('harga')}
                className="bg-gold-champagne text-emerald-deep px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Mulai Sekarang
              </motion.button>
            </div>

            <button
              className="md:hidden text-ivory-warm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-emerald-deep/95 backdrop-blur-sm border-t border-gold-champagne/20"
          >
            <div className="px-4 py-4 space-y-3">
              {['Fitur', 'Katalog', 'Harga', 'Testimoni', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-ivory-warm hover:text-gold-champagne transition-colors duration-300 py-2 font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('harga')}
                className="w-full bg-gold-champagne text-emerald-deep px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 mt-2"
              >
                Mulai Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <Hero />
      <Features />
      <WhyMarrWell />
      <KoleksiTema />
      <Katalog />
      <CTA />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
