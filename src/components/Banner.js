import React from 'react';

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Momentum Developer Conference</h1>
      </header>
      <div className="content">
        <p>Presented by The Circuit</p>
        {/* <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul> */}
      </div>
      <a href="https://www.thecircuit.net/the-circuit-events/#!event/2019/3/21/momentum-developer-apos-s-conference">
        Early registration is now open!
      </a>
    </div>
  </section>
);

export default Banner;
