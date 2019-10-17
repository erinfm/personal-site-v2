import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { FiGithub } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FiMail } from "react-icons/fi"

const Copyright = styled.div`
  margin: 0 auto;
  color: #701dc9;
  max-width: 620px;
  text-align: center;
  font-weight: 600;
  padding: 1rem;
`

const SocialLinks = styled.div`
  margin: 0 auto;
  max-width: 200px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 530px) {
    max-width: 240px;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  font-size: 1.5rem;
  color: #701dc9;
  padding: 0.5rem 0.5rem 0 0.5rem;
  transition: color 0.1s ease;
  &:hover {
    color: #311277;
  }

  @media (min-width: 414px) {
    font-size: 1.75rem;
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
        © {new Date().getFullYear()}
        {/* , designed and coded by {siteAuthor}, using
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
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
