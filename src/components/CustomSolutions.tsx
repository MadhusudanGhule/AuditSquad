'use client';

import React from 'react';
import { Target, Settings, Users, Clock } from 'lucide-react';

const CustomSolutions: React.FC = () => {
  const solutions = [
    {
      icon: <Target className="text-teal-primary" size={32} />,
      title: "Tailored Approach",
      description: "Custom audit strategies designed around your specific industry, size, and needs."
    },
    {
      icon: <Settings className="text-orange-primary" size={32} />,
      title: "System Integration",
      description: "Seamless integration with your existing inventory management systems."
    },
    {
      icon: <Users className="text-green-primary" size={32} />,
      title: "Dedicated Team",
      description: "Experienced auditors assigned specifically to your business."
    },
    {
      icon: <Clock className="text-yellow-primary" size={32} />,
      title: "Flexible Scheduling",
      description: "Audit timing that works with your operational schedule."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customized Solutions for Your Business</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We understand that every business is unique. Our solutions are tailored to meet your specific inventory management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;