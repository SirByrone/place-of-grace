import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import EnhancedSEO from './components/EnhancedSEO';
import './App.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const TransparencyPage = lazy(() => import('./pages/TransparencyPage'));
const InclusionPage = lazy(() => import('./pages/InclusionPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

// Route configuration for better maintainability
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/programs', component: ProgramsPage },
  { path: '/get-involved', component: GetInvolvedPage },
  { path: '/gallery', component: GalleryPage },
  { path: '/impact', component: ImpactPage },
  { path: '/news', component: NewsPage },
  { path: '/transparency', component: TransparencyPage },
  { path: '/inclusion', component: InclusionPage },
  { path: '/faq', component: FAQPage }
];

function App() {
  return (
    <Router>
      <div className="App">
        <EnhancedSEO 
          title="Place of Grace Community Centre - Empowering Children & Communities in Kenya"
          description="Place of Grace Community Centre is a non-profit organization dedicated to providing education, healthcare, and support to vulnerable children and communities in Kenya."
          keywords={[
            'Place of Grace Community Centre',
            'children home Kenya',
            'orphanage Nairobi',
            'charity Kenya children',
            'donate children Kenya',
            'vulnerable children support',
            'education Kenya',
            'community development'
          ]}
          url="/"
        />
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 