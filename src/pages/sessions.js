import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import SessionsList from '../components/SessionsList';
import metaContent from '../assets/data/metaContent.js';

const Sessions = () => (
  <Layout>
    <Helmet
      title="Sessions - Momentum Dev Con"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="Sessions" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Sed amet aliquam</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
            condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque
            lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc
            rhoncus condimentum sem. In efficitur ligula tate urna.
          </p>
        </div>
      </section>
      <SessionsList />
    </div>
  </Layout>
);

export default Sessions;
