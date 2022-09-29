import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0; 
    margin: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.bgMain};
    color: ${props => props.theme.colors.secondary};
    display: grid;
    place-items: center;
    height: 100vh;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }
`
