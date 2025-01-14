import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Equipment from './components/sections/Equipment';
import Laboratory from './components/sections/Laboratory';
import ToolsSales from './components/sections/ToolsSales';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Equipment />
        <Laboratory />
        <ToolsSales />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;