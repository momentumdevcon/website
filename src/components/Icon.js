import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const upperCaseFirstLetter = word => word.replace(word.split('')[0], word.charAt(0).toUpperCase());

const Icon = ({ className, icon, label, link, size }) =>
  (link ? (
    <a href={link} className={classnames('icon alt', { [className]: className })}>
      <FontAwesomeIcon icon={icon} size={size} />
      <span className="label">{upperCaseFirstLetter(label)}</span>
    </a>
  ) : (
    <FontAwesomeIcon icon={icon} size={size} className={classnames('icon alt', { [className]: className })} />
  ));

export default Icon;
