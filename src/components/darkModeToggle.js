// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { MdTonality } from "react-icons/md"

const Toggler = styled.div`
  font-size: 1.1rem;

  margin: 0.75rem 0.75rem 0.5rem 0.25rem;

  transition: color 0.1s ease;
  &:hover {
    color: var(--textLinkHover);
  }

  @media (min-width: 360px) {
    font-size: 1.25rem;
    margin: 0.75rem 0.75rem 0.5rem 0.25rem;
  }

  @media (min-width: 415px) {
  }

  @media (min-width: 530px) {
    font-size: 1.75rem;
    margin: 0.75rem 1rem 0.25rem 0.25rem;
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
