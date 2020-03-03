import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <Link to="/schedule">
        2019 Schedule
      </Link>
    </li>
    <li>
      <Link to="/speakers">
        2019 Speakers
      </Link>
    </li>
    <li>
      <Link to="/sessions">
        2019 Sessions
      </Link>
    </li>
    <li>
      <Link to="/organizers">
        Organizers
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
  menuState: PropTypes.bool
}

export default Menu
