import React from 'react';
import Icon from '../components/Icon';

const generateSocialLink = (link, className) => {
  const types = {
    Twitter: 'twitter',
    LinkedIn: 'linkedin-square'
  }

  const iconType = types[link.linkType] || ''; // TODO: Need to map the rest of the icontypes to the FA icons

  return (
    <Icon
      key={iconType}
      className={className}
      iconName={iconType}
      link={link.url}
    />
  )
};

export default generateSocialLink;