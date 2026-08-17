// Gatsby replaces GATSBY_* variables at build time for browser bundles.
export const whovaRegistrationUrl =
  // eslint-disable-next-line no-undef
  process.env.GATSBY_WHOVA_REGISTRATION_URL ||
  'https://whova.com/portal/registration/2ev2ReOea-5UJ4yBtC2-/'

export const ticketsAreAvailable = Boolean(whovaRegistrationUrl)

// Momentum 2026 ticket tiers, in sale order. Ranges are inclusive on both ends.
// Dates are plain YYYY-MM-DD strings rather than Date objects on purpose: `new Date('2026-08-17')`
// parses as UTC midnight, which lands on Aug 16 for anyone west of Greenwich. Comparing ISO
// strings lexicographically gives the right answer in every timezone.
export const ticketTiers = [
  { name: 'Early Bird', price: 199, start: '2026-07-20', end: '2026-08-16' },
  { name: 'General', price: 229, start: '2026-08-17', end: '2026-09-27' },
  { name: 'Late', price: 259, start: '2026-09-28', end: '2026-10-04' },
  { name: 'Procrastinator', price: 289, start: '2026-10-05', end: '2026-10-15' },
]

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

// '2026-07-20' -> 'Jul 20'. Avoids Date entirely, for the UTC reason above.
export const formatTierDate = (isoDate) => {
  const [, month, day] = isoDate.split('-')
  return `${MONTHS[Number(month) - 1]} ${Number(day)}`
}

// The visitor's local calendar date as YYYY-MM-DD. Not toISOString(), which converts to UTC
// and would flip the date for evening visitors in US timezones.
export const toLocalIsoDate = (date) => {
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

// The tier on sale on the given date, or undefined before/after the whole schedule.
export const findActiveTier = (isoDate) =>
  ticketTiers.find((tier) => tier.start <= isoDate && isoDate <= tier.end)
