import React from "react";
import styled from "styled-components";

import mainImage from "../Assets/HeaderImages/HeaderImage.png";

const MainSectionContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.25); /* White with 25% opacity */
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Ensure the card clips overflow content */
`;

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainImage = styled.img`
  width: 50%;
  height: auto;
`;

const MainText = styled.div`
  width: 50%;
  padding: 20px;
  text-align: left;
  font-family: "Poppins", sans-serif;
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

const MainSection = () => {
  return (
    <MainSectionContainer>
      <CardContainer>
        <ImageTextContainer>
          <MainImage src={mainImage} alt="Main" />
          <MainText>
            <Title>Get Personalised Home Interiors</Title>
            <Subtitle>Why LAND Interiors</Subtitle>
            <Description>in just 50 days</Description>
            <ConsultantButton>SPEAK WITH AN ONLINE CONSULTANT</ConsultantButton>
          </MainText>
        </ImageTextContainer>
      </CardContainer>
    </MainSectionContainer>
  );
};

export default MainSection;
