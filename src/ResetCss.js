import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex: 1;
    font-family: sans-serif;
    color: ${({theme}) => theme.textColorBase};
    background-color: ${({theme}) => theme.backgroundBase};
  }

  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  #__next {
    display: flex;
    flex: 1;
  }
  
  button, a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover, &:focus {
      opacity: .5;
    }
  }
`;