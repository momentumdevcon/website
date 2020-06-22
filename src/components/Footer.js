import React from 'react'
import Icon from './Icon'
import Contact from '../components/Contact';
import socialIcons from '../assets/data/socialIcons.json'

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <Contact />
      <span className="hashtag">#MomentumDevCon</span>
      <ul className="icons">
        {socialIcons.footer.map(({ iconName, link }) => (
          <li key={iconName}>
            <Icon iconName={iconName} link={link} />
          </li>
        ))}
      </ul>
      <ul className="copyright">
        <li>Copyright &copy; Momentum Conference 2017-2020</li>
      </ul>
    </div>
  </footer>
)

export default Footer
