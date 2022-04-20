import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <a href="https://sessionize.com/momentum-2022">
        CFP
      </a>
    </li>
    <li>
      <a href="https://2021.momentumdevcon.com">
        2021 Conference
      </a>
    </li>
    <li>
      <Link to="/organizers">
        Organizers
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
