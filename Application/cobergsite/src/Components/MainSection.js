import React from "react";
import styled from "styled-components";

import mainImage from "../Assets/HeaderImages/HeaderImage.png";

const MainSectionContainer = styled.section`
  padding: 40px 0px;
  display: flex;
  justify-content: left;
  background-color: #fff;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  @media (max-width: 1080px) {
    max-width: 1080px;
  }
`;

const MainImage = styled.img`
  height: auto;

  @media (max-width: 1080px) {
    width: 100%;
    height: 757px;
  }
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

  @media (max-width: 1080px) {
    left: 50%;
    transform: translate(-50%, -6%);
    width: 997px;
    height: 404px;
    padding-left: 18px;
  }
`;

const Title = styled.h1`
  margin-top: 40px;
  font-size: 26px;
  color: #000;

  @media (max-width: 1080px) {
    margin-top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
  }
`;

const Subtitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-top: -5px;

  @media (max-width: 1080px) {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
  }
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

  @media (max-width: 1080px) {
    width: 630px;
    height: 96px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    margin: 0 auto;
    transform: translate(0%, 92%);
  }
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
