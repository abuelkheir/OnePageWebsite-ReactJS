// src/Styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins";
    background-color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
