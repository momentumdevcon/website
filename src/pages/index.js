import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner } from '../components';
import metaContent from '../assets/data/metaContent.js';
import { convergys, cyberark, dynatrace, gaslight, kroger, max } from '../assets/images';

const sponsors = [kroger, gaslight, convergys, cyberark, dynatrace, max];

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
            Momentum is a Cincinnati developer conference dedicated to providing
            developers with great content for learning and success.
            Join us on March 21, 2019 at Sharonville Convention Center.
          </p>
        </article>
      </section>
      <section id="two" className="tiles">
        <article className="sponsorsArticle">
          <header className="major">
            <h3>Sponsors</h3>
          </header>
          <div className="sponsors">
            {sponsors.map(sponsor => (
              <div className="sponsorWrapper">
                <img src={sponsor} style={{ height: '100%', width: '200px' }} />
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  </Layout>
);

export default HomeIndex;
