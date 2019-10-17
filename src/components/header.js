import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { MdTonality } from "react-icons/md"

const TopBar = styled.nav`
  margin: 1rem auto 2rem auto;

  color: #701dc9;
  height: 2.5rem;
  max-width: 620px;

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

  @media (min-width: 530px) {
    margin: 2rem auto;
    font-size: 1.25rem;
    padding: 0 1rem;
  }
`
const HomeLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  margin-right: 0rem;
  background-color: #701dc9;
  color: #fefcff;

  transition: background-color 0.1s ease;
  &:hover {
    background-color: #311277;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 415px) {
    margin-right: 0.25rem;
  }

  @media (min-width: 530px) {
    padding: 0.5rem 1rem;
    margin-right: 1;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.5rem;
  margin-right: 0rem;
  transition: color 0.1s ease;
  &:hover {
    color: #311277;
  }

  @media (min-width: 360px) {
    margin-right: 0.25rem;
  }

  @media (min-width: 415px) {
    margin-right: 0.25rem;
  }

  @media (min-width: 530px) {
    padding: 0.5rem 1rem;
    margin-right: 1rem;
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
`

const NightModeToggle = styled.div`
  font-size: 1.1rem;

  padding: 0.75rem 0.75rem 0.5rem 0.5rem;

  cursor: pointer;
  transition: color 0.1s ease;
  &:hover {
    color: #311277;
  }

  @media (min-width: 360px) {
    font-size: 1.25rem;
    padding: 0.75rem 0.75rem 0.5rem 0.5rem;
  }

  @media (min-width: 415px) {
  }

  @media (min-width: 530px) {
    font-size: 1.75rem;
    padding: 0.75rem 1rem 0.25rem 1rem;
  }
`

const Header = ({ siteTitle }) => (
  <TopBar>
    <LeftSideLinks>
      <HomeLink to="/">Personal Site</HomeLink>
    </LeftSideLinks>
    <RightSideLinks>
      <StyledLink to="/projects/" activeStyle={{ color: "#311277" }}>
        Projects
      </StyledLink>
      <StyledLink to="/blog/" activeStyle={{ color: "#311277" }}>
        Blog
      </StyledLink>
      <StyledLink to="/contact/" activeStyle={{ color: "#311277" }}>
        Contact
      </StyledLink>
      <NightModeToggle to="/">
        <MdTonality />
      </NightModeToggle>
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
