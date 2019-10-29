import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,600');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    @media (min-width: 530px) {
      font-size: 17px;
    }
   
  }

  body {
    min-height: 100vh;
    height: 100%;
    
   
    font-family: 'Quicksand','Helvetica Neue', 'Helvetica', -apple-system, BlinkMacSystemFont,'Segoe UI', sans-serif;
    font-weight: 400;   
    
    

    --bg: #FEFCFF;
    --textNormal:  #332244;
    --textTitle:  #332244;
    --textLink: #701dc9;
    --textLinkHover: #311277;
    --hr: hsla(0, 0%, 0%, 0.2);
  
    background-color: var(--bg);
    color: var(--textNormal);
    border: 1vw solid var(--textLink);
    
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

  ::selection {
    background: var(--textLink); 
    color: var(--bg)
  }
  ::-moz-selection {
    background: var(--textLink); 
    color: var(--bg);
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 0 1rem 1rem;
    list-style: disc outside none;
    line-height: 1.7;
  }

  li {
    margin-bottom: 0.5rem;
  
  }


  input {
    font-size: 1rem;
  }

  textarea {
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    font-weight: 600;

    cursor: pointer;

    border: none;
    
    color: var(--bg);
    background-color: var(--textLink);
    transition: background-color 0.4 ease;

    &:hover {
      background-color: var(--textLinkHover);
  }


`
