import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import LoadingScreenDemo from './components/LoadingScreenDemo';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';
import TransparencyPage from './pages/TransparencyPage';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Simulate initial loading time for demo purposes
  useEffect(() => {
    // In a real app, you might check for actual resource loading
    // For now, we'll let the LoadingScreen component handle its own timing
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/transparency" element={<TransparencyPage />} />
            <Route path="/loading-demo" element={<LoadingScreenDemo />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App; 