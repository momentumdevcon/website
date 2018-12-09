import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import ContentBlock from './ContentBlock';
import Icon from './Icon';

const getSessionTitle = (allSessions, speakerSessions) =>
  allSessions.find(session => session.alternative_id === speakerSessions[0].toString()).title;

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
    render={({ sessionizeData: { speakers, sessions } }) => (
      <section id="learnmore" className="about">
        <div>
          <p className="lead">
            <Link to="/schedule">Schedule is now live!</Link>
          </p>
        </div>
        <div />
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
