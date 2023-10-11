import { graphql } from 'gatsby'
// Headlining, Room, Lunch or Break, Game Room, Booth, Speaker Social, Lanyard

export const sponsorData = {
  Headlining: [
    {
      company: 'Fifth Third Bank',
      fileName: 'fifthThird.png',
      link: 'https://www.53.com/content/fifth-third/en.html',
    },
    {
      company: 'Veeva',
      fileName: 'veeva.jpg',
      link: 'https://www.veeva.com/',
    },
  ],
  Room: [
    {
      company: 'Tech Elevator',
      fileName: 'tech-elevator.png',
      link: 'https://www.techelevator.com/',
    },
    {
      company: 'Kroger',
      link: 'https://www.kroger.com/',
      fileName: 'kroger.png',
    },
    {
      company: 'Western & Southern',
      link: 'https://www.westernsouthern.com/',
      fileName: 'western_southern.png',
    },
    {
      company: 'Cincinnati State',
      fileName: 'cincinnatiState.png',
      link: 'https://cincinnatistate.edu/',
    },
  ],
  'Lunch/Break': [
    {
      company: 'Eliassen Group',
      fileName: 'eliassen.png',
      link: 'https://www.eliassen.com/',
    },
    {
      company: 'CBTS',
      fileName: 'cbts.png',
      link: 'https://www.cbts.com/',
    },
  ],
  Game: [],
  Booth: [
    {
      company: 'Ascendum',
      fileName: 'ascendum.jpg',
      link: 'https://www.ascendum.com/',
    },
    {
      company: 'CGI',
      fileName: 'cgi.jpg',
      link: 'https://www.cgi.com/',
    },
    {
      company: 'Checkpoint',
      fileName: 'checkpoint.jpg',
      link: 'https://www.checkpoint.com/',
    },
    {
      company: 'MAX Technical Training',
      fileName: 'max.png',
      link: 'https://maxtrain.com/',
    },
    {
      company: 'Insight',
      fileName: 'insight.png',
      link: 'https://www.insight.com',
    },
    {
      company: 'Burtch Works',
      fileName: 'burtchworks.jpg',
      link: 'https://www.burtchworks.com/',
    },
    {
      company: 'Revel IT',
      fileName: 'revelit.png',
      link: 'https://www.revelit.com/',
    },
    {
      company: 'Ingage',
      fileName: 'ingage.png',
      link: 'https://www.ingagepartners.com/',
    },
    {
      company: 'Experis',
      fileName: 'experis.png',
      link: 'https://www.experis.com',
    },
  ],
  'Speaker Social': [],
  Lanyard: [],
  'Community Partners': [],
  Supporting: [
    {
      company: 'Nx',
      fileName: 'nx.png',
      link: 'https://nx.dev',
    },
  ],
}

export const sponsorImage = graphql`
  fragment sponsorImage on File {
    childImageSharp {
      image125: gatsbyImageData(
        width: 125
        placeholder: TRACED_SVG
        layout: FIXED
      )
      image150: gatsbyImageData(
        width: 150
        placeholder: TRACED_SVG
        layout: FIXED
      )
      image175: gatsbyImageData(
        width: 175
        placeholder: TRACED_SVG
        layout: FIXED
      )
      image200: gatsbyImageData(
        width: 200
        placeholder: TRACED_SVG
        layout: FIXED
      )
      image250: gatsbyImageData(
        width: 250
        placeholder: TRACED_SVG
        layout: FIXED
      )
    }
  }
`
