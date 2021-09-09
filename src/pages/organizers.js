import React from 'react';
import { Wrapper } from '../components';
import organizers from '../assets/data/organizers.json';
import organizerPhotos from '../assets/images/organizers';
import { BlueLogo } from '../assets/images';
import generateSocialLink from '../utils/generateSocialLink';

const OrganizersPage = () => (
  <Wrapper title="Organizers">
    <div id="main" className="alt">
      <section id="one" className="about">
        <div className="inner">
          <div className="speakerContainer">
            <article>
              {
                organizers
                  .map((organizer) => (
                    <div key={organizer.name} className="speaker">
                      <header>
                        <h3 className="speakerName">{organizer.name}</h3>
                      </header>
                      <img
                        alt={organizer.name}
                        src={organizerPhotos[organizer.photo] || BlueLogo}
                        className={organizer.photo ? 'profilePic' : 'placeholder'}
                      />
                      <div className="speakerSocialIcons">
                        { organizer.links.map(link => generateSocialLink(link, 'speakerIcon')) }
                      </div>
                    </div>
                  ))
              }
            </article>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
);

export default OrganizersPage;
