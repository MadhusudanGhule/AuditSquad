import React from 'react';
import { CheckCircle } from 'lucide-react';

const NetworkPartners: React.FC = () => {
  const partners = [
    {
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "SAP"
    },
    {
      logo: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Oracle"
    },
    {
      logo: "https://images.pexels.com/photos/273214/pexels-photo-273214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Zoho"
    },
    {
      logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "NetSuite"
    }
  ];

  const benefits = [
    "Seamless integration with major ERP systems",
    "Access to global network of audit professionals",
    "Industry-leading tools and methodologies",
    "24/7 support and expertise"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network Partners</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We work seamlessly with leading technology providers to deliver comprehensive audit solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="text-teal-primary mr-3" size={20} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkPartners;