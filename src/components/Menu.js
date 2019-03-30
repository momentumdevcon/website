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
            Schedule
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/speakers">
            Speakers
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/sessions">
            Sessions
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/food">
            Food
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
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
