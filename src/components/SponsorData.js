import { graphql } from 'gatsby'
// Headlining, Room, Lunch or Break, Game Room, Booth, Speaker Social, Lanyard

export const sponsorData = {
  Headlining: [],
  Room: [
    {
      company: 'Ascendum',
      fileName: 'ascendum.png',
      link: 'https://ascendum.com/',
    },
    {
      company: 'DMG',
      fileName: 'dmg.png',
      link: 'https://divisionsmg.com/',
    },
    {
      company: 'GE',
      fileName: 'GE Logo.png',
      link: 'https://www.ge.com',
    },
  ],
  Lunch: [],
  Break: [],
  Game: [
    {
      company: 'Calibrity',
      fileName: 'callibrity.jpg',
      link: 'https://www.callibrity.com/',
    },
  ],
  Booth: [
    {
      company: 'Brooksource',
      fileName: 'brooksource.png',
      link: 'https://www.brooksource.com/',
    },
    {
      company: 'SentriLock',
      fileName: 'sentrilock.png',
      link: 'https://www.sentrilock.com/',
    },
  ],
  'Speaker Social': [],
  Lanyard: [],
}

export const sponsorImage = graphql`
  fragment sponsorImage on File {
    childImageSharp {
      image125: fixed(width: 125) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
      image150: fixed(width: 150) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
      image175: fixed(width: 175) {
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
