import React from 'react';
import { Image, Smartphone, MessageCircle, Map } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Image className="w-12 h-12 text-blue-500 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />,
    title: 'Professional Design',
    description: 'Modern, eye-catching designs that reflect your brand and impress potential clients.'
  },
  {
    id: 2,
    icon: <Smartphone className="w-12 h-12 text-blue-500 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />,
    title: 'Responsive & Fast',
    description: 'Lightning-fast websites that work flawlessly on all devices, from phones to desktops.'
  },
  {
    id: 3,
    icon: <MessageCircle className="w-12 h-12 text-blue-500 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />,
    title: 'Lead Generation',
    description: 'Built-in features to capture and convert visitors into valuable leads for your business.'
  },
  {
    id: 4,
    icon: <Map className="w-12 h-12 text-blue-500 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />,
    title: 'Custom Integration',
    description: 'Seamless integration with maps, forms, and other tools you need to succeed.'
  }
];

const WebsiteFeatures = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center text-gray-900">Premium Website Features</h2>
        <p className="section-subtitle text-center text-gray-600">
          Elevate your real estate business with our professional web design services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;