import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0; 
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.bgMain};
    color: ${props => props.theme.colors.secondary};
    height: 100vh;
    background: green;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }
`
