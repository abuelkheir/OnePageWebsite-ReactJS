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
  font-family: "Poppins", sans-serif; /* Use Poppins font */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  font-family: "Poppins", sans-serif; /* Use Poppins font */
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
  font-family: "Poppins", sans-serif; /* Use Poppins font */
  // font-weight: 600;
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

// Todo , add the background for the text , adjust opacity as needed ,
// fix image size ,
// fix image size to be full page
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
    </MainSectionContainer>
  );
};

export default MainSection;
