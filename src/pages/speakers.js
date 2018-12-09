import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from '../components';
import SpeakersList from '../components/SpeakersList';
// import pic11 from '../assets/images/pic11.jpg';

const SpeakersPage = () => (
  <Layout>
    <Helmet>
      <title>SpeakersPage - Forty by HTML5 UP</title>
      <meta name="description" content="SpeakersPage Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Speakers</h1>
          </header>
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
