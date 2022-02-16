import React from 'react';
import { InterestForm } from '.';
import '../assets/css/banner.css';

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Momentum Developer Conference</h1>
      </header>
      <div className="content">
        <p>Powered by The Circuit</p>
      </div>
      <p className="date" >October 20, 2022</p>
      <InterestForm />
    </div>
  </section>
);

export default Banner;
