import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/schedule">
            2019 Schedule
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/speakers">
            2019 Speakers
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/sessions">
            2019 Sessions
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/organizers">
            Organizers
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/codeOfConduct">
            Code of Conduct
          </Link>
        </li>
      </ul>
    </div>
    <button className="close" onClick={props.onToggleMenu}>
      Close
    </button>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
