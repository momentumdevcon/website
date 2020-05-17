import React from 'react';
import { mainDescription } from '../assets/data/metaContent.js'

const WhatIsMomentum = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>
          What is Momentum?
        </h3>
      </header>
      <p>{mainDescription}</p>
      <header className="major">
        <h4>What does my ticket include?</h4>
      </header>
      <ul>
        <li>
          30+ sessions of outstanding content presented by speakers from
          Cincinnati, the region, and around the globe
        </li>
        <li>Breakfast and lunch</li>
        <li>Refreshments throughout the day</li>
        <li>
          Connect and chat with some of Cincinnati's best developers
        </li>
      </ul>
    </article>
  </section>
)

export default WhatIsMomentum;
