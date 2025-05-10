import React from 'react';
import { Linkedin } from 'lucide-react';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "Alex Sharma",
      position: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "15+ years of inventory management expertise"
    },
    {
      name: "Sarah Chen",
      position: "Head of Audit Operations",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Former Big 4 auditor with global experience"
    },
    {
      name: "Raj Patel",
      position: "Technology Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Expert in ERP systems and automation"
    },
    {
      name: "Maria Rodriguez",
      position: "Client Success Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Dedicated to delivering exceptional results"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Led by industry veterans with decades of combined experience in inventory management and auditing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a href="#" className="text-white hover:text-teal-primary">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
              <p className="text-teal-primary font-medium mb-2">{leader.position}</p>
              <p className="text-gray-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;