import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "DroidSans";
    src: url("/fonts/DroidSans/DroidSans.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: "DroidSans";
    src: url("/fonts/DroidSans/DroidSans-Bold.ttf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
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
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;
