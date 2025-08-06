import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, TrendingUp, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and focus on what matters most - growing your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Manage Clients",
      description: "Keep all client information organized and accessible in one centralized platform",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Boost Sales",
      description: "AI-powered insights help you identify opportunities and increase revenue",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance, monitor trends, and make data-driven decisions",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            Why Choose XAI Travel CRM?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of travel management with our cutting-edge AI technology
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;