import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Integrations = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrations = [
    { name: t('integrations.googleWorkspace'), logo: "https://www.google.com/favicon.ico" },
    { name: t('integrations.whatsapp'), logo: "https://web.whatsapp.com/favicon.ico" },
    { name: t('integrations.stripe'), logo: "https://stripe.com/favicon.ico" },
    { name: t('integrations.gmail'), logo: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
    { name: t('integrations.googleMaps'), logo: "https://maps.google.com/favicon.ico" },
    { name: t('integrations.slack'), logo: "https://slack.com/favicon.ico" }
  ];

  return (
    <div className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.9), rgba(15,23,42,0.9)), url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('integrations.subtitle')}
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-8 h-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzMzNzNkYyIvPgo8dGV4dCB4PSIxNiIgeT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnt7aW50ZWdyYXRpb24ubmFtZS5jaGFyQXQoMCl9fTwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                {integration.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;