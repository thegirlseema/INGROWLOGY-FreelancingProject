import React from 'react';
import Hero from './Hero';
import { StatsStrip, About, WhyChoose, Services } from './Sections1';
import { Partners, MissionVision, Clients, CTA, Contact } from './Sections2';

const HomePage = () => (
  <>
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
  </>
);

export default HomePage;
