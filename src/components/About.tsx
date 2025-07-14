'use client';

import React from 'react';
import { ClipboardCheck, BarChart2, Shield, Warehouse, Settings, Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  const offerings = [
    {
      icon: <ClipboardCheck size={24} className="text-teal-primary" />,
      title: "Physical Inventory Verification",
      description: "On-site stock counting and verification against system records with 99.9% accuracy."
    },
    {
      icon: <BarChart2 size={24} className="text-orange-primary" />,
      title: "Inventory Reconciliation Reports",
      description: "Detailed reports highlighting discrepancies and their financial impact with actionable insights."
    },
    {
      icon: <Shield size={24} className="text-green-primary" />,
      title: "Warehouse Compliance Checks",
      description: "Ensuring your inventory practices meet industry regulations and standards."
    },
    {
      icon: <Warehouse size={24} className="text-yellow-primary" />,
      title: "Audit Trail Review",
      description: "Comprehensive analysis of inventory movements and transaction history."
    },
    {
      icon: <Settings size={24} className="text-teal-primary" />,
      title: "Automation Integration Support",
      description: "Expert recommendations for inventory automation tools and seamless implementation."
    }
  ];

  const stats = [
    {
      icon: <Award size={32} className="text-teal-primary" />,
      value: "10+",
      label: "Years Experience"
    },
    {
      icon: <Clock size={32} className="text-orange-primary" />,
      value: "48h",
      label: "Average Turnaround"
    },
    {
      icon: <Users size={32} className="text-green-primary" />,
      value: "20+",
      label: "Satisfied Clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inventory Auditing. Simplified.</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We cross-check your financial records with physical inventory, spot inconsistencies, and give you actionable insights. Whether it's cycle counts, full stocktakes, or system audits — our team ensures your inventory numbers match reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="p-3 rounded-full bg-white inline-block mb-4 shadow-sm group-hover:bg-teal-primary/10 transition-colors">
                {offering.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;