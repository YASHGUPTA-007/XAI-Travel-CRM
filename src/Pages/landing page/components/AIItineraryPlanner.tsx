import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plane, MapPin, Calendar, DollarSign, ArrowLeft, Sparkles, Clock } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIItineraryPlanner = () => {
  const [formData, setFormData] = useState({
    city: '',
    days: '',
    budget: 25000,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const genAI = new GoogleGenerativeAI('AIzaSyAy5iJ8b6ivd-eaKu52DiHAMDyEKd2aw4U');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'budget' ? parseInt(value) : value,
    }));
  };

const generateItinerary = async () => {
  if (!formData.city || !formData.days) return;

  setIsLoading(true);
  setError('');

  try {
    // Use Gemini 2.5 Flash model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Updated prompt for a concise itinerary without markdown
    const prompt = `You're a professional travel assistant. Create a short and simple 3-day itinerary for a trip to ${formData.city} with a ₹${formData.budget} budget.
The itinerary should include:
• A few top attractions to visit.
• A brief suggestion for activities each day (1-2 activities).
• Affordable accommodation options (mention budget hotels or hostels).

Keep it short, under 150 words, and easy to follow. Avoid using markdown or any formatting, just plain text. No detailed descriptions, just essentials.`;  // Short and plain text without markdown

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    setItinerary(text);
    setShowResult(true);

    // Smooth scroll to result
    setTimeout(() => {
      document.getElementById('itinerary-result')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 300);
  } catch (err) {
    setError("Oops! Couldn't fetch the plan. Try again later.");
    console.error('Error generating itinerary:', err);
  } finally {
    setIsLoading(false);
  }
};



  const resetForm = () => {
    setShowResult(false);
    setItinerary('');
    setError('');
    setFormData({ city: '', days: '', budget: 25000 });
  };

  const isFormValid = formData.city.trim() && formData.days.trim();

  const loadingMessages = [
    "Packing your bags… 🧳",
    "Booking safe stays… 🏨", 
    "Curating hidden gems… 🌄",
    "Planning memories you'll never forget... ✨"
  ];

  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: showResult
            ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
            : `linear-gradient(rgba(14,14,14,0.9), rgba(14,14,14,0.9)), url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 text-4xl opacity-30"
        >
          ✈️
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-40 right-20 text-4xl opacity-30"
        >
          🏖️
        </motion.div>
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-40 left-20 text-4xl opacity-30"
        >
          🌆
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-yellow-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              AI-Powered Itinerary Planner
            </h2>
            <Sparkles className="text-yellow-400" size={32} />
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of travel planning. Let our AI create a personalized itinerary just for you.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult && !isLoading ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0e0e0e]/80 backdrop-blur-xl border border-white/10 hover:border-yellow-400/30 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* City Input */}
                  <div>
                    <label className="flex items-center gap-2 text-white/90 font-semibold mb-3">
                      <MapPin size={20} className="text-yellow-400" />
                      City you want to visit
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g., Paris, Tokyo, New York"
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur border border-white/20 rounded-xl text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
                    />
                  </div>

                  {/* Days Input */}
                  <div>
                    <label className="flex items-center gap-2 text-white/90 font-semibold mb-3">
                      <Calendar size={20} className="text-yellow-400" />
                      How many days?
                    </label>
                    <input
                      type="number"
                      name="days"
                      value={formData.days}
                      onChange={handleInputChange}
                      placeholder="e.g., 5"
                      min="1"
                      max="30"
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur border border-white/20 rounded-xl text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="mt-8">
                  <label className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                    <DollarSign size={20} className="text-yellow-400" />
                    Your budget: <span className="text-yellow-400 font-bold">₹{formData.budget.toLocaleString()}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      name="budget"
                      min="5000"
                      max="200000"
                      step="5000"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-white/50 text-sm mt-2">
                      <span>₹5,000</span>
                      <span>₹200,000</span>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="mt-10 text-center">
                  <motion.button
                    whileHover={{ scale: isFormValid ? 1.05 : 1 }}
                    whileTap={{ scale: isFormValid ? 0.95 : 1 }}
                    onClick={generateItinerary}
                    disabled={!isFormValid}
                    className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      isFormValid
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg hover:shadow-xl cursor-pointer hover:shadow-yellow-400/25'
                        : 'bg-gray-600/30 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Plane size={20} />
                      Make My Trip ✈️
                    </div>
                  </motion.button>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200 text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </motion.div>
            ) : isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0e0e0e]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
              >
                <div className="flex flex-col items-center gap-6">
                  {/* Animated Loader */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-white/20 border-t-yellow-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"
                    />
                  </div>

                  {/* Loading Messages */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLoadingMessage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl font-semibold text-white/90"
                    >
                      {loadingMessages[currentLoadingMessage]}
                    </motion.div>
                  </AnimatePresence>

                  <div className="text-white/60">
                    Creating your perfect itinerary...
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                id="itinerary-result"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0e0e0e]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <MapPin className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Your Personalized Itinerary</h3>
                      <p className="text-white/70">{formData.city} • {formData.days} days • ₹{formData.budget.toLocaleString()}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetForm}
                    className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="prose prose-invert max-w-none"
                >
                  <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-white/90 leading-relaxed whitespace-pre-wrap">
                    {itinerary}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #fbbf24, #f97316);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #fbbf24, #f97316);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }
      `}</style>
    </div>
  );
};

export default AIItineraryPlanner;