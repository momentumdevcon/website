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
        <iframe className="schedule" title="Momentum Schedule" src="data:text/html,<script type='text/javascript' src='https://sessionize.com/api/v2/tl3o9lkp/view/gridtable'></script>" />
      </div>
    </div>
  </Layout>
);

export default SchedulePage;
