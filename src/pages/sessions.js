import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import SessionsList from '../components/SessionsList';
import metaContent from '../assets/data/metaContent.js';

const Sessions = () => (
  <Layout>
    <Helmet
      title="2021 Sessions - Momentum Dev Con"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="2021 Sessions" />

    <div id="main">
      <SessionsList />
    </div>
  </Layout>
);

export default Sessions;
