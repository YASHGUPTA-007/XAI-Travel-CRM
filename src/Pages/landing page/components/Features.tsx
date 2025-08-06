import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserPlus, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  FileText, 
  GitBranch 
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: UserPlus,
      title: "Lead Management",
      description: "Capture and nurture leads with automated follow-ups and personalized communication"
    },
    {
      icon: MapPin,
      title: "AI Trip Planning",
      description: "Create personalized itineraries in minutes with our intelligent planning assistant"
    },
    {
      icon: Calendar,
      title: "Smart Booking Calendar",
      description: "Manage bookings, appointments, and availability with an intuitive calendar interface"
    },
    {
      icon: MessageSquare,
      title: "Automated Follow-ups",
      description: "Never lose a potential client with intelligent follow-up reminders and messaging"
    },
    {
      icon: FileText,
      title: "Client Notes & History",
      description: "Keep detailed records of all client interactions, preferences, and travel history"
    },
    {
      icon: GitBranch,
      title: "Pipeline Tracking",
      description: "Monitor your sales pipeline and track progress from lead to booking"
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
            Powerful Features for Modern Travel Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your travel business and delight your clients
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