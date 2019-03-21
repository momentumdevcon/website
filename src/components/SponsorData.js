import { graphql } from 'gatsby'

export const sponsors = [
  {
    name: 'Kroger',
    fileName: 'kroger.png',
    link: 'https://www.kroger.com',
    sponsorshipTier: 1
  },
  {
    name: 'Concentrix',
    fileName: 'convergys.png',
    link: 'https://www.concentrix.com',
    sponsorshipTier: 1
  },
  {
    name: 'GE',
    fileName: 'GE Logo.png',
    link: 'https://www.ge.com',
    sponsorshipTier: 1
  },
  {
    name: 'Fifth Third',
    fileName: '53.png',
    link: 'https://www.53.com',
    sponsorshipTier: 1
  },
  {
    name: 'Gaslight',
    fileName: 'gaslight.png',
    link: 'https://teamgaslight.com',
    sponsorshipTier: 2
  },
  {
    name: 'Cyberark',
    fileName: 'cyberark.png',
    link: 'https://www.cyberark.com',
    sponsorshipTier: 2
  },
  {
    name: 'Dynatrace',
    fileName: 'dynatrace.png',
    link: 'https://www.dynatrace.com',
    sponsorshipTier: 2
  },
  {
    name: 'Maxtrain',
    fileName: 'max.png',
    link: 'https://maxtrain.com',
    sponsorshipTier: 3
  },
  {
    name: 'Vaco',
    fileName: 'vaco.png',
    link: 'https://www.vaco.com',
    sponsorshipTier: 2
  },
  {
    name: 'Ascendum',
    fileName: 'ascendum.png',
    link: 'https://ascendum.com/',
    sponsorshipTier: 2
  },
  {
    name: 'Smart Data',
    fileName: 'smartdata.png',
    link: 'https://smartdata.net/',
    sponsorshipTier: 3
  },
  {
    name: 'Fusion Alliance',
    fileName: 'fusionalliance.png',
    link: 'https://fusionalliance.com/',
    sponsorshipTier: 3
  },
  {
    name: 'Luma Financial Technologies',
    fileName: 'luma.png',
    link: 'https://lumafintech.com/',
    sponsorshipTier: 3
  },
  {
    name: 'Ingage Partners',
    fileName: 'ingage.png',
    link: 'http://www.ingagepartners.com/',
    sponsorshipTier: 3
  },
  {
    name: 'Eliassen',
    fileName: 'eliassen.png',
    link: 'https://www.eliassen.com/',
    sponsorshipTier: 3
  },
  {
    name: 'Sonatype',
    fileName: 'sonatype.png',
    link: 'https://www.sonatype.com/',
    sponsorshipTier: 3
  },
  {
    name: 'CBTS',
    fileName: 'cbts.png',
    link: 'https://www.cbts.com/',
    sponsorshipTier: 3
  },
  {
    name: 'Nexum',
    fileName: 'nexum.png',
    link: 'https://www.nexuminc.com/',
    sponsorshipTier: 3
  },
]

export const sponsorImage = graphql`
  fragment sponsorImage on File {
    childImageSharp {
      image150: fixed(width: 150) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
      image200: fixed(width: 200) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
      image250: fixed(width: 250) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`
