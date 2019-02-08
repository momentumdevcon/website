const getSpeakerSlug = (firstName, lastName) => (
  `${firstName.split(' ').join('_')}_${lastName.split(' ').join('_')}`
);

export default getSpeakerSlug;