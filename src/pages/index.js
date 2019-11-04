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
      I'm a front-end developer, currently looking for a new role in Europe.{" "}
      <StyledLink to="/contact/">
        {" "}
        <span role="img" aria-label="sparkles">
          ✨
        </span>{" "}
        CONTACT ME!{" "}
        <span role="img" aria-label="sparkles">
          ✨
        </span>{" "}
      </StyledLink>
    </StyledP>
    <StyledP>
      I discovered programming through the CS50 Computer Science course, which
      ignited my love of coding and problem solving. Curiosity to learn more led
      to studying JavaScript, and since then I've been fully immersed in all
      things web development.
    </StyledP>
    <StyledP>
      Now I hope to contribute my knowledge, motivation and enthusiasm to a role
      where I can add value and grow as part of a team.
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
