import { graphql } from 'gatsby'
// Headlining, Room, Lunch or Break, Game Room, Booth, Speaker Social, Lanyard

export const sponsorData = {
  Headlining: [],
  Room: [
    {
      company: 'Fifth Third Bank',
      fileName: 'fifthThird.png',
      link: 'https://www.53.com/content/fifth-third/en.html',
    },
    {
      company: 'Cincinnati State',
      fileName: 'cincinnatiState.png',
      link: 'https://cincinnatistate.edu/',
    },
    {
      company: 'Encore Technologies',
      fileName: 'encore.png',
      link: 'https://encore.tech/',
    },
    {
      company: 'Golden Technology',
      fileName: 'golden_technology.png',
      link: 'https://goldenitinc.com/',
    },
  ],
  'Lunch/Break': [
    {
      company: 'Eliassen Group',
      fileName: 'eliassen.png',
      link: 'https://www.eliassen.com/',
    },
  ],
  Game: [],
  Booth: [
    {
      company: 'Ingage',
      fileName: 'ingage.png',
      link: 'https://www.ingagepartners.com/',
    },
    {
      company: 'Revel IT',
      fileName: 'revelit.png',
      link: 'https://www.revelit.com/',
    },
    {
      company: 'MAX Technical Training',
      fileName: 'max.png',
      link: 'https://maxtrain.com/',
    },
    {
      company: 'CGI',
      fileName: 'cgi.jpg',
      link: 'https://www.cgi.com/',
    },
    {
      company: 'Red Hawk',
      fileName: 'red_hawk.jpg',
      link: 'https://www.redhawk-tech.com/',
    },
  ],
  'Speaker Social': [],
  Lanyard: [],
  'Community Partners': [],
  Supporting: [],
  Beverage: [
    {
      company: 'TQL',
      fileName: 'tql.png',
      link: 'https://www.tql.com/',
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
