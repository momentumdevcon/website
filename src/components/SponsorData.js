import { graphql } from 'gatsby'

export const sponsors = [
  {
    key: 'kroger',
    fileName: 'kroger.png',
    link: 'https://www.kroger.com',
    alt: 'Kroger Sponsor Image',
  },
  {
    key: 'convergys',
    fileName: 'convergys.png',
    link: 'https://www.concentrix.com',
    alt: 'Concentrix Sponsor Image',
  },
  {
    key: 'ge',
    fileName: 'GE Logo.png',
    link: 'https://www.ge.com',
    alt: 'GE Sponsor Image',
  },
  {
    key: 'fifthThird',
    fileName: '53.png',
    link: 'https://www.53.com',
    alt: '5/3 Sponsor Image',
  },
  {
    key: 'gaslight',
    fileName: 'gaslight.png',
    link: 'https://teamgaslight.com',
    alt: 'Gaslight Sponsor Image',
  },
  {
    key: 'cyberark',
    fileName: 'cyberark.png',
    link: 'https://www.cyberark.com',
    alt: 'Cyberark Sponsor Image',
  },
  {
    key: 'dynatrace',
    fileName: 'dynatrace.png',
    link: 'https://www.dynatrace.com',
    alt: 'Dynatrace Sponsor Image',
  },
  {
    key: 'max',
    fileName: 'max.png',
    link: 'https://maxtrain.com',
    alt: 'Maxtrain Sponsor Image',
  },
  {
    key: 'vaco',
    fileName: 'vaco.png',
    link: 'https://www.vaco.com',
    alt: 'Vaco Sponsor Image',
  },
  {
    key: 'ascendum',
    fileName: 'ascendum.png',
    link: 'https://ascendum.com/',
    alt: 'Ascendum Sponsor Image',
  },
  {
    key: 'smartdata',
    fileName: 'smartdata.png',
    link: 'https://smartdata.net/',
    alt: 'Smart Data Sponsor Image',
  },
  {
    key: 'fusionalliance',
    fileName: 'fusionalliance.png',
    link: 'https://fusionalliance.com/',
    alt: 'Fusion Alliance Sponsor Image',
  },
  {
    key: 'luma',
    fileName: 'luma.png',
    link: 'https://lumafintech.com/',
    alt: 'Luma Financial Technologies Sponsor Image',
  },
  {
    key: 'ingage',
    fileName: 'ingage.png',
    link: 'http://www.ingagepartners.com/',
    alt: 'Ingage Partners Sponsor Image',
  },
  {
    key: 'eliassen',
    fileName: 'eliassen.png',
    link: 'https://www.eliassen.com/',
    alt: 'Eliassen Sponsor Image',
  },
  {
    key: 'sonatype',
    fileName: 'sonatype.png',
    link: 'https://www.sonatype.com/',
    alt: 'Sonatype Sponsor Image',
  },
  {
    key: 'cbts',
    fileName: 'cbts.png',
    link: 'https://www.cbts.com/',
    alt: 'CBTS Sponsor Image',
  },
  {
    key: 'nexum',
    fileName: 'nexum.png',
    link: 'https://www.nexuminc.com/',
    alt: 'Nexum Sponsor Image',
  },
]

export const sponsorImage = graphql`
  fragment sponsorImage on File {
    childImageSharp {
      image200: fixed(width: 200) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`
