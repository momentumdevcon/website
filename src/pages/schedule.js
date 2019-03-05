import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import metaContent from '../assets/data/metaContent.js';
import '../assets/css/schedule.css';

const SchedulePage = () => (
  <Layout>
    <Helmet
      title="Schedule - Momentum Developer Conference"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="Schedule" />

    <div id="main" className="alt">
      <div className="inner">
        <iframe className="schedule" title="Momentum Schedule" src="/schedule-iframe.html" />
      </div>
    </div>
  </Layout>
);

export default SchedulePage;
