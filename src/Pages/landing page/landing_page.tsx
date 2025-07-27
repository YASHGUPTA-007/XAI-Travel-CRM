import AIItineraryPlanner from "./components/AIItineraryPlanner";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import RegistrationModal from "./components/RegistrationModal";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


export const LandingPage = () => {
  return (

    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Features />
      <AIItineraryPlanner />
      <Solutions />
      <Testimonials />
      <Dashboard />
      <Pricing />
      <Integrations />
      <FAQ />
      <FinalCTA />
      <RegistrationModal />
      <Chatbot />
      <Footer />
    </div>
  );
}

 