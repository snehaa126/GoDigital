import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgentProfile from './components/AgentProfile';
import WebsiteFeatures from './components/WebsiteFeatures';
import WhyChooseMe from './components/WhyChooseMe';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <WebsiteFeatures />
        <AgentProfile />
        <WhyChooseMe />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;