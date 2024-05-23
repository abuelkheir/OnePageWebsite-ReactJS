import React from 'react';
import styled from 'styled-components';

import mainImage from '../Asssets/HeaderImages/HeaderImage.png'; 

// Check a better way for import 
import BedroomImg from '../Asssets/WhatWeDoImages/Bedroom.png';
import HomeOfficeImg from '../Asssets/WhatWeDoImages/HomeOffice.png';
import LivingRoomImg from '../Asssets/WhatWeDoImages/LivingRoom.png';
import ModularKitchenImg from '../Asssets/WhatWeDoImages/ModularKitchen.png';

const MainSectionContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const MainImage = styled.img`
  width: 50%;
  height: auto;
`;

const MainText = styled.div`
  width: 50%;
  padding: 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #451a64;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;
  font-weight: bold;
`;

const ConsultantButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #451a64;
  border: none;
  cursor: pointer;
`;

const WhyLandInteriorsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 40px 20px;
`;

const WhyLandTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LogoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const LogoItem = styled.img`
  width: 150px;
  height: auto;
`;

const ImageSubtitle = styled.p`
  font-size: 1rem;
  color: #451a64;
  margin-top: 5px;
`;

const images = [
  { src: BedroomImg, alt: 'Bedroom', label: 'Bedroom'},
  { src: HomeOfficeImg, alt: 'Home Office', label: 'Home Office'},
  { src: LivingRoomImg, alt: 'Living Room', label: 'Living Room' },
  { src: ModularKitchenImg, alt: 'Modular Kitchen', label: 'Modular Kitchen' }
];

const MainSection = () => {
  return (
    <MainSectionContainer>
      <ImageTextContainer>
        <MainImage src={mainImage} alt="Main" />
        <MainText>
          <Title>Get Personalised Home Interiors</Title>
          <Subtitle>Why LAND Interiors</Subtitle>
          <Description>in just 50 days</Description>
          <ConsultantButton>SPEAK WITH AN ONLINE CONSULTANT</ConsultantButton>
        </MainText>
      </ImageTextContainer>
      <WhyLandInteriorsContainer>
        <WhyLandTitle>Why LAND Interiors</WhyLandTitle>
        <LogosContainer>
          {images.map((image, index) => (
            <LogoItemContainer key={index}>
              <LogoItem src={image.src} alt={image.alt} />
              <ImageSubtitle>{image.label}</ImageSubtitle>
              {image.subtitle && <ImageSubtitle>{image.subtitle}</ImageSubtitle>}
            </LogoItemContainer>
          ))}
        </LogosContainer>
      </WhyLandInteriorsContainer>
    </MainSectionContainer>
  );
};

export default MainSection;
