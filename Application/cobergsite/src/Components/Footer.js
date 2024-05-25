import React from "react";
import styled from "styled-components";

import FacebookLogo from "../Assets/SocialMediaLogos/facebook.svg";
import TwitterLogo from "../Assets/SocialMediaLogos/twitter.svg";
import InstagramLogo from "../Assets/SocialMediaLogos/instagram.svg";
import LinkedinLogo from "../Assets/SocialMediaLogos/linkedin.svg";
import YoutubeLogo from "../Assets/SocialMediaLogos/youtube.svg";

import MainLogo from "../Assets/MainLogo/MainLogo.svg";

const FooterWrapper = styled.footer`
  background-color: #f8f8f8;
  padding: 47px 130px;
  font-family: "Poppins", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 111px;
  height: 111px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

const Text = styled.p`
  margin: 5px 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #3d3d3d;
`;

const WhatWeDoWrapper = styled.div`
  margin-top: 55px;
  margin-left: 40px; /* Adjust the left margin as needed */
  margin-bottom: 20px; /* Adjust the bottom margin as needed */
`;

const WhatWeDoLink = styled.a`
  display: block; /* Ensure each link is on a new line */
  margin: 5px 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  color: #4f4f4f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const GetInTouchWrapper = styled.div`
  margin-top: 55px;
  margin-left: 40px; /* Adjust the left margin as needed */
  margin-bottom: 20px; /* Adjust the bottom margin as needed */
`;

const GetInTouchItem = styled.p`
  margin: 5px 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  color: #4f4f4f;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

const SocialIcon = styled.img`
  margin: 0 5px;
  width: 30px;
  height: 30px;
`;

const FooterLinksWrapper = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 30px;
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
    <FooterWrapper>
      <FooterSection>
        <Logo src={MainLogo} alt="Main Logo" />
        <Text>
          We introduce ourselves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </Text>
        <SocialIconsWrapper>
          <a href="https://www.facebook.com">
            <SocialIcon src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com">
            <SocialIcon src={LinkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://www.twitter.com">
            <SocialIcon src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com">
            <SocialIcon src={YoutubeLogo} alt="YouTube" />
          </a>
          <a href="https://www.instagram.com">
            <SocialIcon src={InstagramLogo} alt="Instagram" />
          </a>
        </SocialIconsWrapper>
      </FooterSection>
      <FooterSection>
        <WhatWeDoWrapper>
          <Title>WHAT WE DO</Title>
          <WhatWeDoLink href="/interior-design">Interior Design</WhatWeDoLink>
          <WhatWeDoLink href="/kitchen">Kitchen</WhatWeDoLink>
          <WhatWeDoLink href="/ceiling">Ceiling</WhatWeDoLink>
          <WhatWeDoLink href="/bedroom">Bedroom</WhatWeDoLink>
          <WhatWeDoLink href="/smart-home">Smart Home</WhatWeDoLink>
        </WhatWeDoWrapper>
      </FooterSection>
      <FooterSection>
        <GetInTouchWrapper>
          <Title>Get in touch</Title>
          <GetInTouchItem>
            Email:{" "}
            <a href="mailto:landinteriors@gmail.com">landinteriors@gmail.com</a>
          </GetInTouchItem>
          <GetInTouchItem>
            Phone: <a href="tel:+919898765656">+91 98987 65656</a>
          </GetInTouchItem>
        </GetInTouchWrapper>
      </FooterSection>
      <FooterLinksWrapper>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/projects">Projects</FooterLink>
        <FooterLink href="/studio">Studio</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinksWrapper>
    </FooterWrapper>
  );
};

export default Footer;
