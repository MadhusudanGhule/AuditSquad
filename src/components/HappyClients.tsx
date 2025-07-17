import React from 'react';
import { Star } from 'lucide-react';

const HappyClients: React.FC = () => {
  const clients = [
    {
      logo: "/brandImages/Aurelia.png",
      name: " AuditSquad client TechCorp Solutions"
    },
    {
      logo: "/brandImages/Being Human.jpg",
      name: " AuditSquad client Global Logistics"
    },
    {
      logo: "/brandImages/Biba.jpg",
      name: " AuditSquad client Biba"
    },
    {
      logo: "/brandImages/damensch.jpg",
      name: " AuditSquad client damensch"
    },
    {
      logo: "/brandImages/Honda.png",
      name: " AuditSquad client Homda"
    },
    {
      logo: "/brandImages/Levis Logo.png",
      name: " AuditSquad client Levis"
    },
    {
      logo: "/brandImages/Mustard.jpg",
      name: " AuditSquad client Mustard"
    }, {
      logo: "/brandImages/Nicobar.jpg",
      name: " AuditSquad client Nicobar"
    },
    {
      logo: "/brandImages/Nike Images.jpg",
      name: " AuditSquad client Nike"
    },
    {
      logo: "/brandImages/Peter England.jpg",
      name: " AuditSquad client Peter England"
    }, {
      logo: "/brandImages/Rare Rabbit.png",
      name: " AuditSquad client Rare Rabbit"
    },
    {
      logo: "/brandImages/Rarerism.jpg",
      name: " AuditSquad client Rarerism"
    },
    {
      logo: "/brandImages/Shoe Tree Logo.jpeg",
      name: " AuditSquad client Shoe Tree"
    }, {
      logo: "/brandImages/Skechers Logo.jpg",
      name: " AuditSquad client Global Logistics"
    },
    {
      logo: "/brandImages/Soch.jpg",
      name: " AuditSquad client Soch"
    },
    {
      logo: "/brandImages/Superkicks.png",
      name: " AuditSquad client Superkicks"
    }, {
      logo: "/brandImages/Suzuki.png",
      name: " AuditSquad client Suzuki"
    },
    {
      logo: "/brandImages/TSF Logo.jpeg",
      name: " AuditSquad client TSF"
    },
    {
      logo: "/brandImages/Veg Non Veg.png",
      name: " AuditSquad client Veg Non Veg"
    }, {
      logo: "/brandImages/W Brand.jpg",
      name: " AuditSquad client W Brand"
    },
    {
      logo: "/brandImages/Yamaha Service Dealers.jpg",
      name: " AuditSquad client Yamaha Service Dealers"
    },
    // {
    //   logo: "/brandImages/",
    //   name: " AuditSquad client E-Commerce Pro"
    // }, {
    //   logo: "/brandImages/",
    //   name: " AuditSquad client Global Logistics"
    // },
    //   logo: "/brandImages/",
    //   name: " AuditSquad client Global Logistics"
    // },

  ];

  const stats = [
    { value: "20+", label: "Happy Clients" },
    { value: "98%", label: "Client Retention" },
    { value: "1M+", label: "Items Audited" },
    { value: "1+", label: "Countries Served" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clients we are experienced with</h2>
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
                className="max-h-20 w-auto duration-300"
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