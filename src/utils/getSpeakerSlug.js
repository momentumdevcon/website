export const getSpeakerSlug = (name) =>
  name ? name.trim().split(/\s+/).join('_') : ''
