import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner, ContentBlock } from '../components';
import blockContent from '../assets/data/blockContent.json';

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
        {blockContent.homePage.map(c => (
          <ContentBlock className="homePageContent" header={c.header} content={c.content} />
        ))}
      </section>
    </div>
  </Layout>
);

export default HomeIndex;
