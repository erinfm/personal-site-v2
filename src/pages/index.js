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
  display: inline-block;
  transition: background-color 0.1s ease;

  :hover {
    background-color: var(--accent);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Erin</h1>
    <StyledP>
      I'm a front-end developer, currently looking for a developer role in
      Europe.{" "}
      <StyledLink to="/contact/">
        {" "}
        <span role="img" aria-label="sparkles">
          ✨
        </span>{" "}
        HIRE ME!{" "}
        <span role="img" aria-label="sparkles">
          ✨
        </span>{" "}
      </StyledLink>
    </StyledP>
    <StyledP>
      My first introduction to programming was through the CS50 Computer Science
      course, and I was soon absorbed by the world of coding and problem
      solving. My curiosity lead to studying JavaScript, and since then I've
      been fully immersed in all things web development.
    </StyledP>
    <StyledSubtitle>Why me?</StyledSubtitle>
    <div>
      <ul>
        <li>
          Strong skills with HTML, CSS, JavaScript and React, and happy to pick
          up new languages, libraries and frameworks.
        </li>
        <li>
          Prior experience as a front-end developer, so I can hit the ground
          running in a new position.{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
        </li>
        <li>
          I'm self-taught, with the motivation and drive to learn, and the
          ability to set goals and see them through.
        </li>
        <li>
          I{" "}
          <span role="img" aria-label="purple heart">
            💜
          </span>{" "}
          CSS, and have a strong interest in UI and UX design.
        </li>
        <li>
          Ready and keen to relocate within Europe (I speak English, French and
          Spanish at a professional level).{" "}
          <span role="img" aria-label="luggage">
            🧳
          </span>{" "}
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
