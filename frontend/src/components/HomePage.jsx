import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import { StatsStrip, About, WhyChoose, Services } from './Sections1';
import { Partners, MissionVision, Clients, CTA, Contact, Footer } from './Sections2';

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#eef6f0]">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <WhyChoose />
        <Services />
        <Partners />
        <MissionVision />
        <Clients />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
