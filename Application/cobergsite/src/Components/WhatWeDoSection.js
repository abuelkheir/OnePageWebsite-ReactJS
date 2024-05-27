import React from "react";
import styled from "styled-components";

import BedroomImage from "../Assets/WhatWeDoImages/Bedroom.png";
import HomeOfficeImage from "../Assets/WhatWeDoImages/HomeOffice.png";
import LivingRoomImage from "../Assets/WhatWeDoImages/LivingRoom.png";
import ModularKitchenImage from "../Assets/WhatWeDoImages/ModularKitchen.png";

const images = [
  { src: BedroomImage, alt: "Bedroom", label: "Bedroom" },
  { src: HomeOfficeImage, alt: "Home Office", label: "Home Office" },
  { src: LivingRoomImage, alt: "Living Room", label: "Living Room" },
  {
    src: ModularKitchenImage,
    alt: "Modular Kitchen",
    label: "Modular Kitchen",
  },
];

const WhatWeDoContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  text-align: center;
  padding: 40px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 2; /* Set z-index to 2 */
`;

const WhatWeDoTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: black;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: 100%;

  @media (max-width: 1080px) {
    text-align: left;
    padding-left: 150px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Default alignment */
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    justify-content: center; /* Center the images */
  }
`;

const ImageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const ImageItem = styled.img`
  width: 286px;
  height: 340px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 1080px) {
    width: 343px;
    height: 407px;
  }
`;

const ImageSubtitle = styled.p`
  font-size: 24px;
  color: #451a64;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #000000;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const WhatWeDoSection = () => {
  return (
    <WhatWeDoContainer>
      <WhatWeDoTitle>What we do ?</WhatWeDoTitle>
      <ImagesContainer>
        {images.map((image, index) => (
          <ImageItemContainer key={index}>
            <ImageItem src={image.src} alt={image.alt} />
            <ImageSubtitle>{image.label}</ImageSubtitle>
            {image.subtitle && <ImageSubtitle>{image.subtitle}</ImageSubtitle>}
          </ImageItemContainer>
        ))}
      </ImagesContainer>
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
