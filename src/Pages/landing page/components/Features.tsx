import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  UserPlus, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  FileText, 
  GitBranch 
} from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: UserPlus,
      title: t('features.leadManagement.title'),
      description: t('features.leadManagement.description')
    },
    {
      icon: MapPin,
      title: t('features.tripPlanning.title'),
      description: t('features.tripPlanning.description')
    },
    {
      icon: Calendar,
      title: t('features.bookingCalendar.title'),
      description: t('features.bookingCalendar.description')
    },
    {
      icon: MessageSquare,
      title: t('features.autoFollowUps.title'),
      description: t('features.autoFollowUps.description')
    },
    {
      icon: FileText,
      title: t('features.clientNotes.title'),
      description: t('features.clientNotes.description')
    },
    {
      icon: GitBranch,
      title: t('features.pipelineTracking.title'),
      description: t('features.pipelineTracking.description')
    }
  ];

  return (
    <div className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <feature.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;