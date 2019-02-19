import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import metaContent from '../assets/data/metaContent.js';

const SchedulePage = () => (
  <Layout>
    <Helmet
      title="Schedule - Momentum Developer Conference"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="Schedule" />

    <div id="main" className="alt">


     <section id="one">
        <div className="inner">
        <iframe style={{width:"100%", height:"5000px"}} scrolling="yes"  src="data:text/html,<script type='text/javascript' src='https://sessionize.com/api/v2/tl3o9lkp/view/gridtable'></script>" />
        </div>
      </section>
    </div>
  </Layout>
);

export default SchedulePage;
