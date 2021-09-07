import React from 'react';
import { Link } from 'gatsby';

const CovidPolicyBlurb = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>COVID Policy</h3>
      </header>
      <p>
       COVID-19 continues to be a concern on the local and global stage, and Momentum is taking it very seriously.
       Please check out our <Link to="/covid">COVID Policy</Link> for more details.
      </p>
    </article>
  </section>
)

export default CovidPolicyBlurb;
