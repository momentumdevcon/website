export const mainTitle = 'Momentum Developer Conference'
export const mainDescription =
  'Momentum brings software developers together to sharpen skills, make connections, and geek out with impunity. After you’ve enjoyed our riveting presentations, we encourage you to visit the Banks, explore our microbreweries, or throw axes with friends. Momentum is more than a Cincinnati conference, it\'s a catapult for your career. Join the experience on October 15, 2021 at the Regency Hyatt, 151 W 5th St, Cincinnati, 45202.'

const logoWPadding = '/square-logo.png'

export const canonicalUrl = 'https://momentumdevcon.com'
const logoAbsoluteUrl = canonicalUrl + logoWPadding

const commonMetaContent = [
  { name: 'description', property: 'og:description', content: mainDescription },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@momentumdevcon' },
  { name: 'twitter:description', content: mainDescription },
  { name: 'twitter:creator', content: '@momentumdevcon' },
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: logoWPadding, name: 'image' },
  { name: 'twitter:image', content: logoAbsoluteUrl },
  { property: 'og:site_name', content: 'Momentum Developer Conference' },
]

const homeMetaContent = [
  { name: 'twitter:title', content: mainTitle },
  { property: 'og:title', content: mainTitle },
]

export function createMetaContent(title, description, imageOrNull) {
  const image = imageOrNull || logoAbsoluteUrl
  return [
    { name: 'description', property: 'og:description', content: description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:site', content: '@momentumdevcon' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@momentumdevcon' },
    { name: 'twitter:image', content: image },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: image, name: 'image' },
    { property: 'og:site_name', content: 'Momentum Developer Conference' },
    { property: 'og:title', content: title },
  ]
}

export default [...commonMetaContent, ...homeMetaContent]
