import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>My Projects</h1>
    <p>Here are some of my projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
