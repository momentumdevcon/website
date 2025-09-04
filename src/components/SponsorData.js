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
  ],
  'Lunch/Break': [
    {
      company: 'Eliassen Group',
      fileName: 'eliassen.png',
      link: 'https://www.eliassen.com/',
    },
    {
      company: 'Western & Southern',
      fileName: 'westernsouthern.jpg',
      link: 'https://www.westernsouthern.com/',
    }
  ],
  Game: [],
  Booth: [
    {
      company: 'Afidence',
      fileName: 'afidence.jpg',
      link: 'https://afidence.com/',
    },
    {
      company: 'Ingage',
      fileName: 'ingage.png',
      link: 'https://www.ingagepartners.com/',
    },
    {
      company: 'Encore Talent',
      fileName: 'encore.png',
      link: 'https://helloencore.com/',
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
      company: 'Agility Partners',
      fileName: 'agilitypartners.jpg',
      link: 'https://agilitypartners.io/',
    },
    
    
  ],
  Raffle: [
    {
    company: 'Cincinnati Zoo',
    fileName: 'zoo.jpg',
    link: 'https://cincinnatizoo.org/'
    },
    {
      company: 'American Sign Museum',
      fileName: 'asmlogo.png',
      link: 'https://www.americansignmuseum.org/'
    }
  ],
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
      image125: gatsbyImageData(width: 125, placeholder: TRACED_SVG, layout: FIXED)
      image150: gatsbyImageData(width: 150, placeholder: TRACED_SVG, layout: FIXED)
      image175: gatsbyImageData(width: 175, placeholder: TRACED_SVG, layout: FIXED)
      image200: gatsbyImageData(width: 200, placeholder: TRACED_SVG, layout: FIXED)
      image250: gatsbyImageData(width: 250, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
`
