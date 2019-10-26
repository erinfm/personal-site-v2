import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StyledP = styled.p`
  margin-bottom: 1rem;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Erin</h1>
    <StyledP>
      I'm a front-end developer, currently looking for a junior developer role
      in Europe. <span>Lorem lorem, lorem lorem.</span>
    </StyledP>

    <StyledP>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </StyledP>
    <StyledP>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </StyledP>
  </Layout>
)

export default IndexPage
