import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import metaContent from '../assets/data/metaContent.js';
import organizers from '../assets/data/organizers.json';
import organizerPhotos from '../assets/images/organizers';
import { BlueLogo } from '../assets/images';
import generateSocialLink from '../utils/generateSocialLink';
import formatName from '../utils/formatName';

const OrganizersPage = () => (
  <Layout>
    <Helmet
      title="Organizers - Momentum Dev Con"
      meta={[...metaContent]}
    />

    <BannerLanding pageName="Organizers" />

    <div id="main" className="alt">
      <section id="one" className="about">
        <div className="inner">
          <div className="speakerContainer">
            <article>
              {organizers.map((organizer) => (
                <div key={formatName(organizer.name)} className="speaker">
                  <header>
                    <h3 className="speakerName">{formatName(organizer.name)}</h3>
                  </header>
                  <img
                    alt={`${formatName(organizer.name)}`}
                    src={organizerPhotos[organizer.photo] || BlueLogo}
                    className={organizer.photo ? 'profilePic' : 'placeholder'}
                  />
                  <div className="speakerSocialIcons">
                    { organizer.links.map(link => generateSocialLink(link, 'speakerIcon')) }
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default OrganizersPage;
