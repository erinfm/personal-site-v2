import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { FiExternalLink } from "react-icons/fi"

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 4px solid var(--textLink);
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const ProjectTitle = styled.h2`
  margin-bottom: 0;
`

const Subtitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`

const LinksDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 530px) {
    justify-content: flex-start;
  }
`
const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.6rem 1.75rem;

  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  cursor: pointer;

  border: none;

  color: var(--bg);
  background-color: var(--textLink);
  transition: background-color 0.4 ease;

  &:hover {
    background-color: var(--textLinkHover);
  }

  @media (min-width: 530px) {
    padding: 0.75rem 2.2rem;
    margin-right: 2rem;
  }
`

const SourceCodeLink = styled(ProjectLink)`
  padding: 0.6rem 1rem;
  margin-right: 0;

  @media (min-width: 530px) {
    padding: 0.75rem 1.45rem;
  }
`

const LinkName = styled.span`
  margin-right: 0.5rem;
`

const ProjectsPage = props => (
  <Layout>
    <SEO title="Projects" />
    <h1>My Projects</h1>
    <ProjectTitle>IDSMedia App</ProjectTitle>
    <Subtitle>Contract work with Laforja Sistemas</Subtitle>
    <ImageWrapper>
      <Img
        fluid={props.data.ids_1.childImageSharp.fluid}
        alt="IDSMedia app: Users panel"
      />
    </ImageWrapper>
    <ImageWrapper>
      <Img
        fluid={props.data.ids_2.childImageSharp.fluid}
        alt="IDSMedia app: Users panel with permissions modal"
      />
    </ImageWrapper>
    <h3>What</h3>
    <p>
      I developed the Administration dashboard for the company's digital signage
      platform.
    </p>
    <p>
      Using JavaScript, I learned to use an inhouse framework/templating engine,
      working with a REST API and HTTP requests to implement a full CRUD
      functionality.
    </p>
    <p>
      The logged in user can create, edit and delete data across multiple
      control panels.
    </p>
    <p>
      I followed provided mockups and design guides to create the UI using CSS.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>
        Vanilla JavaScript: DOM API, array/string manipulation, error handling,
        working with JSON data, asynchronous JavaScript, real-time search
        filtering
      </li>
      <li>REST APIs, HTTP requests, jQuery Ajax</li>
      <li>Forms, and client-side form validation</li>
      <li>
        CSS and Flexbox, including creating modals, dropdowns, custom checkboxes
        and toggles
      </li>
      <li>Git and Version Control</li>
      <li>Testing and debugging</li>
      <li>Cross-Browser Development (including IE11)</li>
    </ul>
    <ImageWrapper>
      <Img
        fluid={props.data.ids_3.childImageSharp.fluid}
        alt="IDSMedia app: Displays panel"
      />
    </ImageWrapper>
    <ImageWrapper>
      <Img
        fluid={props.data.ids_4.childImageSharp.fluid}
        alt="IDSMedia app: Displays panel with search filter active"
      />
    </ImageWrapper>
    <ImageWrapper>
      <Img
        fluid={props.data.ids_5.childImageSharp.fluid}
        alt="IDSMedia app: Formats panel"
      />
    </ImageWrapper>
    <Divider />
    <h2>React Calculator</h2>
    <ImageWrapper>
      <Img
        fluid={props.data.calculator_1.childImageSharp.fluid}
        alt="Screenshot of calculator app using React"
      />
    </ImageWrapper>
    <LinksDiv>
      <ProjectLink
        href="https://erinfm-react-calc.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkName>View App</LinkName>
        <FiExternalLink />
      </ProjectLink>
      <SourceCodeLink
        href="https://github.com/erinfm/react-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkName>Source Code</LinkName>
        <FiExternalLink />
      </SourceCodeLink>
    </LinksDiv>
    <h3> What</h3>
    <p>
      To put my React studies into practice, I made this responsive calculator
      app. The user can enjoy a wide variety of calculator fun, including
      support for parentheses and negative numbers. The app is fully mobile
      responsive, and previous calculations are stored using localStorage.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>JSX</li>
      <li>React component creation</li>
      <li>State management</li>
      <li>Props</li>
      <li>Lifecycle methods</li>
      <li>Create-react-app and npm</li>
      <li>Web Storage API: localStorage</li>
      <li>Responsive web design using media queries</li>
      <li>Deployment using Netlify</li>
    </ul>
    <Divider />
    <h2>Language Quiz App</h2>
    <ImageWrapper>
      <Img
        fluid={props.data.lang_quiz_1.childImageSharp.fluid}
        alt="Screenshot of mobile version of Language Quiz app"
      />
    </ImageWrapper>
    <LinksDiv>
      <ProjectLink
        href="https://language-quiz-erinfm.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkName>View App</LinkName>
        <FiExternalLink />
      </ProjectLink>
      <SourceCodeLink
        href="https://github.com/erinfm/language-word-guesser-new"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkName>Source Code</LinkName>
        <FiExternalLink />
      </SourceCodeLink>
    </LinksDiv>
    <h3> What</h3>
    <p>
      To reinforce my vanilla JavaScript skills, I made this language vocabulary
      quiz app. The user chooses between three different languages and topics,
      and then has one minute to answer questions.
    </p>
    <p>
      As I wanted to try out using CSS frameworks and preprocessors, I used
      Bulma and Sass for the styling.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>JavaScript ES6: Arrow functions, template literals</li>
      <li>DOM manipulation and event listeners</li>
      <li>
        JavaScript timing events: setTimeout(), setInterval(), clearInterval()
      </li>
      <li>JavaScript Math object: Math.random(), Math.floor(</li>
      <li>Mobile responsive design</li>
      <li>CSS animation</li>
    </ul>
    <ImageWrapper>
      <Img
        fluid={props.data.lang_quiz_2.childImageSharp.fluid}
        alt="Screenshot of desktop version of Language Quiz app: Welcome screen"
      />
    </ImageWrapper>
    <ImageWrapper>
      <Img
        fluid={props.data.lang_quiz_3.childImageSharp.fluid}
        alt="Screenshot of desktop version of Language Quiz app: Quiz screen"
      />
    </ImageWrapper>
    <Divider />
    <h2>Weather App</h2>
    <ImageWrapper>
      <Img
        fluid={props.data.weather_app_1.childImageSharp.fluid}
        alt="Screenshot of weather app: Welcome screen"
      />
    </ImageWrapper>
    <SourceCodeLink
      href="https://github.com/erinfm/weather-app-new"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkName>Source Code</LinkName>
      <FiExternalLink />
    </SourceCodeLink>
    <h3> What</h3>
    <p>
      I made this weather app to look at different methods of obtaining and
      manipulating data from external APIs, as well as trying out different ways
      of working with asynchronous code.
    </p>
    <p>
      The app takes a user input, and returns a list of matching cities by
      sending a request to the OpenWeatherMap API.
    </p>
    <p>
      Once the user selects a city, calls are made to OpenWeatherMap for the
      current weather, and TimeZoneDB API for the local time and date in the
      chosen city.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>HTTP requests to REST APIs using Fetch API and promises</li>
      <li>Asynchronous JavaScript with async/await syntax and callbacks</li>
      <li>Higher-order functions: Map and filter</li>
      <li>
        Mobile responsive CSS with media queries, modals, transition effects
      </li>
    </ul>
    <ImageWrapper>
      <Img
        fluid={props.data.weather_app_2.childImageSharp.fluid}
        alt="Screenshot of weather app: Results screen"
      />
    </ImageWrapper>
    <Divider />
    <h2>Portfolio Site</h2>
    <SourceCodeLink
      //TODO: Add correct portfolio site domain
      href="https://github.com/erinfm/personal-site-v2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkName>Source Code</LinkName>
      <FiExternalLink />
    </SourceCodeLink>
    <h3> What</h3>
    <p>
      As I wanted a fast-performing personal site, I decided to leverage my
      React skills and use Gatsby, a static site generator that lets you build
      your application with React components. I designed the site with a
      mobile-first philosophy, first creating Adobe XD mockups, and then writing
      the CSS from scratch using Styled Components.
    </p>
    <p>
      It was a great oppportunity to learn more about Progressive Web Apps,
      including manifest files and service workers. I also learned how to use
      the GraphQL query language to access my data.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>CSS-in-JS: Styled Components</li>
      <li>GraphQL</li>
      <li>Gatsby APIs: including Gatsby Link and Gatsby Image</li>
      <li>Contact forms</li>
      <li>Dark mode</li>
      <li>Mockup creation using Adobe XD</li>
      <li>Continuous deployment using Netlify</li>
    </ul>
    <Divider />
    <h2>Todo List App</h2>
    <ImageWrapper>
      <Img
        fluid={props.data.todolist_1.childImageSharp.fluid}
        alt="Screenshot of todo list app on desktop"
      />
    </ImageWrapper>
    <LinksDiv>
      <ProjectLink
        href="https://erinfm-todo-list.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkName>View App</LinkName>
        <FiExternalLink />
      </ProjectLink>
      <SourceCodeLink
        href="https://github.com/erinfm/to-do-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkName>Source Code</LinkName>
        <FiExternalLink />
      </SourceCodeLink>
    </LinksDiv>
    <h3> What</h3>
    <p>
      Do you have a lot to do? Then try this mobile responsive todo list app! I
      used HTML, CSS and JavaScript to create a classic todo app, with the data
      persisting through localStorage.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>JavaScript Date object</li>
      <li>localStorage</li>
      <li>Data attributes</li>
      <li>Regex</li>
      <li>Forms</li>
      <li>Custom CSS checkboxes</li>
      <li>CSS Grid and Flexbox</li>
    </ul>
    <ImageWrapper>
      <Img
        fluid={props.data.todolist_2.childImageSharp.fluid}
        alt="Screenshot of todo list app on mobile"
      />
    </ImageWrapper>
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
    ids_1: file(relativePath: { eq: "ids-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_2: file(relativePath: { eq: "ids-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_3: file(relativePath: { eq: "ids-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_4: file(relativePath: { eq: "ids-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ids_5: file(relativePath: { eq: "ids-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather_app_1: file(relativePath: { eq: "weather-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather_app_2: file(relativePath: { eq: "weather-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calculator_1: file(relativePath: { eq: "calculator-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lang_quiz_1: file(relativePath: { eq: "lang-quiz-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lang_quiz_2: file(relativePath: { eq: "lang-quiz-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lang_quiz_3: file(relativePath: { eq: "lang-quiz-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    todolist_1: file(relativePath: { eq: "todolist-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    todolist_2: file(relativePath: { eq: "todolist-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
