import chevron from '../images/Chevrons-White-Background.png'
import logoWPadding from '../images/logo-with-padding.png'
import logo from '../images/bg.jpg'

export const mainTitle = 'Momentum Developer Conference'
export const mainDescription =
  'Momentum is a Cincinnati developer conference dedicated to providing developers with great content for learning and success. Join us on March 21, 2019 at Sharonville Convention Center.'

const commonMetaContent = [
  { name: 'description', property: 'og:description', content: mainDescription },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@momentumdevcon' },
  { name: 'twitter:description', content: mainDescription },
  { name: 'twitter:creator', content: '@momentumdevcon' },
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: logoWPadding, name: 'image' },
  { name: 'twitter:image', content: "https://deploy-preview-28--momentumdevcon.netlify.com/static/logo-with-padding-b2bf39356b1bfa234808747580f8b1c9.png" },
  { property: 'og:site_name', content: 'Momentum Developer Conference' },
]

const homeMetaContent = [
  { name: 'twitter:title', content: mainTitle },
  { property: 'og:title', content: mainTitle },
]

export function createMetaContent(title, description, image) {
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
