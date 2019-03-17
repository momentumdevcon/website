import React from 'react';
import '../assets/css/banner.css';
import { registrationUrl } from './Menu'

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Momentum Developer Conference</h1>
      </header>
      <div className="content">
        <p>Presented by The Circuit</p>
      </div>
      <p className="date">March 21, 2019</p>
      <ul className="actions">
        <li>
          <a 
            href={ registrationUrl } 
            className="button next scrolly"
            target="newtab"
          >
            Register for Momentum 2019
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Banner;
