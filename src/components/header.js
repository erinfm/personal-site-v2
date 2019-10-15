import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TopBar = styled.nav`
  margin: 0 auto;
  color: blue;
  max-width: 800px;
  font-weight: 600;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-size: 1.25rem;
  color: #5405ff;
  margin-left: 1rem;
`

const RightSideLinks = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
`

const HomeLink = styled(props => <Link {...props} />)`
  font-size: 1.25rem;
  color: #5405ff;
  margin-right: 2rem;
`

const Title = styled.h1`
  font-size: 1.25rem;
`

const Header = ({ siteTitle }) => (
  <TopBar>
    <HomeLink to="/">
      <Title>{siteTitle} </Title>
    </HomeLink>

    <RightSideLinks>
      <StyledLink to="/projects/">Projects</StyledLink>
      <StyledLink to="/blog/">Blog</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
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
