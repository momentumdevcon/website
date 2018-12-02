import React from 'react';

const upperCaseFirstLetter = word => word.replace(word.split('')[0], word.charAt(0).toUpperCase());

const Icon = ({ iconName, link }) =>
  (link ? (
    <a href={link} className={`icon alt fa-${iconName}`}>
      <span className="label">{upperCaseFirstLetter(iconName)}</span>
    </a>
  ) : (
    <i className={`icon alt fa-${iconName}`} />
  ));

export default Icon;
