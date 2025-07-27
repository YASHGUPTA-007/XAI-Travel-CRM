import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  Plane, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageCircle,
  ExternalLink,
  Heart,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: t('footer.quickLinks.aboutUs'), href: '#about' },
    { name: t('footer.quickLinks.features'), href: '#features' },
    { name: t('footer.quickLinks.pricing'), href: '#pricing' },
    { name: t('footer.quickLinks.blog'), href: '#blog' },
    { name: t('footer.quickLinks.contact'), href: '#contact' }
  ];

  const supportLinks = [
    { name: t('footer.support.helpCenter'), href: '#help' },
    { name: t('footer.support.faqs'), href: '#faq' },
    { name: t('footer.support.partnerProgram'), href: '#partners' },
    { name: t('footer.support.apiDocumentation'), href: '#api' },
    { name: t('footer.support.customerSuccess'), href: '#success' }
  ];

  const trustedLogos = [
    'Amadeus', 'Sabre', 'Expedia', 'Booking.com', 'TripAdvisor'
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10">
        {/* Trusted By Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-8 border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white/60 mb-4">{t('footer.trustedBy')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {trustedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-lg text-white/70 text-sm font-medium"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div ref={ref} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Plane className="text-white" size={24} />
                  </div>
                  <span className="text-2xl font-bold text-white">TravelCRM</span>
                </div>
                
                <p className="text-blue-300 font-semibold">
                  {t('footer.tagline')}
                </p>
                
                <p className="text-white/70 leading-relaxed">
                  {t('footer.description')}
                </p>
                
                <div className="flex gap-4">
                  {[
                    { icon: Twitter, href: '#twitter' },
                    { icon: Instagram, href: '#instagram' },
                    { icon: Linkedin, href: '#linkedin' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks.title')}</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                      >
                        {link.name}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">{t('footer.support.title')}</h3>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                      >
                        {link.name}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">{t('footer.newsletter.title')}</h3>
                <p className="text-white/70 mb-4">
                  {t('footer.newsletter.description')}
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('footer.newsletter.placeholder')}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t('footer.newsletter.subscribe')}
                  </motion.button>
                </form>

                {/* Success Message */}
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-200 text-sm flex items-center gap-2"
                  >
                    <CheckCircle size={16} />
                    {t('footer.newsletter.success')}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 bg-black/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white/60">
                <span>{t('footer.copyright')}</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  {t('footer.builtWith')} <Heart className="text-red-400 fill-current" size={16} /> {t('footer.forTravelCreators')}
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#terms" className="text-white/60 hover:text-white transition-colors duration-300">
                  {t('footer.legal.terms')}
                </a>
                <a href="#privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                  {t('footer.legal.privacy')}
                </a>
                <a href="#cookies" className="text-white/60 hover:text-white transition-colors duration-300">
                  {t('footer.legal.cookies')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;