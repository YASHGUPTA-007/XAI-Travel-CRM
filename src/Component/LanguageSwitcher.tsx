import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'button' | 'dropdown';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '', 
  variant = 'button' 
}) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    console.log(`Switching language from ${currentLanguage} to ${newLanguage}`);
    i18n.changeLanguage(newLanguage);
  };

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          className="px-4 py-2 text-white hover:text-blue-200 font-medium border border-white/30 rounded-lg transition-all duration-300 flex items-center gap-2"
        >
          <span>{currentLanguage === 'en' ? '🇮🇳' : '🇺🇸'}</span>
          <span>{currentLanguage === 'en' ? t('nav.switchToHindi') : t('nav.switchToEnglish')}</span>
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className={`px-4 py-2 text-white hover:text-blue-200 font-medium border border-white/30 rounded-lg transition-all duration-300 flex items-center gap-2 ${className}`}
    >
      <span>{currentLanguage === 'en' ? '🇮🇳' : '🇺🇸'}</span>
      <span>{currentLanguage === 'en' ? t('nav.switchToHindi') : t('nav.switchToEnglish')}</span>
    </motion.button>
  );
};

export default LanguageSwitcher; 