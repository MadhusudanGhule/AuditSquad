import React from 'react';
import { CalendarCheck, Search, ClipboardCheck, FileText, LifeBuoy } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <CalendarCheck size={24} className="text-teal-primary" />,
      title: "Schedule a Consultation",
      description: "Tell us your needs and specific inventory challenges."
    },
    {
      icon: <Search size={24} className="text-orange-primary" />,
      title: "Initial Assessment",
      description: "We review your records and systems to understand your setup."
    },
    {
      icon: <ClipboardCheck size={24} className="text-green-primary" />,
      title: "On-Site or Remote Audit",
      description: "Our team verifies your inventory using proven methodologies."
    },
    {
      icon: <FileText size={24} className="text-yellow-primary" />,
      title: "Reporting & Guidance",
      description: "You receive a clear, actionable report with recommendations."
    },
    {
      icon: <LifeBuoy size={24} className="text-teal-primary" />,
      title: "Ongoing Support",
      description: "We help you maintain long-term compliance and accuracy."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our structured approach ensures a thorough, efficient audit process from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                  <div className={`p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white border border-gray-100'} transition-all duration-300 hover:shadow-md`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="md:w-0 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;