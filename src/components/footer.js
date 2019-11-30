import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { FiGithub } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FiMail } from "react-icons/fi"

const Copyright = styled.div`
  margin: 0 auto;
  color: var(--textLink);
  max-width: 710px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 1rem 2rem;

  @media (min-width: 600px) {
    font-size: 0.85rem;
  }
`

const SocialLinks = styled.div`
  margin: 1rem auto 0 auto;
  max-width: 200px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
    max-width: 240px;
    margin: 2rem auto 0 auto;
  }
`
const StyledSocialLink = styled.a`
  font-size: 1.5rem;
  color: var(--textLink);
  padding: 0.5rem 0.5rem 0 0.5rem;

  background-image: linear-gradient(to top, var(--accent) 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 120ms ease-in-out;

  :hover {
    background-position: bottom;
  }

  @media (min-width: 414px) {
    font-size: 1.75rem;
  }
`

const Footer = ({ siteAuthor }) => (
  <>
    <SocialLinks>
      <StyledSocialLink
        href="https://www.github.com/erinfm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </StyledSocialLink>
      <StyledSocialLink
        href="https://www.twitter.com/erinfranmc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter />
      </StyledSocialLink>
      <StyledSocialLink
        href="mailto:erinfranmc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail />
      </StyledSocialLink>
    </SocialLinks>
    <Copyright>
      <p>
        © {new Date().getFullYear()}, designed and coded by {siteAuthor} using
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Copyright>
  </>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
