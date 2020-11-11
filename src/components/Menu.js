import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <Link to="/video-sessions">
        Video Sessions
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
  menuState: PropTypes.string
}

export default Menu
