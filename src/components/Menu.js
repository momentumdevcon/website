import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const registrationUrl = `https://www.thecircuit.net/the-circuit-events/#!event/2019/3/21/momentum-developer-apos-s-conference`

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
          <a onClick={props.onToggleMenu} href={registrationUrl} target="newtab">
            Register
          </a>
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
          <Link onClick={props.onToggleMenu} to="/organizers">
            Organizers
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
