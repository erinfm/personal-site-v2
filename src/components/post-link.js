import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: 600;
  color: var(--textLink);
  margin-bottom: 1rem;
  display: inline-block;
`

const PostLink = ({ post }) => (
  <StyledLink to={post.frontmatter.path}>
    {post.frontmatter.title} ({post.frontmatter.date})
  </StyledLink>
)

export default PostLink
