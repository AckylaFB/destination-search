import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #root {
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
  }
  body {
    background: hsl(var(--background))
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
