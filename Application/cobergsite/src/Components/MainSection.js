import React from "react";
import styled from "styled-components";

import mainImage from "../Assets/HeaderImages/HeaderImage.png";

const MainSectionContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: left;
  background-color: #fff;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

const MainImage = styled.img`
  // width: 100%;
  height: auto;
`;

const MainText = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(35%, -50%);
  background-color: rgba(255, 255, 255, 0.82);
  padding: 18px;
  padding-left: 167px;
  width: 51%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 40px;
  font-size: 26px;
  color: #000;
`;
/* Get personalised home interiors 

position: absolute;
width: 576px;
height: 54px;
left: 1127px;
top: 508px;


font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 54px;
/* identical to box heightS

color: #000000;
*/

const Subtitle = styled.h2`
  font-size: 36px;
  color: #451a64;
  margin-top: 10px;
`;

const ConsultantButton = styled.button`
  width: 500px;
  height: 60px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #4b2a63;
  border: none;
  cursor: pointer;
  justify-content: center;
`;

const MainSection = () => {
  return (
    <MainSectionContainer>
      <CardContainer>
        <MainImage src={mainImage} alt="Main" />
        <MainText>
          <Title>Get Personalised Home Interiors</Title>
          <Subtitle>in just 50 days</Subtitle>
          <ConsultantButton>SPEAK WITH AN ONLINE CONSULTANT</ConsultantButton>
        </MainText>
      </CardContainer>
    </MainSectionContainer>
  );
};

export default MainSection;
