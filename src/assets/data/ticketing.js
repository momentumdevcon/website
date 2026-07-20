// Gatsby replaces GATSBY_* variables at build time for browser bundles.
// eslint-disable-next-line no-undef
export const whovaRegistrationUrl = process.env.GATSBY_WHOVA_REGISTRATION_URL || ''

export const ticketsAreAvailable = Boolean(whovaRegistrationUrl)
