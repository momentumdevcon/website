import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <a href="https://ti.to/the-circuit/momentum-2022?source=menu" target='_blank' rel="noopener noreferrer">
        Tickets
      </a>
    </li>
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
      <a href="https://2021.momentumdevcon.com">
        2021 Conference
      </a>
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
