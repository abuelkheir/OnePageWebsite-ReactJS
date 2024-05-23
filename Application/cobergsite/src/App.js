import React from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import LandInteriors from'./Components/LandInterior';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <LandInteriors/>
   
    </>
  );
}

export default App;
