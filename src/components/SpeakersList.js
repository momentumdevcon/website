import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Icon from './Icon';
import '../assets/css/speakers.css';

const generateSocialLink = (type, url) => (
  <Icon
    className="speakerIcon"
    iconName={type}
    link={url}
  />
);

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
    render={({ sessionizeData: { speakers, sessions } }) => {
      const formattedSessions =
        sessions
        .map(session => Object.values(session))
        .reduce((acc, cur) => {
          const title = cur[1].split('').slice(0, 25);
          if (title.length !== cur[1].length) {
            title.push('...');
          }
          return {
            ...acc,
            [cur[0]]: title.join('')
          }
        }, {})

      return (
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
                      {
                        speaker.links.length > 0 && speaker.links[0].linkType === 'Twitter' ? 
                          generateSocialLink('twitter', speaker.links[0].url)
                          : ''
                      }
                      {
                        speaker.links.length > 1 && speaker.links[1].linkType === 'LinkedIn' ? 
                          generateSocialLink('linkedin-square', speaker.links[1].url)
                          : ''
                      }
                    </div>
                    <div className={`session-links${speaker.links.length === 0 ? ' no-social' : ''}` }>
                      {
                        speaker.sessions.map(sessionId => (
                          <Link to={`/session/${sessionId}`}>
                            {formattedSessions[sessionId]}
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ))}
              </article>
            </section>
          </div>
        </section>
      )
    }}
  />
);

export default SpeakersList;
