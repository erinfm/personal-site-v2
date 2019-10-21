import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`

const LastImageWrapper = styled.div`
  margin-bottom: 3rem;
 
  }
`

const ProjectsPage = props => (
  <Layout>
    <SEO title="Projects" />
    <h1>My Projects</h1>
    <h3>IDS Media App</h3>
    <h4> What</h4>
    <p>I did a thing</p>
    <h4>Skills</h4>
    <p>What I learned doing the thing</p>
    <ImageWrapper>
      <Img fluid={props.data.ids_1.childImageSharp.fluid} />
    </ImageWrapper>
    <ImageWrapper>
      <Img fluid={props.data.ids_2.childImageSharp.fluid} />
    </ImageWrapper>
    <ImageWrapper>
      <Img fluid={props.data.ids_3.childImageSharp.fluid} />
    </ImageWrapper>
    <ImageWrapper>
      <Img fluid={props.data.ids_4.childImageSharp.fluid} />
    </ImageWrapper>
    <LastImageWrapper>
      <Img fluid={props.data.ids_5.childImageSharp.fluid} />
    </LastImageWrapper>
    <h3>Weather App</h3>
    <h4> What</h4>
    <p>I did a thing</p>
    <h4>Skills</h4>
    <p>What I learned doing the thing</p>
    <ImageWrapper>
      <Img fluid={props.data.weather_app_1.childImageSharp.fluid} />{" "}
    </ImageWrapper>{" "}
    <LastImageWrapper>
      <Img fluid={props.data.weather_app_2.childImageSharp.fluid} />
    </LastImageWrapper>
    <h3>React Calculator</h3>
    <h4> What</h4>
    <p>I did a thing</p>
    <h4>Skills</h4>
    <p>What I learned doing the thing</p>
    <LastImageWrapper>
      <Img fluid={props.data.calculator_1.childImageSharp.fluid} />
    </LastImageWrapper>
    <h3>Language Quiz App</h3>
    <h4> What</h4>
    <p>I did a thing</p>
    <h4>Skills</h4>
    <p>What I learned doing the thing</p>
    <ImageWrapper>
      <Img fluid={props.data.lang_quiz_1.childImageSharp.fluid} />
    </ImageWrapper>{" "}
    <ImageWrapper>
      <Img fluid={props.data.lang_quiz_2.childImageSharp.fluid} />
    </ImageWrapper>{" "}
    <LastImageWrapper>
      <Img fluid={props.data.lang_quiz_3.childImageSharp.fluid} />{" "}
    </LastImageWrapper>
    <h3>Todo List App</h3>
    <h4> What</h4>
    <p>I did a thing</p>
    <h4>Skills</h4>
    <p>What I learned doing the thing</p>
    <ImageWrapper>
      <Img fluid={props.data.todolist_1.childImageSharp.fluid} />{" "}
    </ImageWrapper>{" "}
    <LastImageWrapper>
      <Img fluid={props.data.todolist_2.childImageSharp.fluid} />
    </LastImageWrapper>
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
    ids_1: file(relativePath: { eq: "ids-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_2: file(relativePath: { eq: "ids-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_3: file(relativePath: { eq: "ids-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_4: file(relativePath: { eq: "ids-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_5: file(relativePath: { eq: "ids-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather_app_1: file(relativePath: { eq: "weather-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather_app_2: file(relativePath: { eq: "weather-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calculator_1: file(relativePath: { eq: "calculator-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lang_quiz_1: file(relativePath: { eq: "lang-quiz-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lang_quiz_2: file(relativePath: { eq: "lang-quiz-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lang_quiz_3: file(relativePath: { eq: "lang-quiz-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    todolist_1: file(relativePath: { eq: "todolist-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    todolist_2: file(relativePath: { eq: "todolist-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
