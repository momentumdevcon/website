import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner, ContentBlock } from '../components';
import blockContent from '../assets/data/blockContent.json';
import metaContent from '../assets/data/metaContent.js';
import { convergys, cyberark, dynatrace, gaslight, kroger, max } from '../assets/images';

const sponsors = [kroger, gaslight, convergys, cyberark, dynatrace, max];

const HomeIndex = () => (
  <Layout>
    <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
    <Banner />
    <div id="main">
      <section id="one" className="tiles whatIsMomentumTiles">
        {blockContent.homePage.map(c => (
          <ContentBlock className="homePageContent" header={c.header} content={c.content} />
        ))}
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
