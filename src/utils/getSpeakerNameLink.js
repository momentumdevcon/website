import React from 'react';
import { Link } from 'gatsby';
import { getSpeakerSlug } from './getSpeakerSlug';

export const getSpeakerNameLink = (name) => (
  <Link to={`/speakers/${getSpeakerSlug(name)}`}>
    {name}
  </Link>
)