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

  :hover {
    background-position: bottom;
  }

  :active {
    outline: none;
  }

  @media (min-width: 360px) {
    font-size: 1.25rem;
    margin: 1rem 0.75rem 0.5rem 0.25rem;
  }

  @media (min-width: 414px) {
    margin-right: 1rem;
  }

  @media (min-width: 600px) {
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

// Allows theme toggle to work with keyboard navigation when tabbed to
const manageKeyDown = e => {
  const checkbox = e.target.firstChild
  // If return key or spacebar was pressed, simulate a click on the checkbox, to change the theme
  if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode === 13) {
    checkbox.click()
  }
}
const Toggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <Toggler>
        <ToggleLabel tabIndex="0" onKeyDown={manageKeyDown}>
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
