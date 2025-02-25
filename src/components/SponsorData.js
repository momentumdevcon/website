import { graphql } from 'gatsby'
// Headlining, Room, Lunch or Break, Game Room, Booth, Speaker Social, Lanyard

export const sponsorData = {
  Headlining: [],
  Room: [],
  'Lunch/Break': [],
  Game: [],
  Booth: [],
  'Speaker Social': [],
  Lanyard: [],
  Supporting: [],
  Beverage: [],
  'After Party': [],
  'Community Partners': [],
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
