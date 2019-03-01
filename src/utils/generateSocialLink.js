import React from 'react';
import Icon from '../components/Icon';

const generateSocialLink = (link, className) => {
  const types = {
    Twitter: 'twitter',
    LinkedIn: 'linkedin-square',
    Blog: 'rss',
    Company_Website: 'building-o'
  }

  const iconType = types[link.linkType] || '';
  const socialIcon = iconType ?
    <Icon
      key={iconType}
      className={className}
      iconName={iconType}
      link={link.url}
    />
    :
    '';

  return socialIcon
};

export default generateSocialLink;