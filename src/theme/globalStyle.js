import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,600');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
   height:100%;
   
  }

  body {

    
   
    font-family: Quicksand,'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 400;   
    
    

    --bg: #FEFCFF;
    --textNormal:  #332244;
    --textTitle:  #332244;
    --textLink: #701dc9;
    --textLinkHover: #311277;
    --hr: hsla(0, 0%, 0%, 0.2);
  
    background-color: var(--bg);
    color: var(--textNormal);
    border-left: 1vw solid var(--textLink);
    border-right: 1vw solid var(--textLink); 
    height:100%;
    
  }
  
  body.dark {
    -webkit-font-smoothing: antialiased;
  
    --bg: #181030;
    --textNormal:  #FEFCFF;
    --textTitle: #FEFCFF;
    --textLink: #ecdefa;
    --textLinkHover: #FEFCFF;
    --hr: hsla(0, 0%, 0%, 0.2);
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
    list-style-type: none;
  }

  p {
    line-height: 1.7;
  }
`
