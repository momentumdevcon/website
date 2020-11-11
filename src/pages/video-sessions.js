import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import VideoSessions from '../components/VideoSessions';
import metaContent from '../assets/data/metaContent.js';

const VideoSessionsPage = () => (
  <Layout>
    <Helmet
      title="2020 Video Sessions - Momentum Dev Con"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="2020 Video Sessions" />

    <div id="main">
      <VideoSessions />
    </div>
  </Layout>
);

export default VideoSessionsPage;
