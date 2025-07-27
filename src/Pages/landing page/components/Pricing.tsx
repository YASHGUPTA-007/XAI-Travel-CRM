import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: t('pricing.plans.free.name'),
      price: { monthly: 0, yearly: 0 },
      description: t('pricing.plans.free.description'),
      features: [
        t('pricing.plans.free.features.contacts'),
        t('pricing.plans.free.features.basic'),
        t('pricing.plans.free.features.email'),
        t('pricing.plans.free.features.mobile')
      ],
      popular: false
    },
    {
      name: t('pricing.plans.pro.name'),
      price: { monthly: 49, yearly: 39 },
      description: t('pricing.plans.pro.description'),
      features: [
        t('pricing.plans.pro.features.contacts'),
        t('pricing.plans.pro.features.analytics'),
        t('pricing.plans.pro.features.workflows'),
        t('pricing.plans.pro.features.support'),
        t('pricing.plans.pro.features.api'),
        t('pricing.plans.pro.features.integrations')
      ],
      popular: true
    },
    {
      name: t('pricing.plans.enterprise.name'),
      price: { monthly: 99, yearly: 79 },
      description: t('pricing.plans.enterprise.description'),
      features: [
        t('pricing.plans.enterprise.features.everything'),
        t('pricing.plans.enterprise.features.whiteLabel'),
        t('pricing.plans.enterprise.features.accountManager'),
        t('pricing.plans.enterprise.features.customDev'),
        t('pricing.plans.enterprise.features.security'),
        t('pricing.plans.enterprise.features.sla')
      ],
      popular: false
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`${!isYearly ? 'text-gray-800' : 'text-gray-500'}`}>{t('pricing.monthly')}</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? 'transform translate-x-6 bg-blue-500' : ''
              }`} />
            </button>
            <span className={`${isYearly ? 'text-gray-800' : 'text-gray-500'}`}>
              {t('pricing.yearly')} <span className="text-green-600 text-sm">{t('pricing.discount')}</span>
            </span>
          </div>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white/60 backdrop-blur-lg border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 bg-white/80' 
                  : 'border-white/40 hover:bg-white/80'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} className="fill-current" />
                    {t('pricing.mostPopular')}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-800">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">/{isYearly ? t('pricing.year') : t('pricing.month')}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {t('pricing.getStarted')}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;