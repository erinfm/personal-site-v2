import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledP = styled.p`
  margin-bottom: 1rem;
`

const StyledSubtitle = styled.h3``

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: 600;
  color: var(--textLink);
  display: block;
  transition: background-color 0.1s ease;

  :hover {
    background-color: var(--accent);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hi, I'm Erin{" "}
      <span role="img" aria-label="sparkles">
        ✨
      </span>
    </h1>
    <StyledP>
      I'm a front-end developer, currently based in Ireland. I love all things
      computers, and especially building stuff for the web.
      <StyledLink to="/contact/"> </StyledLink>
    </StyledP>
    <StyledP>
      When I'm not coding you can find me out hiking{" "}
      <span role="img" aria-label="landscape">
        🏞️
      </span>
      , learning (human) languages{" "}
      <span role="img" aria-label="book">
        📘
      </span>
      , and embracing my inner masterchef.{" "}
      <span role="img" aria-label="cupcake">
        👩🏻‍🍳
      </span>
    </StyledP>
  </Layout>
)

export default IndexPage
