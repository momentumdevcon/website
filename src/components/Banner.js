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
      <p className="date">Thank you everyone for making Momentum 2019 amazing!</p>
    </div>
  </section>
);

export default Banner;
