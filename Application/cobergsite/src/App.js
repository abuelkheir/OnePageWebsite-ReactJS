// src/App.js
import React from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent />
    </>
  );
}

export default App;
