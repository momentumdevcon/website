import React from 'react';
import Icon from './Icon';
import socialIcons from '../assets/data/socialIcons.json';

const Footer = () => (
  <footer id="footer">
    <div className="inner">
    <span>#momentumdevcon</span>
      <ul className="icons">
        {socialIcons.footer.map(({ iconName, link }, i) => (
          <li key={i}>
            <Icon iconName={iconName} link={link} />
          </li>
        ))}
      </ul>
      <ul className="copyright">
        <li>Copyright &copy; Momentum Conference 2017-2019</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
