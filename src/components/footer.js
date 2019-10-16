import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { FiGithub } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FiMail } from "react-icons/fi"

const Copyright = styled.div`
  margin: 0 auto;
  color: #5100c2;
  max-width: 650px;
  text-align: center;
  font-weight: 600;
  padding: 1rem 0;
`

const SocialLinks = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 240px;
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-size: 1.75rem;
  color: #5100c2;
  padding: 0.5rem 0.5rem 0 0.5rem;
  transition: color 0.1s linear;

  &:hover {
    color: #5100c2;
  }
`

const Footer = ({ siteAuthor }) => (
  <>
    <SocialLinks>
      <StyledLink to="/">
        <FiGithub />
      </StyledLink>
      <StyledLink to="/">
        <FiTwitter />
      </StyledLink>
      <StyledLink to="/">
        {" "}
        <FiMail />
      </StyledLink>
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
