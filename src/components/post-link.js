import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: 600;
  color: var(--textLink);
  margin-bottom: 1.5rem;
  display: block;
`

const Date = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.25rem;
`

const PostLink = ({ post }) => (
  <StyledLink to={post.frontmatter.path}>
    {post.frontmatter.title} <Date>{post.frontmatter.date}</Date>
  </StyledLink>
)

export default PostLink
