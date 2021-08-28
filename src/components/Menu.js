import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <Link to="/speakers">
        Speakers
      </Link>
    </li>
    <li>
      <Link to="/sessions">
        Sessions
      </Link>
    </li>
    <li>
      <Link to="/sponsors">
        Sponsors
      </Link>
    </li>
    <li>
      <Link to="/organizers">
        Organizers
      </Link>
    </li>
    <li>
      <Link to="https://ti.to/the-circuit/momentum" target='_blank' rel="noopener noreferrer">
        Tickets
      </Link>
    </li>
    <li>
      <Link to="/blog">
        Blog
      </Link>
    </li>
    <li>
      <Link to="/codeOfConduct">
        Code of Conduct
      </Link>
    </li>
  </ul>
)

Menu.propTypes = {
  menuState: PropTypes.string
}

export default Menu
