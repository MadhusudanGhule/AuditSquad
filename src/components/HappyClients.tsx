import React from 'react';
import { Star } from 'lucide-react';

const HappyClients: React.FC = () => {
  const clients = [
    {
      logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "TechCorp Solutions"
    },
    {
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Global Logistics"
    },
    {
      logo: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Retail Masters"
    },
    {
      logo: "https://images.pexels.com/photos/273214/pexels-photo-273214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "E-Commerce Pro"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "Client Retention" },
    { value: "50M+", label: "Items Audited" },
    { value: "25+", label: "Countries Served" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Audit Squad with their inventory management.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-teal-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;