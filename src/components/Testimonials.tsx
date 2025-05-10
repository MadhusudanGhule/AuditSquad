'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Thanks to Audit Squad, we discovered inventory discrepancies worth over $30K and fixed them before year-end.",
      author: "Rajiv S.",
      position: "Logistics Manager",
      image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Audit Squad's reports are the most insightful and clean we've seen.",
      author: "Tanya M.",
      position: "Finance Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Their team identified patterns in our inventory shrinkage that completely changed our approach to warehouse security.",
      author: "Michael R.",
      position: "Operations Director",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from businesses that have transformed their inventory management with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Quote className="absolute text-gray-200 h-24 w-24 -top-6 -left-6 transform -rotate-12" />
            
            <div className="relative z-10">
              <div className="min-h-[180px]">
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-gray-500">{testimonials[activeIndex].position}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-primary/10 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-primary/10 transition-colors"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? 'bg-teal-primary' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;