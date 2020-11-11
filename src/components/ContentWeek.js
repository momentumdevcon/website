import React from 'react';
import { Link } from 'gatsby';

const ContentWeek = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>Content Week!</h3>
      </header>
      <p>
      Since you couldn't come to us this year, we're coming to you! Check out these 
        <Link to="/video-sessions"> interviews and recorded sessions </Link>
      from our team and guest speakers! We also have a new <Link to="/blog/metrics-that-matter">blog post!</Link>
      </p>
    </article>
  </section>
)

export default ContentWeek;
