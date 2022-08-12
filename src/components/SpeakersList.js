import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { generateSocialLink } from '../utils/generateSocialLink';
import '../assets/css/speakers.css';
import { getSpeakerSlug } from '../utils/getSpeakerSlug';
import { BlueLogo } from '../assets/images';

export const SpeakersList = () => (
  <StaticQuery
    query={graphql`
      query SpeakerListQuery {
        sessionizeData {
          speakers {
            tagLine
            profilePicture
            fullName
            firstName
            lastName
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
      const sessionTitlesById = sessions
        .map(session => Object.values(session))
        .reduce((acc, cur) => {
          const shortTitle = cur[1].split('').slice(0, 35);
          if (shortTitle.length !== cur[1].length) {
            shortTitle.push('...');
          }
          return {
            ...acc,
            [cur[0]]: {
              shortTitle: shortTitle.join(''),
              title: cur[1],
            },
          };
        }, {});

      return (
        <section id="learnmore" className="about">
          <div className="speakerContainer">
            <section>
              <article>
                {speakers.map((speaker) => (
                  <div key={speaker.fullName} className="speaker">
                    <header>
                      <Link 
                        className="gatsby-link"
                        to={`/speakers/${getSpeakerSlug(speaker.fullName)}`}
                      >
                        <h3 className="speakerName">{speaker.fullName}</h3>
                      </Link>
                    </header>
                    <Link
                      className="gatsby-link"
                      to={`/speakers/${getSpeakerSlug(speaker.fullName)}`}
                    >
                      <img
                        alt={speaker.fullName}
                        src={speaker.profilePicture || BlueLogo}
                        className={speaker.profilePicture ? 'profilePic' : 'placeholder'}
                      />
                    </Link>
                    <div className="speakerSocialIcons">
                      {
                        speaker.links.map(link => generateSocialLink(link, 'speakerIcon'))
                      }
                    </div>
                    <div
                      className="session-links"
                    >
                      {speaker.sessions.map(sessionId => (
                        <Link
                          title={sessionTitlesById[sessionId].title}
                          key={sessionId}
                          to={`/session/${sessionId}`}
                        >
                          {sessionTitlesById[sessionId].shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            </section>
          </div>
        </section>
      );
    }}
  />
);
