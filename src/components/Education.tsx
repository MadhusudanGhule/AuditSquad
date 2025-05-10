'use client';

import React from 'react';
import { BookOpen, CheckSquare, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const Education: React.FC = () => {
  const auditTypes = [
    {
      title: "Cycle Counting",
      description: "Periodic verification of a portion of inventory to ensure ongoing accuracy."
    },
    {
      title: "Full Physical Inventory",
      description: "Comprehensive stock check done annually or quarterly."
    },
    {
      title: "Spot Checks",
      description: "Surprise audits on specific SKUs or product categories."
    },
    {
      title: "Third-Party Verification",
      description: "Independent validation for compliance or investor due diligence."
    },
    {
      title: "Digital Audit Integration",
      description: "Audit support for ERP, WMS, or POS systems like SAP, Oracle, Zoho, etc."
    }
  ];

  const commonIssues = [
    "Inconsistent stock records across warehouses",
    "Shrinkage due to theft or misplacement",
    "Overstocking or understocking",
    "Discrepancies between purchase orders and actual stock",
    "ERP syncing issues and ghost inventory"
  ];

  const faqs = [
    {
      question: "Do I need a full audit or just a cycle count?",
      answer: "If you're running regular operations, a cycle count may be sufficient. We can help assess what's best."
    },
    {
      question: "Can you work with my accounting team or ERP system?",
      answer: "Yes! We integrate with most accounting systems and collaborate with internal teams."
    },
    {
      question: "How long does an inventory audit take?",
      answer: "It depends on your stock size, location(s), and system complexity — usually from 1 to 7 days."
    },
    {
      question: "Is the audit remote or on-site?",
      answer: "We offer both depending on your needs and data availability."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is an Inventory Audit — and Why It Matters</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            An inventory audit is the process of verifying a company's actual inventory against its financial records. It's essential for maintaining accuracy in stock levels, avoiding shrinkage, ensuring compliance with accounting standards, and preparing for financial statements or investor reports.
          </p>
        </div>

        {/* Types of Audits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Types of Inventory Audits We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2">{type.title}</h4>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Common Inventory Issues We Solve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonIssues.map((issue, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                <AlertTriangle size={20} className="text-orange-primary mr-3 flex-shrink-0" />
                <span>{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="flex items-start mb-6">
            <TrendingUp size={24} className="text-teal-primary mr-3" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Case Study Preview</h3>
              <p className="text-gray-600">Mid-sized E-commerce Business</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold">Problem</div>
              <div className="text-gray-600">18% discrepancy between recorded and actual stock</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold">Solution</div>
              <div className="text-gray-600">Cycle count + ERP sync audit</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold">Result</div>
              <div className="text-gray-600">Accuracy improved to 98.5%</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold">Savings</div>
              <div className="text-gray-600">$22,000 in restocking</div>
            </div>
          </div>
          <button className="text-teal-primary hover:text-teal-600 font-medium flex items-center">
            <FileText size={20} className="mr-2" />
            Read full case study
          </button>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;