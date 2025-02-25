import React from 'react'
import { Icon } from './Icon'
import { Contact } from '../components/Contact'
import { socialIcons } from '../assets/data/socialIcons'
import logo from '../assets/circuit-logo.png'

export const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <Contact />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
        <div>
          <span className="hashtag">#MomentumDevCon</span>
          <ul className="icons">
            {socialIcons.footer.map(({ icon, label, link }) => (
              <li key={label}>
                <Icon icon={icon} label={label} link={link} size="lg" />
              </li>
            ))}
          </ul>
          <ul className="copyright">
            <li>Copyright &copy; Momentum Conference 2017-{new Date().getFullYear()}</li>
          </ul>
        </div>
        <img src={logo} alt="logo" className="logo icon" style={{ height: '100px' }} />
      </div>
    </div>
  </footer>
)
