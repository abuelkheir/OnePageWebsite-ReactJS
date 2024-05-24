import React from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import LandInteriors from'./Components/LandInterior';
// import Blogs from './Components/Blogs';
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <LandInteriors/>
      {/* <Blogs/> */}
      <Footer/>
   
    </>
  );
}

export default App;
