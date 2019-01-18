import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { BannerLanding, Layout } from '../components';
import SpeakersList from '../components/SpeakersList';
import metaContent from '../assets/data/metaContent.js';

const SpeakersPage = () => (
  <Layout>
    <Helmet
      title="Speakers - Momentum Dev Con"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="Speakers">
      <Link to="/schedule">
        <p>Schedule is now live!</p>
      </Link>
    </BannerLanding>

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
