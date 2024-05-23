import React from 'react';
import styled from 'styled-components';

import CalendarLogo from '../Asssets/OtherLogos/CalendarLogo.svg';
import HomeLogo from '../Asssets/OtherLogos/HomeLogo.svg';
import Certificate from '../Asssets/OtherLogos/Certificate.svg';

const Logos = [
  { src: CalendarLogo, alt: 'Calendar Logo', label: '50 days or we pay the rent' },
  { src: HomeLogo, alt: 'Home Logo', label: '1500+ happy customers' },
  { src: Certificate, alt: 'Certificate', label: '300+ design experts' }
];

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #f8f8f8;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LogoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 20px;
`;

const LogoImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 20px;
`;

const LogoLabel = styled.p`
  font-size: 1.2rem;
  color: #451a64;
  font-family: 'Poppins', sans-serif; /* Use Poppins font */
  font-weight: 600; /* Example of using a specific weight */
`;


const LandInterior = () => {
  return (
    <SectionContainer>
      <SectionTitle>Why LAND Interiors</SectionTitle>
      <LogosContainer>
        {Logos.map((logo, index) => (
          <LogoItem key={index}>
            <LogoImage src={logo.src} alt={logo.alt} />
            <LogoLabel>{logo.label}</LogoLabel>
          </LogoItem>
        ))}
      </LogosContainer>
    </SectionContainer>
  );
};

export default LandInterior;
