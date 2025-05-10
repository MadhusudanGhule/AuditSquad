'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 grid grid-cols-2 gap-0.5 overflow-hidden rounded">
                <div className="bg-teal-primary flex items-center justify-center text-white font-bold w-5 h-5">+</div>
                <div className="bg-green-primary flex items-center justify-center text-white font-bold w-5 h-5">×</div>
                <div className="bg-orange-primary flex items-center justify-center text-white font-bold w-5 h-5">−</div>
                <div className="bg-yellow-primary flex items-center justify-center text-white font-bold w-5 h-5">÷</div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Audit<span className="text-teal-primary">Squad</span></span>
                <span className="block text-xs text-gray-600">at your service</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-teal-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-800 hover:text-teal-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-800 hover:text-teal-primary transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-800 hover:text-teal-primary transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-800 hover:text-teal-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-primary text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-teal-primary transition-colors text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-gray-800 hover:text-teal-primary transition-colors text-left py-2"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-800 hover:text-teal-primary transition-colors text-left py-2"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-gray-800 hover:text-teal-primary transition-colors text-left py-2"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-800 hover:text-teal-primary transition-colors text-left py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-primary text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;