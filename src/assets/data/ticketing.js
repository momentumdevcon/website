// Gatsby replaces GATSBY_* variables at build time for browser bundles.
export const whovaRegistrationUrl =
  // eslint-disable-next-line no-undef
  process.env.GATSBY_WHOVA_REGISTRATION_URL ||
  'https://whova.com/portal/registration/2ev2ReOea-5UJ4yBtC2-/'

export const ticketsAreAvailable = Boolean(whovaRegistrationUrl)
