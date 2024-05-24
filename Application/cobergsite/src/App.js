import React from "react";
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
      <MainSection />
      <LandInteriors />
      <WhatWeDoSection />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
