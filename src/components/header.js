import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Toggle from "./darkModeToggle"

const TopBar = styled.nav`
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 520px;

  color: var(--textLink);
  height: 2.5rem;

  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;

  font-size: 0.9rem;

  @media (min-width: 360px) {
    font-size: 1rem;
  }

  @media (min-width: 414px) {
  }

  @media (min-width: 600px) {
    margin: 0 auto;
    font-size: 1.25rem;
    padding: 3.5rem 1rem 1.5rem 1rem;
    max-width: 710px;
  }
`
const HomeLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  margin-right: 0.25rem;
  background-color: var(--accent);

  color: var(--bg);
  background-color: var(--textLink);
  border: 2.5px solid var(--textLink);

  box-shadow: 0.5rem 0.5rem 0px 0px var(--accent);

  transition: color 0.1s ease, background-color 0.1s ease;

  :hover {
    background-color: var(--accent);
    color: var(--textLink);
  }

  @media (min-width: 360px) {
    margin-right: 0.5rem;
  }

  @media (min-width: 414px) {
    margin-right: 0.75rem;
  }

  @media (min-width: 600px) {
    padding: 0.5rem 1rem;
    margin-right: 1rem;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.25rem;
  color: var(--textLink)
  margin: 0 0.25rem;
  transition: color 0.1s ease;


  background-image: linear-gradient( transparent 0%, transparent calc(50% - 0.5rem), var(--accent) calc(50% - 0.5rem), var(--accent) 100% );

  transition: background-position 120ms ease-in-out;
  background-size: 100% 200%;
  background-position: 0 0;
 

  :hover {  
    background-position: 0 100%;
  }

  

  @media (min-width: 360px) {
    margin: 0 0.4rem 0 0.25rem;
  }

  @media (min-width: 414px) {
    margin: 0 0.75rem 0 0.25rem;
  }

  @media (min-width: 600px) {
    padding: 0.5rem 0.25rem;
    margin: 0 1.1rem 0 0.4rem;
  }

  @media (min-width: 615px) {
    margin: 0 1.25rem 0 0.4rem;
  }
`

const LeftSideLinks = styled.div`
  display: flex;
`

const RightSideLinks = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 360px) {
    flex-basis: 48%;
  }
`

const Header = ({ siteTitle }) => (
  <TopBar>
    <LeftSideLinks>
      <HomeLink to="/">{siteTitle}</HomeLink>
    </LeftSideLinks>
    <RightSideLinks>
      <StyledLink to="/blog/" activeStyle={{ backgroundPosition: "0 100%" }}>
        Blog
      </StyledLink>
      <StyledLink to="/contact/" activeStyle={{ backgroundPosition: "0 100%" }}>
        Contact
      </StyledLink>
      <Toggle />
    </RightSideLinks>
  </TopBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
