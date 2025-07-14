'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    "Accuracy-Focused Approach",
    "Fast Turnaround Times",
    "Seasoned Auditors & Specialists",
    "Secure & Confidential Process",
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-teal-primary/10 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-green-primary/10 rounded-full"></div>
              
              <img 
                src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Inventory auditor" 
                className="rounded-2xl shadow-xl relative z-10 w-full h-auto"
              />
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-20 hidden lg:block">
                <div className="text-sm text-gray-800">
                  <div className="font-bold text-teal-primary">98%</div>
                  <div>Client retention</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Businesses Trust Us</h2>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-primary mr-3 flex-shrink-0 mt-1" size={20} />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-700 italic">
                "Our approach combines technology with human expertise. We don't just count—we analyze, explain, and help you improve your inventory management."
              </p>
              <div className="mt-3 flex items-center">
                <div className="w-10 h-10 bg-teal-primary/20 rounded-full flex items-center justify-center text-teal-primary font-bold">
                  NP
                </div>
                <div className="ml-3">
                  <div className="font-medium">Naresh Prattipaati</div>
                  <div className="text-sm text-gray-500">Chief Auditor, Audit Squad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;