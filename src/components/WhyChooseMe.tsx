import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  "Specialized in creating websites for real estate professionals",
  "Fast, mobile-friendly websites that help you generate more leads",
  "Affordable pricing starting at ₹1,999/month",
  "Quick setup and ongoing support included",
  "SEO optimization to help you rank better in search results"
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Why Choose My Services</h2>
        <p className="section-subtitle text-center text-white/90">
          Get a professionally designed website that helps you stand out in the real estate market
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 mb-6 transform hover:translate-x-2 transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-xl">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;