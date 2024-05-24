import React from "react";
import styled from "styled-components";

import BedroomImg from "../Assets/WhatWeDoImages/Bedroom.png";
import HomeOfficeImg from "../Assets/WhatWeDoImages/HomeOffice.png";
import LivingRoomImg from "../Assets/WhatWeDoImages/LivingRoom.png";
import ModularKitchenImg from "../Assets/WhatWeDoImages/ModularKitchen.png";

const images = [
  { src: BedroomImg, alt: "Bedroom", label: "Bedroom" },
  { src: HomeOfficeImg, alt: "Home Office", label: "Home Office" },
  { src: LivingRoomImg, alt: "Living Room", label: "Living Room" },
  { src: ModularKitchenImg, alt: "Modular Kitchen", label: "Modular Kitchen" },
];

const WhatWeDoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 40px 20px;
  margin: 0 auto; /* Set left and right margins to auto */
`;

const WhyLandTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif; /* Use Poppins font */
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
  font-family: "Poppins", sans-serif; /* Use Poppins font */
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
  color: #000000;
`;

const WhatWeDoSection = () => {
  return (
    <WhatWeDoContainer>
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </Paragraph>
    </WhatWeDoContainer>
  );
};
export default WhatWeDoSection;
