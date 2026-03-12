import React from 'react'
import { Icon } from './Icon'
import { Contact } from '../components/Contact'
import { socialIcons } from '../assets/data/socialIcons'
import logo from '../assets/circuit-logo.png'
import '../assets/css/footer.css'

export const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <Contact />
      <div className="footer-content">
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
        <img src={logo} alt="logo" className="logo icon footer-logo" />
      </div>
    </div>
  </footer>
)
