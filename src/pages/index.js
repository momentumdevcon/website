import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner } from '../components';
import metaContent from '../assets/data/metaContent.js';
import { convergys, cyberark, dynatrace, gaslight, kroger, max } from '../assets/images';

const sponsors = [
  { img: kroger, link: 'https://www.kroger.com' },
  { img: gaslight, link: 'https://teamgaslight.com' },
  { img: convergys, link: 'https://www.concentrix.com' },
  { img: cyberark, link: 'https://www.cyberark.com' },
  { img: dynatrace, link: 'https://www.dynatrace.com' },
  { img: max, link: 'https://maxtrain.com' },
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
            Momentum is a Cincinnati developer conference dedicated to providing developers with
            great content for learning and success. Join us on March 21, 2019 at Sharonville
            Convention Center.
          </p>
        </article>
      </section>
      <section id="two" className="tiles">
        <article className="sponsorsArticle">
          <header className="major">
            <h3>Sponsors</h3>
          </header>
          <div className="sponsors">
            {sponsors.map(({ img, link }) => (
              <div className="sponsorWrapper">
                <a href={link}>
                  <img src={img} style={{ height: '100%', width: '200px' }} />
                </a>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  </Layout>
);

export default HomeIndex;
