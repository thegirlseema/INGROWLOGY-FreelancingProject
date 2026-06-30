import React from 'react';
import Hero from './Hero';
import { StatsStrip, About, WhyChoose, Services } from './Sections1';
import { Partners, MissionVision, CTA, Contact } from './Sections2';
import { Industries, CaseStudies, Testimonials, Insights } from './Sections3';

const HomePage = () => (
  <>
    <Hero />
    <StatsStrip />
    <About />
    <WhyChoose />
    <Services />
    <CaseStudies />
    <Partners />
    <Industries />
    <Testimonials />
    <MissionVision />
    <Insights />
    <CTA />
    <Contact />
  </>
);

export default HomePage;
