import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message:
      "Hi, I'm interested in getting a professional website for my real estate business. Please provide details about your ₹1,999/month package.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      message:
        "Hi, I'm interested in getting a professional website for my real estate business. Please provide details about your ₹1,999/month package.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to grow your real estate business with a professional website?
            Contact us today!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Quick Contact with Illustration */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg"
              alt="Customer Support"
              className="w-full max-w-md rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-all duration-300"
            />
            <a
              href="https://wa.me/8862077345"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-4 px-8 group transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Get Started on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-secondary w-full transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
