import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { BannerLanding, Layout } from '../components';
import SpeakersList from '../components/SpeakersList';

// import pic11 from '../assets/images/pic11.jpg';

const SpeakersPage = () => (
  <Layout>
    <Helmet>
      <title>Speakers - Momentum Dev Con</title>
      <meta name="description" content="SpeakersPage Page" />
    </Helmet>

    <BannerLanding pageName="Speakers">
      <Link to="/schedule">
        <p>Schedule is now live!</p>
      </Link>
    </BannerLanding>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          {/* <span className="image main">
            <img src={pic11} alt="" />
          </span> */}
          <SpeakersList />
        </div>
      </section>
    </div>
  </Layout>
);

export default SpeakersPage;
