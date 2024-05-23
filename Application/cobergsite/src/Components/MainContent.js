// src/components/MainContent.js
import React from 'react';
import Section from './Section';

const MainContent = () => (
  <div>
    <Section id="home" title="Welcome to LAND Interiors">
      <p>Get personalized home interiors in just 50 days.</p>
    </Section>
    <Section id="about" title="About Us" bg="#f0f0f0">
      <p>Why LAND Interiors?</p>
    </Section>
    <Section id="projects" title="Projects">
      <p>Our latest projects...</p>
    </Section>
    <Section id="contact" title="Contact Us" bg="#f0f0f0">
      <p>Contact us at: landinteriors@gmail.com</p>
    </Section>
  </div>
);

export default MainContent;
