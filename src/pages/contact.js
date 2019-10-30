import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactForm = styled.form`
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
const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact me</h1>
    <p>Get in touch</p>

    <ContactForm method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <div>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </div>
    </ContactForm>
  </Layout>
)

export default ContactPage
