import { LandingPage } from "./Pages/landing page/landing_page";

function AppContent() {
  return <LandingPage />;
}

function App() {
  return (
    <div className="min-h-screen">
      <AppContent />
    </div>
  );
}

export default App;
