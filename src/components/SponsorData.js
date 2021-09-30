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
      company: 'Ascendum',
      fileName: 'ascendum.jpg',
      link: 'https://ascendum.com/',
    },
    {
      company: 'GE',
      fileName: 'ge.png',
      link: 'https://www.ge.com',
    },
    {
      company: 'DMG',
      fileName: 'dmg.png',
      link: 'https://divisionsmg.com',
    },
    {
      company: 'Cincinnati State',
      fileName: 'cincinnatiState.png',
      link: 'https://cincinnatistate.edu/',
    },
    {
      company: 'Callibrity',
      fileName: 'callibrity-2021.png',
      link: 'https://www.callibrity.com/',
    },
    {
      company: 'Progress',
      fileName: 'progress.png',
      link: 'https://www.telerik.com/',
    }
  ],
  'Lunch/Break': [
    {
      company: 'LUMA',
      fileName: 'luma.png',
      link: 'https://lumafintech.com/',
    }
  ],
  Game: [],
  Booth: [
    {
      company: 'Sentrilock',
      fileName: 'sentrilock.jpg',
      link: 'https://www.sentrilock.com/',
    },
    {
      company: 'Prosource',
      fileName: 'prosource.png',
      link: 'https://www.totalprosource.com/',
    },
    {
      company: 'McCracken',
      fileName: 'mcCrackenGroup.png',
      link: 'https://mccrackengrp.com/',
    },
    {
      company: 'Vernovis',
      fileName: 'vernovis.png',
      link: 'https://www.vernovis.com/',
    },
    {
      company: 'Eliassen Group',
      fileName: 'eliassen.png',
      link: 'https://www.eliassen.com/',
    },
    {
      company: 'Insight',
      fileName: 'insight.png',
      link: 'https://www.insight.com'
    },
    { 
      company: 'Tech Elevator',
      fileName: 'tech-elevator.png',
      link: 'https://www.techelevator.com/'
    },
    { 
      company: 'Sonatype',
      fileName: 'sonatype.png',
      link: 'https://www.sonatype.com/'
    }
  ],
  'Speaker Social': [],
  Lanyard: [
    {
      company: 'Cloverleaf',
      fileName: 'cloverleaf.png',
      link: 'https://www.cloverleaf.me'
    }
  ],
  'Community Partners': [
    {
      company: 'MAX Technical Training',
      link: 'https://maxtrain.com/'
    },
    {
      company: 'CinJUG',
    },
    {
      company: 'getWITit',
      link: 'https://getwitit.org/'
    },
    {
      company: 'Women Who Code',
      link: 'https://www.womenwhocode.com/cincinnati'
    },
    {
      company: 'Cincinnati Software Craftsmanship',
      link: 'https://craftsmanship.dev/'
    },
    {
      company: 'KCDC',
      link: 'https://www.kcdc.info/'
    },
    {
      company: 'Virtual Coffee',
      link: 'https://virtualcoffee.io/'
    },
    {
      company: 'Stir Trek',
      link: 'https://stirtrek.com/'
    },
    {
      company: 'CincyML',
      link: 'https://www.cincinnatiml.com/'
    },
  ],
  'Interested In Sponsoring?': [{
    company: 'Contact us to learn about our remaining sponsorship opportunities!'
  }],
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
