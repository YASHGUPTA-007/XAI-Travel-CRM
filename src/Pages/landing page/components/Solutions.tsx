import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, User, Users2, Briefcase } from 'lucide-react';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: Building2,
      title: "Travel Agencies",
      description: "Scale your agency with powerful tools designed for multi-agent operations",
      features: [
        "Multi-agent collaboration tools",
        "Advanced reporting and analytics",
        "Team workflow management",
        "Third-party integrations"
      ]
    },
    {
      icon: User,
      title: "Solo Travel Agents",
      description: "Everything you need to manage your independent travel business efficiently",
      features: [
        "Personalized dashboard",
        "Client relationship management",
        "Automated workflows",
        "Mobile-first design"
      ]
    },
    {
      icon: Users2,
      title: "Group Organizers",
      description: "Streamline group travel planning with specialized tools and features",
      features: [
        "Group management tools",
        "Payment processing",
        "Communication hub",
        "Itinerary planning"
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate Teams",
      description: "Enterprise-grade solutions for corporate travel management",
      features: [
        "Compliance management",
        "Expense tracking",
        "Approval workflows",
        "Advanced analytics"
      ]
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30,41,59,0.9), rgba(30,41,59,0.9)), url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            Solutions for Every Travel Professional
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Tailored solutions designed to meet the unique needs of different travel businesses
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white/20 backdrop-blur-lg border-white/30 text-white'
                    : 'bg-white/5 backdrop-blur border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                      : 'bg-white/10'
                  }`}>
                    <solution.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                    <p className="text-sm opacity-80">{solution.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
              >
               {(() => {
                 const IconComponent = solutions[activeTab].icon;
                 return (
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                   <IconComponent className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{solutions[activeTab].title}</h3>
                    <p className="text-white/80">{solutions[activeTab].description}</p>
                  </div>
                </div>
                 );
               })()}
                
                <div className="space-y-3">
                  {solutions[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;