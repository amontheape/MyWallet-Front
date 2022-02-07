import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --darkerPurple : #8C11BE;
    --ligtherPurple : #A328D6;
    --generalFont: 'Raleway', sans-serif;
  }

  body {
    font-family: var(--generalFont);
    word-break: break-word;
    background-color: var(--darkerPurple);
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export default GlobalStyle;