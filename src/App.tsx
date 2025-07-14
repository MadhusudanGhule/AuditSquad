import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Education from './components/Education';
import Process from './components/Process';
import CustomSolutions from './components/CustomSolutions';
import Leadership from './components/Leadership';
import HappyClients from './components/HappyClients';
import NetworkPartners from './components/NetworkPartners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Audit Squad - Inventory Audit Specialists';
    
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Education />
        <Process />
        <CustomSolutions />
        <Leadership />
        <HappyClients />
        {/* <NetworkPartners /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;