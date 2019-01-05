import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Icon from './Icon';

const SpeakersList = () => (
  <StaticQuery
    query={graphql`
      query SpeakerListQuery {
        sessionizeData {
          speakers {
            tagLine
            profilePicture
            fullName
            sessions
            links {
              url
              linkType
            }
          }
          sessions {
            alternative_id
            title
          }
        }
      }
    `}
    render={({ sessionizeData: { speakers } }) => (
      <section id="learnmore" className="about">
        <div className="speakerContainer">
          <section>
            <article style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {speakers.map((speaker, index) => (
                <div key={index} style={{ paddingRight: '30px' }}>
                  <header style={{ textAlign: 'center' }}>
                    <h3>{speaker.fullName}</h3>
                  </header>
                  <img
                    alt={`${speaker.fullName}`}
                    src={`${speaker.profilePicture}`}
                    style={{
                      height: '200px',
                      width: '200px',
                      borderRadius: '50%',
                    }}
                  />
                  <div
                    className="speakerSocialIcons"
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}
                  >
                    <Icon iconName="facebook" link="https://www.facebook.com/momentumdevcon" />
                    <Icon iconName="twitter" link="https://twitter.com/momentumdevcon" />
                  </div>
                </div>
              ))}
            </article>
          </section>
        </div>
      </section>
    )}
  />
);

export default SpeakersList;
