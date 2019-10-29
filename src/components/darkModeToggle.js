// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { MdTonality } from "react-icons/md"

const Toggler = styled.div`
  font-size: 1.1rem;

  padding-bottom: 0.25rem;
  margin: 1rem 0.75rem 0.5rem 0.25rem;

  background-image: linear-gradient(to top, var(--accent) 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 120ms ease-in-out;

  &:hover {
    background-position: bottom;
  }

  @media (min-width: 360px) {
    font-size: 1.25rem;
    margin: 1rem 0.75rem 0.5rem 0.25rem;
  }

  @media (min-width: 415px) {
  }

  @media (min-width: 530px) {
    font-size: 1.75rem;
    height: 2.5rem;
    padding-top: 0.25rem;

    margin: 0.75rem 1rem 0.5rem 0.1rem;
  }
`
const ToggleLabel = styled.label`
  cursor: pointer;

  display: inline-block;
`
const Checkbox = styled.input`
  display: none;
`

const Toggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <Toggler>
        <ToggleLabel>
          <Checkbox
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          <MdTonality />
        </ToggleLabel>
      </Toggler>
    )}
  </ThemeToggler>
)

export default Toggle
