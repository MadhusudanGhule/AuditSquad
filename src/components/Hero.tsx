'use client';

import React from 'react';
import { CheckCircle, TrendingUp, Shield } from 'lucide-react';
const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Accuracy Rate', value: '99.8%' },
    { label: 'Time Saved', value: '40%' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Trusted by 50+ Companies
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smarter Inventory Audits Start Here
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Audit Squad helps businesses ensure their inventory is accurate, reliable, and compliant — by blending automation with expert audit insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="text-green-primary mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-medium block">Reduce Discrepancies</span>
                  <span className="text-sm text-gray-600">Up to 95% improvement</span>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <TrendingUp className="text-orange-primary mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-medium block">Boost Efficiency</span>
                  <span className="text-sm text-gray-600">40% time savings</span>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <Shield className="text-yellow-primary mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-medium block">Ensure Compliance</span>
                  <span className="text-sm text-gray-600">100% audit ready</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center bg-teal-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-teal-600 transition-all transform hover:-translate-y-1"
              >
                🔍 Book a Free Audit Consultation
              </button>
              <a
                href="#why-us"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-lg font-medium border-2 border-gray-300 hover:border-teal-primary hover:text-teal-primary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/webimages/Images_of_Team_Scann.png"
                alt="Inventory Audit"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block animate-float">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className={`${index === 2 ? 'col-span-2' : ''}`}>
                    <div className="text-2xl font-bold text-teal-primary">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;