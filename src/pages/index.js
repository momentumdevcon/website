import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner } from '../components';
import metaContent, { mainDescription } from '../assets/data/metaContent.js';
import { 
  ascendum,
  cbts,
  convergys,
  cyberark,
  dynatrace,
  eliassen,
  fifthThird,
  fusionalliance,
  gaslight,
  ge,
  ingage,
  kroger,
  luma,
  max,
  nexum,
  smartdata,
  sonatype,
  vaco
 } from '../assets/images';

const sponsors = [
  { img: kroger, link: 'https://www.kroger.com', alt: 'Kroger Sponsor Image' },
  { img: convergys, link: 'https://www.concentrix.com', alt: 'Concentrix Sponsor Image' },
  { img: ge, link: 'https://www.ge.com', alt: 'GE Sponsor Image' },
  { img: fifthThird, link: 'https://www.53.com', alt: '5/3 Sponsor Image' },
  { img: gaslight, link: 'https://teamgaslight.com', alt: 'Gaslight Sponsor Image' },
  { img: cyberark, link: 'https://www.cyberark.com', alt: 'Cyberark Sponsor Image' },
  { img: dynatrace, link: 'https://www.dynatrace.com', alt: 'Dynatrace Sponsor Image' },
  { img: max, link: 'https://maxtrain.com', alt: 'Maxtrain Sponsor Image' },
  { img: vaco, link: 'https://www.vaco.com', alt: 'Vaco Sponsor Image' },
  { img: ascendum, link: 'https://ascendum.com/', alt: 'Ascendum Sponsor Image' },
  { img: smartdata, link: 'https://smartdata.net/', alt: 'Smart Data Sponsor Image' },
  { img: fusionalliance, link: 'https://fusionalliance.com/', alt: 'Fusion Alliance Sponsor Image' },
  { img: luma, link: 'https://lumafintech.com/', alt: 'Luma Financial Technologies Sponsor Image' },
  { img: ingage, link: 'http://www.ingagepartners.com/', alt: 'Ingage Partners Sponsor Image' },
  { img: eliassen, link: 'https://www.eliassen.com/', alt: 'Eliassen Sponsor Image' },
  { img: sonatype, link: 'https://www.sonatype.com/', alt: 'Sonatype Sponsor Image' },
  { img: cbts, link: 'https://www.cbts.com/', alt: 'CBTS Sponsor Image' },
  { img: nexum, link: 'https://www.nexuminc.com/', alt: 'Nexum Sponsor Image' }
];

const HomeIndex = () => (
  <Layout>
    <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
    <Banner />
    <div id="main">
      <section id="one" className="tiles whatIsMomentumTiles">
        <article>
          <header className="major">
            <h3>What is Momentum?</h3>
          </header>
          <p>
            {mainDescription}
          </p>
          <header className="major">
            <h4>What does my ticket include?</h4>
          </header>
          <ul>
           <li>35 sessions of outstanding content presented by speakers from Cincinnati, the region, and around the globe</li>
           <li>Breakfast, lunch, and happy hour</li>
           <li>Refreshments throughout the day</li>
           <li>Connect and chat with some of Cincinnati's best developers</li>
          </ul>
        </article>
      </section>
      <section id="two" className="tiles">
        <article className="sponsorsArticle">
          <header className="major">
            <h3>Sponsors</h3>
          </header>
          <div className="sponsors">
            {sponsors.map(({ img, link, alt }) => (
              <div key={link} className="sponsorWrapper">
                <a href={link}  target="_blank" rel="noopener noreferrer">
                  <img src={img} style={{ height: '100%', width: '200px' }} alt={alt} />
                </a>
              </div>
            ))}
          </div>
          <p>
            Interested in becoming a sponsor? Email us at{' '}
            <a href="mailto:sponsors@momentumdevcon.com">sponsors@momentumdevcon.com</a>
          </p>
        </article>
      </section>
    </div>
  </Layout>
);

export default HomeIndex;
