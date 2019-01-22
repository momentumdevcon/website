import React from 'react';
import '../assets/css/banner.css';

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
            href="https://www.thecircuit.net/the-circuit-events/#!event/2019/3/21/momentum-developer-apos-s-conference" 
            className="button next scrolly"
          >
            Early registration tickets
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Banner;
