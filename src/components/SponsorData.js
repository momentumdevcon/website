import { graphql } from 'gatsby'
// Headlining, Room, Lunch or Break, Game Room, Booth, Speaker Social, Lanyard

export const sponsorData = {
  Headlining: [
    {
      company: 'Fifth Third Bank',
      fileName: 'fifthThird.png',
      link: 'https://www.53.com/content/fifth-third/en.html',
    }
  ],
  Room: [
    { 
      company: 'Tech Elevator',
      fileName: 'tech-elevator.png',
      link: 'https://www.techelevator.com/'
    },
    {
      company: 'Kroger',
      link: 'https://www.kroger.com/',
      fileName: 'kroger.png',
    }
  ],
  'Lunch/Break': [
    {
      company: 'Eliassen Group',
      fileName: 'eliassen.png',
      link: 'https://www.eliassen.com/'
    }
  ],
  Game: [],
  Booth: [
    {
      company: 'Ascendum',
      fileName: 'ascendum.jpg',
      link: 'https://www.ascendum.com/',
    },
    {
      company: 'MAX Technical Training',
      fileName: 'max.png',
      link: 'https://maxtrain.com/'
    }
  ],
  'Speaker Social': [],
  Lanyard: [],
  'Community Partners': [],
}

export const sponsorImage = graphql`fragment sponsorImage on File {
  childImageSharp {
    image125: gatsbyImageData(width: 125, placeholder: TRACED_SVG, layout: FIXED)
    image150: gatsbyImageData(width: 150, placeholder: TRACED_SVG, layout: FIXED)
    image175: gatsbyImageData(width: 175, placeholder: TRACED_SVG, layout: FIXED)
    image200: gatsbyImageData(width: 200, placeholder: TRACED_SVG, layout: FIXED)
    image250: gatsbyImageData(width: 250, placeholder: TRACED_SVG, layout: FIXED)
  }
}
`
