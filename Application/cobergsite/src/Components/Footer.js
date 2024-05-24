import React from 'react';
import styled from 'styled-components';

import FacebookLogo from '../Assets/SocialMediaLogos/facebook.svg';
import TwitterLogo from '../Assets/SocialMediaLogos/twitter.svg';
import InstagramLogo from '../Assets/SocialMediaLogos/instagram.svg';
import LinkedinLogo from '../Assets/SocialMediaLogos/linkedin.svg';
import YoutubeLogo from '../Assets/SocialMediaLogos/youtube.svg';

import MainLogo from '../Assets/MainLogo/MainLogo.svg';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainLogoImg = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #451a64;
  margin-bottom: 10px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialLogo = styled.img`
  margin: 0 5px;
  width: 30px;
  height: 30px;
`;

const FooterLinksContainer = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #451a64;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <MainLogoImg src={MainLogo} alt="Main Logo" />
        <SectionText>
          We introduce ourselves as LAND Interior and Architectural Design Consultancy – one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy has challenged the conventional way of interior designing and given new dimensions to the art of interior designing.
        </SectionText>
        <SocialMediaContainer>
          <a href="https://www.facebook.com">
            <SocialLogo src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <SocialLogo src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com">
            <SocialLogo src={InstagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com">
            <SocialLogo src={LinkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com">
            <SocialLogo src={YoutubeLogo} alt="YouTube" />
          </a>
        </SocialMediaContainer>
      </Section>
      <Section>
        <SectionTitle>WHAT WE DO</SectionTitle>
        <SectionText>Interior Design</SectionText>
        <SectionText>Kitchen</SectionText>
        <SectionText>Ceiling</SectionText>
        <SectionText>Bedroom</SectionText>
        <SectionText>Smart Home</SectionText>
      </Section>
      <Section>
        <SectionTitle>Get in touch</SectionTitle>
        <SectionText>Email: <a href="mailto:landinteriors@gmail.com">landinteriors@gmail.com</a></SectionText>
        <SectionText>Phone: <a href="tel:+919898765656">+91 98987 65656</a></SectionText>
      </Section>
      <FooterLinksContainer>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/projects">Projects</FooterLink>
        <FooterLink href="/studio">Studio</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
