import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
const ProjectsPage = props => (
  <Layout>
    <SEO title="Projects" />
    <h1>My Projects</h1>
    <p>Here are some of my projects</p>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
    <Img fluid={props.data.imageFour.childImageSharp.fluid} />
    <Img fluid={props.data.imageFive.childImageSharp.fluid} />
    <Img fluid={props.data.imageSix.childImageSharp.fluid} />
    <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "ids-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "ids-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "ids-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "ids-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "ids-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "weather-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "weather-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
