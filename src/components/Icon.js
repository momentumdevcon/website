import React from 'react';
import classnames from 'classnames';

const upperCaseFirstLetter = word => word.replace(word.split('')[0], word.charAt(0).toUpperCase());

const Icon = ({ className, iconName, link }) =>
  (link ? (
    <a href={link} className={classnames(`icon alt fa-${iconName}`, { [className]: className })}>
      <span className="label">{upperCaseFirstLetter(iconName)}</span>
    </a>
  ) : (
    <i className={`icon alt fa-${iconName}`} style={{ padding: '10px !important' }} />
  ));

export default Icon;
