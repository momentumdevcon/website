import React from 'react';
import { Link } from 'gatsby';

const Tile = ({
  header, content, image, link,
}) => (
  <React.Fragment>
    <section id="one" className="tiles">
      <article style={image && { backgroundImage: `url(${image})` }}>
        <header className="major">
          <h3>{header}</h3>
          {content.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </header>
        {link && <Link to="/landing" className="link primary" />}
      </article>
    </section>
  </React.Fragment>
);

export default Tile;
