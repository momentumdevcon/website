import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const Menu = ({ menuState }) => (
  <ul className={`menu-links${menuState}`}>
    <li>
      <Link to="/speakers">Speakers</Link>
    </li>
    <li>
      <Link to="/sessions">Sessions</Link>
    </li>
    <li>
      <Link to="/schedule">Schedule</Link>
    </li> 

    {/* <li>
      <Link to="/tickets">Tickets</Link>
    </li> */}

    <li>
      <Link to="/sponsors">Sponsors</Link>
    </li>
    {
    <li>
      <Link to="/food">Food</Link>
    </li> }
    <li>
      <Link to="/organizers">Organizers</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link to="/codeOfConduct">Code of Conduct</Link>
    </li>
    <li>
      <a href="https://2024.momentumdevcon.com">2024 Site</a>
    </li>
  </ul>
)

Menu.propTypes = {
  menuState: PropTypes.string,
}
