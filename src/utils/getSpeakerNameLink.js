import React from 'react';
import { Link } from 'gatsby';
import { getSpeakerSlug } from './getSpeakerSlug';

export const getSpeakerNameLink = (name) => (
  <Link to={`/speakers/${getSpeakerSlug(name)}`}>
    {name}
  </Link>
)

// Output: "Ada", "Ada and Grace", "Ada, Grace and Radia"
export const getSpeakerNameLinks = (names) =>
  names.map((name, index) => (
    <React.Fragment key={name}>
      {index === 0 ? '' : index === names.length - 1 ? ' and ' : ', '}
      {getSpeakerNameLink(name)}
    </React.Fragment>
  ))
