import { LandingPage } from "./Pages/landing page/landing_page";
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  return <LandingPage />;
}

function App() {
  return (
    <div className="min-h-screen">
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </div>
  );
}

export default App;
