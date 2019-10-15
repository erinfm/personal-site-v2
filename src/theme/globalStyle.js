import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,600');

  body {
    padding: 0;
    margin: 0 1rem;
    box-sizing: border-box;
    font-family: Quicksand,'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
