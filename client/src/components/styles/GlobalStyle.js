import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-size: 10px;
  }
`;

export default GlobalStyle;