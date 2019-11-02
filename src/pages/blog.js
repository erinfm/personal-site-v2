import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = styled.div`
  font-size: 1.25rem;

  @media (min-width: 530px) {
    font-size: 1.5rem;
  }
`

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <BlogPosts>{Posts}</BlogPosts>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
