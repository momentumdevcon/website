import React from 'react';
import { Link } from 'gatsby';

const ContentBlock = ({
  header, subHeader, content, image, link,
}) => (
  <React.Fragment>
    <article>
      <header className="major">
        <h3>{header}</h3>
        {subHeader ? <p>{subHeader}</p> : ''}
      </header>
      {content && (
        <ul>
          {content.map((c, i) => (
            <li key={`${header}-${i}`}>{c}</li>
          ))}
        </ul>
      )}
      {image && (
        <img
          src={`${image}`}
          style={{
            height: '200px',
            width: '200px',
          }}
          alt=""
        />
      )}
      {link && <Link to="/landing" className="link primary" />}
    </article>
  </React.Fragment>
);

export default ContentBlock;
