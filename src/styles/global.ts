import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue: #234BD7;

    --principal: #FBB900;
    --principal-darkness-1: #E3AA00;
    --principal-darkness-2: #C79900;
    --principal-lighter-1: #FCCB42;
    --principal-lighter-2: #FFD966;

    --white: #FAFAF5;

    --black: #1D1D1B;
    --black-2: #1A1A18;
    --black-3: #171715;
    --black-4: #252523;
    --black-5: #2D2D2B;
  }

  html {
    @media(max-width: 1000px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Asap', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: var(--white);
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, select, textarea {
    border: 0;
    background: none;
    font-family: 'Asap', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;
