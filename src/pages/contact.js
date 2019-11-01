import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactForm = styled.div`
  font-weight: 600;
  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    margin: 0.5rem 0 1rem 0;
    background-color: var(--bg);
    color: var(--textNormal);
    border: 2px solid var(--textNormal);
  }

  textarea {
    width: 100%;
    padding: 0.5rem 0.75rem;
    margin: 0.5rem 0 1.5rem 0;
    line-height: 1.5;
    background-color: var(--bg);
    color: var(--textNormal);
    border: 2px solid var(--textNormal);
  }

  button {
    width: 33%;
    height: 3rem;
    border: 2px solid var(--textLink);

    transition: color 0.1s ease, background-color 0.1s ease;

    &:hover {
      background-color: var(--accent);
      color: var(--textLink);
    }
  }

  input[type="reset"] {
    width: 33%;
    height: 3rem;
    font-weight: 600;
    margin: 0;
    color: var(--textNormal);
    background-color: var(--bg);
    border: 2px solid var(--textNormal);
    cursor: pointer;

    &:hover {
      background
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

const StyledATag = styled.a`
  padding: 0.25rem 0.1rem;
  font-weight: 600;

  background-image: linear-gradient(
    transparent 0%,
    transparent calc(50% - 0.5rem),
    var(--accent) calc(50% - 0.5rem),
    var(--accent) 100%
  );

  transition: background-position 120ms ease-in-out;
  background-size: 100% 230%;
  background-position: 0 0;

  &:hover {
    background-position: 0 100%;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact me</h1>
    <p>
      Let's talk! Please don't hesitate to{" "}
      <StyledATag
        href="mailto:erinfranmc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        send me an email
      </StyledATag>
      , or get in touch using the form below:
    </p>

    <ContactForm>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <label>
          Name
          <input type="text" name="name" id="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" required />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" required />
        </label>
        <div>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </div>
      </form>
    </ContactForm>
  </Layout>
)

export default ContactPage
