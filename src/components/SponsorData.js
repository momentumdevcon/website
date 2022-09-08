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
      company: 'Cincinnati State',
      fileName: 'cincinnatiState.png',
      link: 'https://cincinnatistate.edu/',
    },
    {
      company: 'Progress',
      fileName: 'progress.png',
      link: 'https://www.progress.com/',
    },
    {
      company: 'RedHat',
      fileName: 'redHat.png',
      link: 'https://www.redhat.com/',
    },
    {
      company: 'Launch Scout',
      fileName: 'launchScout.jpg',
      link: 'https://www.launchscout.com/',
    },
  ],
  'Lunch/Break': [
    {
      company: 'alexa',
      fileName: 'alexa.png',
      link: 'https://developer.amazon.com/en-US/alexa'
    }
  ],
  Game: [],
  Booth: [
    { 
      company: 'Brooksource',
      fileName: 'brooksource.png',
      link: 'https://www.brooksource.com/'
    },
    {
      company: 'Cloverleaf',
      fileName: 'cloverleaf.png',
      link: 'https://www.cloverleaf.me'
    },
    {
      company: 'KentuckianaWorks',
      fileName: 'kentuckianaWorks.png',
      link: 'https://kentuckianaworks.org',
    },
    {
      company: 'Ingage Partners',
      fileName: 'ingage.png',
      link: 'https://www.ingagepartners.com/',
    },
    {
      company: 'Insight',
      fileName: 'insight.png',
      link: 'https://www.insight.com'
    },
    {
      company: 'MAX Technical Training',
      fileName: 'max.png',
      link: 'https://maxtrain.com/'
    },
    {
      company: 'Ascendum',
      fileName: 'ascendum.jpg',
      link: 'https://www.ascendum.com/',
    },
    {
      company: 'ATC',
      fileName: 'atc.png',
      link: 'https://www.4atc.com/',
    },
    {
      company: 'Vernovis',
      fileName: 'vernovis.png',
      link: 'https://www.vernovis.com/',
    },
  ],
  'Speaker Social': [],
  Lanyard: [
    { 
      company: 'Tech Elevator',
      fileName: 'tech-elevator.png',
      link: 'https://www.techelevator.com/'
    },
  ],
  'Community Partners': [
    {
      company: 'Cincinnati Software Craftsmanship',
      link: 'https://craftsmanship.dev/'
    },
    {
      company: 'CincyML',
      link: 'https://www.cincinnatiml.com/'
    },
    {
      company: 'CinJUG',
    },
    {
      company: 'getWITit',
      link: 'https://getwitit.org/'
    },
    {
      company: 'KCDC',
      link: 'https://www.kcdc.info/'
    },
    {
      company: 'Stir Trek',
      link: 'https://stirtrek.com/'
    },
    {
      company: 'Virtual Coffee',
      link: 'https://virtualcoffee.io/'
    },
    {
      company: 'Women Who Code',
      link: 'https://www.womenwhocode.com/cincinnati'
    },
  ],
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
