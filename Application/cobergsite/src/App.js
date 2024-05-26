import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import LandInteriors from "./Components/LandInterior";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import WhatWeDoSection from "./Components/WhatWeDoSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Polygon />
      <MainSection />
      <LandInteriors />
      <WhatWeDoSection />
      <Blogs />
      <Footer />
    </>
  );
}

// Styled component for the polygon
const Polygon = styled.div`
  position: absolute;
  top: -41px;
  left: 0px;
  width: 100%;
  height: 2400px;
  clip-path: polygon(
    40% 21%,
    65% 34%,
    100% 55%,
    100% 56%,
    70% 65%,
    30% 79%,
    0% 88%,
    0% 12%
  );
  background-color: blue;
  z-index: 1;
  margin: 0 auto;
  background-color: #f5fcff;
  z-index: 1; /* Ensure it's visible above other elements */
  margin: 0 auto;
`;

export default App;
