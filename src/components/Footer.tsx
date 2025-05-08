import React from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Laptop,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4 group">
              <Laptop className="h-8 w-8 text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
              <span className="ml-2 font-bold text-xl">GoDigital Studio</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Professional web design services for real estate agents. Get a
              custom website that helps you generate more leads and grow your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center group">
                  <Phone className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <a
                    href="tel:+911234567890"
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  >
                    +91 8862077345
                  </a>
                </li>
                <li className="flex items-center group">
                  <Mail className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  >
                    info@example.com
                  </a>
                </li>
                <li className="flex items-center group">
                  <MessageCircle className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <a
                    href="https://wa.me/8862077345"
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} GoDigital Studio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
