import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner, Tile } from '../components';
import tileContent from '../assets/data/tileContent.json';

const HomeIndex = () => (
  <Layout>
    <Helmet
      title="Momentum Developer Conference"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Banner />
    <div id="main">
      <section id="one" className="tiles">
        {tileContent.homePage.map(c => (
          <Tile header={c.header} content={c.content} />
        ))}
      </section>
    </div>
  </Layout>
);

export default HomeIndex;
