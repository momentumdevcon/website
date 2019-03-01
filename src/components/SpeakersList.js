import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import generateSocialLink from '../utils/generateSocialLink';
import '../assets/css/speakers.css';
import getSpeakerSlug from '../utils/getSpeakerSlug';
import formatName from '../utils/formatName';
import { Chevrons } from '../assets/images';

const SpeakersList = () => (
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
          const shortTitle = cur[1].split('').slice(0, 25);
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
                {speakers.map((speaker, index) => (
                  <div key={formatName(speaker.fullName)} className="speaker">
                    <header>
                      <h3 className="speakerName">{formatName(speaker.fullName)}</h3>
                    </header>
                    <Link
                      className="speakerSlug"
                      to={`/speakers/${getSpeakerSlug(speaker.firstName, speaker.lastName)}`}
                    >
                      <img
                        alt={`${formatName(speaker.fullName)}`}
                        src={`${speaker.profilePicture || Chevrons}`}
                        className={speaker.profilePicture ? 'profilePic' : 'placeholder'}
                      />
                    </Link>
                    <div className="speakerSocialIcons">
                      {speaker.links.length > 0 && speaker.links[0].linkType === 'Twitter'
                        ? generateSocialLink(speaker.links[0], 'speakerIcon')
                        : ''}
                      {speaker.links.length > 1 && speaker.links[1].linkType === 'LinkedIn'
                        ? generateSocialLink(speaker.links[1], 'speakerIcon')
                        : ''}
                    </div>
                    <div
                      className={`session-links${speaker.links.length === 0 ? ' no-social' : ''}`}
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

export default SpeakersList;
