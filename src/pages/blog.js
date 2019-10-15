import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>Here is a blog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
