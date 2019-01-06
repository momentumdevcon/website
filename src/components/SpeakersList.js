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
            <article>
              {speakers.map((speaker, index) => (
                <div key={index} className="speaker">
                  <header>
                    <h3 className="speakerName">{speaker.fullName}</h3>
                  </header>
                  <img alt={`${speaker.fullName}`} src={`${speaker.profilePicture}`} />
                  <div className="speakerSocialIcons">
                    <Icon
                      className="speakerIcon"
                      iconName="facebook"
                      link="https://www.facebook.com/momentumdevcon"
                    />
                    <Icon
                      className="speakerIcon"
                      iconName="twitter"
                      link="https://twitter.com/momentumdevcon"
                    />
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
