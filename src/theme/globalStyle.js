import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,600');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    min-height:100%;
    border-left: 1vw solid #5100c2;
    border-right: 1vw solid #5100c2; 
    
  }

  body {
   
    font-family: Quicksand,'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 400;   
    color: #333344;
    background-color: #FCFCFF;  
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #5100c2;
  }

  ul {
    margin: 0 auto;
    list-style-type: none;
  }

  p {
    line-height: 1.7;
  }
`
