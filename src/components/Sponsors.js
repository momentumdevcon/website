import React from 'react';
import Img from 'gatsby-image'
import { sponsorData } from '.';

const tierOneSponsors = sponsorData.filter(
  sponsor => sponsor.sponsorshipTier === 1
)
const tierTwoSponsors = sponsorData.filter(
  sponsor => sponsor.sponsorshipTier === 2
)
const tierThreeSponsors = sponsorData.filter(
  sponsor => sponsor.sponsorshipTier === 3
)

const Sponsors = ({data}) => (
  <section id="two" className="tiles">
    <article className="sponsorsArticle">
      <header className="major">
        <h3>Top Sponsors</h3>
      </header>

      <div className="sponsors">
        {tierOneSponsors.map(({ name, fileName, link }) => (
          <div key={name} className="sponsorWrapper">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: '100%' }}
            >
              <Img
                fixed={
                  data.sponsorImages.edges.find(
                    n => n.node.relativePath === fileName
                  ).node.childImageSharp.image250
                }
                alt={name + ' Sponsor Image'}
              />
            </a>
          </div>
        ))}
      </div>
      <header className="major">
        <h3>Room Sponsors</h3>
      </header>
      <div className="sponsors">
        {tierTwoSponsors.map(({ name, fileName, link }) => (
          <div key={name} className="sponsorWrapper">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: '100%', width: '200px' }}
            >
              <Img
                fixed={
                  data.sponsorImages.edges.find(
                    n => n.node.relativePath === fileName
                  ).node.childImageSharp.image200
                }
                alt={name + ' Sponsor Image'}
              />
            </a>
          </div>
        ))}
      </div>
      <header className="major">
        <h3>Booth Sponsors</h3>
      </header>
      <div className="sponsors">
        {tierThreeSponsors.map(({ name, fileName, link }) => (
          <div key={name} className="sponsorWrapper">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: '100%', width: '200px' }}
            >
              <Img
                fixed={
                  data.sponsorImages.edges.find(
                    n => n.node.relativePath === fileName
                  ).node.childImageSharp.image150
                }
                alt={name + ' Sponsor Image'}
              />
            </a>
          </div>
        ))}
      </div>
      <p>
        Interested in becoming a sponsor? Email us at{' '}
        <a href="mailto:sponsors@momentumdevcon.com">
          sponsors@momentumdevcon.com
        </a>
      </p>
    </article>
  </section>
)

export default Sponsors;
