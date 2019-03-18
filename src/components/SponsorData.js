import { graphql } from 'gatsby'

export const sponsors = [
  {
    name: 'Kroger',
    fileName: 'kroger.png',
    link: 'https://www.kroger.com',
  },
  {
    name: 'Concentrix',
    fileName: 'convergys.png',
    link: 'https://www.concentrix.com',
  },
  {
    name: 'GE',
    fileName: 'GE Logo.png',
    link: 'https://www.ge.com',
  },
  {
    name: 'Fifth Third',
    fileName: '53.png',
    link: 'https://www.53.com',
  },
  {
    name: 'Gaslight',
    fileName: 'gaslight.png',
    link: 'https://teamgaslight.com',
  },
  {
    name: 'Cyberark',
    fileName: 'cyberark.png',
    link: 'https://www.cyberark.com',
  },
  {
    name: 'Dynatrace',
    fileName: 'dynatrace.png',
    link: 'https://www.dynatrace.com',
  },
  {
    name: 'Maxtrain',
    fileName: 'max.png',
    link: 'https://maxtrain.com',
  },
  {
    name: 'Vaco',
    fileName: 'vaco.png',
    link: 'https://www.vaco.com',
  },
  {
    name: 'Ascendum',
    fileName: 'ascendum.png',
    link: 'https://ascendum.com/',
  },
  {
    name: 'Smart Data',
    fileName: 'smartdata.png',
    link: 'https://smartdata.net/',
  },
  {
    name: 'Fusion Alliance',
    fileName: 'fusionalliance.png',
    link: 'https://fusionalliance.com/',
  },
  {
    name: 'Luma Financial Technologies',
    fileName: 'luma.png',
    link: 'https://lumafintech.com/',
  },
  {
    name: 'Ingage Partners',
    fileName: 'ingage.png',
    link: 'http://www.ingagepartners.com/',
  },
  {
    name: 'Eliassen',
    fileName: 'eliassen.png',
    link: 'https://www.eliassen.com/',
  },
  {
    name: 'Sonatype',
    fileName: 'sonatype.png',
    link: 'https://www.sonatype.com/',
  },
  {
    name: 'CBTS',
    fileName: 'cbts.png',
    link: 'https://www.cbts.com/',
  },
  {
    name: 'Nexum',
    fileName: 'nexum.png',
    link: 'https://www.nexuminc.com/',
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
