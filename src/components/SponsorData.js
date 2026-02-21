import { graphql } from 'gatsby'
// Headlining, Room, Lunch or Break, Game Room, Booth, Speaker Social, Lanyard

export const sponsorData = {
  'Thought Leadership': [
    {
      company: 'Fifth Third',
      fileName: 'FifthThird.png',
      link: 'https://www.53.com/content/fifth-third/en.html',
    },
  ],
  'Experience': [
    {
      company: 'TQL',
      fileName: 'tql.png',
      link: 'https://www.tql.com/',
    },
  ],
  Booth: [
    {
      company: 'Afidence',
      fileName: 'afidence.jpg',
      link: 'https://afidence.com/',
    },
    {
      company: 'MAX Technical Training',
      fileName: 'max.png',
      link: 'https://maxtrain.com/',
    },


  ],
  "Platform": [
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
