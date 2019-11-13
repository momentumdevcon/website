import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import SpeakersList from '../components/SpeakersList';
import metaContent from '../assets/data/metaContent.js';

const SpeakersPage = () => (
  <Layout>
    <Helmet
      title="2019 Speakers - Momentum Dev Con"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="2019 Speakers" />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <SpeakersList />
        </div>
      </section>
    </div>
  </Layout>
);

export default SpeakersPage;
