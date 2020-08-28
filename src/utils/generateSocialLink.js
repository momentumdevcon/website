import React from 'react';
import Icon from '../components/Icon';
import { faRss, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const generateSocialLink = (link, className) => {
  const types = {
    Twitter: faTwitter,
    LinkedIn: faLinkedin,
    Blog: faRss,
    Company_Website: faBuilding 
  }

  const iconType = types[link.linkType] || '';
  const socialIcon = iconType ?
    <Icon
      key={link.linkType}
      className={className}
      icon={iconType}
      label={link.linkType === 'Company_Website' ? 'Website' : link.linkType}
      link={link.url}
      size="sm"
    />
    :
    '';

  return socialIcon
};

export default generateSocialLink;