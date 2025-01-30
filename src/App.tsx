import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Equipment from './components/sections/Equipment';
import Laboratory from './components/sections/Laboratory';
import ToolsSales from './components/sections/ToolsSales';
import Contact from './components/sections/Contact';
import AboutPage from './pages/About';
import ScrollToTop from './components/utils/ScrollToTop';

// Layout wrapper component
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Header />
    {children}
    <Footer />
  </div>
);

// Home page component
const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <Equipment />
    <Laboratory />
    <ToolsSales />
    <Contact />
  </main>
);

// 404 page component
const NotFound = () => (
  <main className="pt-20">
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a 
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </a>
    </div>
  </main>
);

function App() {
  // Handle hash navigation
  React.useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Handle initial hash if present
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;