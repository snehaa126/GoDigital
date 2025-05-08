import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>

      {/* Background illustration */}
      <img
        src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
        alt="Designer"
        className="absolute right-0 h-full w-1/2 object-cover opacity-20 select-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Professional Websites for Real Estate Agents
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Get a custom, mobile-friendly website that helps you sell
              properties faster
            </p>

            {/* Price Tag */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-lg mb-8 inline-block animate-pulse">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Special Offer: ₹1,999/month
                </p>
                <p className="text-gray-400 text-sm">
                  Limited time discount - Save 50%
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/8862077345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Get Started on WhatsApp
              </a>
              <a href="tel:+8862077345" className="btn-secondary group">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Call Now for Discount
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
