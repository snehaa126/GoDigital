import React from 'react';
import { Phone, MessageCircle, Linkedin } from 'lucide-react';

const AgentProfile = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Our Experts
        </h2>
        <p className="text-xl text-blue-600 text-center mb-12">
          Meet the team behind your success
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Founder Profile */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform perspective-1000 hover:rotate-y-2 hover:-translate-y-2">
            <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative w-48 h-48 mb-6 transform transition-transform duration-500 group-hover:translate-z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform rotate-6 animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-blue-300 rounded-full transform -rotate-6 animate-pulse delay-75 group-hover:scale-105 transition-transform duration-500"></div>
                <img
                  src="/ritesh.JPG"
                  alt="Ritesh Gondhale"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="transform transition-all duration-500 group-hover:translate-z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Ritesh Gondhale
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  Founder & Real Estate Consultant
                </p>
                <p className="text-gray-600 text-center mb-6">
                  I'm the founder who guides you every step of the way—handling
                  all consultations, calls, and ongoing support to ensure your
                  website perfectly matches your goals.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://wa.me/8862077345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+918862077345"
                    className="btn-secondary flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Designer Profile */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform perspective-1000 hover:rotate-y-2 hover:-translate-y-2">
            <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative w-48 h-48 mb-6 transform transition-transform duration-500 group-hover:translate-z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform rotate-6 animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-blue-300 rounded-full transform -rotate-6 animate-pulse delay-75 group-hover:scale-105 transition-transform duration-500"></div>
                <img
                  src="/sneha.jpeg"
                  alt="Sneha Gondhale"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="transform transition-all duration-500 group-hover:translate-z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Sneha Gondhale
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  Lead Web Designer
                </p>
                <p className="text-gray-600 text-center mb-6">
                  I create fast, modern, mobile‑friendly websites for Pune
                  agents—designed to impress and convert visitors into clients.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/sneha-gondhale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    View Linkedin Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;
