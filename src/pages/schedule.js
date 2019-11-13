import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import { createMetaContent, mainTitle, mainDescription } from '../assets/data/metaContent.js';
import '../assets/css/schedule.css';

const pageTitle = "2019 Schedule - " + mainTitle;
const scheduleMeta = createMetaContent(pageTitle, mainDescription);

const SchedulePage = () => (
  <Layout>
    <Helmet
      title={pageTitle}
      meta={scheduleMeta}
    />

    <BannerLanding pageName="2019 Schedule" />

    <div id="main" className="alt">
      <div className="inner">
        <iframe className="schedule" title="Momentum Schedule" src="/schedule-iframe2.html" />
      </div>
    </div>
  </Layout>
);

export default SchedulePage;
