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
      <SessionsList />
    </div>
  </Layout>
);

export default Sessions;
