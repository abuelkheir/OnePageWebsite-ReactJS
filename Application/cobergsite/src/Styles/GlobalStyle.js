// src/Styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
