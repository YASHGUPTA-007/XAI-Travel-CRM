import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, TrendingUp, Users, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.9), rgba(15,23,42,0.9)), url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            Live Dashboard Preview
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See your business metrics at a glance with our intuitive dashboard interface.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Dashboard Overview</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-green-400" size={24} />
                    <div>
                      <p className="text-sm text-white/70">Revenue</p>
                      <p className="text-lg font-bold text-white">$24,500</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-400" size={24} />
                    <div>
                      <p className="text-sm text-white/70">Clients</p>
                      <p className="text-lg font-bold text-white">157</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="bg-white/5 backdrop-blur rounded-xl p-4 h-32 flex items-end justify-between">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${Math.random() * 80 + 20}%` } : {}}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-8 bg-gradient-to-t from-blue-500 to-purple-600 rounded-t"
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {[
                { icon: BarChart3, title: "Real-time Analytics", desc: "Track your performance with live data updates" },
                { icon: TrendingUp, title: "Revenue Insights", desc: "Monitor sales trends and identify opportunities" },
                { icon: Users, title: "Client Management", desc: "See all client interactions in one place" },
                { icon: Calendar, title: "Booking Overview", desc: "Visual calendar with upcoming trips and deadlines" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;