import React from 'react';

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/momentumdevcon" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/momentumdevcon" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://join.slack.com/t/momentumdevcon/shared_invite/enQtMzMzMzA2MDQwNDAwLTk3MzE5ZDhjZjk1MmZmMzBiODYxOTI2OTczMzY0NTJhMDhiMDM5YzBiZDRiYTBlZWE1NWNiYjIzMDEwNjI1ODk"
            className="icon alt fa-slack"
          >
            <span className="label">Slack</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/momentumdevcon/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Untitled</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
