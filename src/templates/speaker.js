import React from 'react';
import { graphql, Link } from 'gatsby';
import { Wrapper } from '../components/';
import { generateSocialLink } from '../utils/generateSocialLink';
import { getSpeakerSlug } from '../utils/getSpeakerSlug';
import { BlueLogo } from '../assets/images';
import '../assets/css/speaker.css';

const SpeakerTemplate = ({ data: { sessionizeData }, pageContext: { slug } }) => {
  const speaker = sessionizeData.speakers.find((speaker) => {
    const speakerSlug = getSpeakerSlug(speaker.fullName);
    return speakerSlug === slug;
  });
  const speakerSessions = sessionizeData.sessions.filter(session =>
    speaker.sessions.includes(parseInt(session.alternative_id)));
  const sessionText = `Session${speakerSessions.length > 1 ? 's' : ''}:`

  const pageTitle = `${speaker.fullName} - Momentum 2023 Speaker`;
  const sessionList = speakerSessions.map(session => `"${session.title}"`).join(', ');
  return (
    <Wrapper
      title={speaker.fullName}
      pageTitle={pageTitle}
      metaDescription={`${speaker.firstName}'s ${sessionText} ${sessionList}`}
      metaImage={speaker.profilePicture}
    >
      <div id="main" className="alt">
        <div className="inner horizontalContainer">
          <div className="verticalContainer">
            <img className="speakerImage" src={speaker.profilePicture || BlueLogo} alt={speaker.fullName} />
            <div className="tagline">{speaker.tagLine}</div>
            <div className="horizontalContainer">
              {speaker.links.map(link => (
                generateSocialLink(link, 'speakerSocial')
              ))}
            </div>
          </div>
          <div className="verticalContainer">
            <div>{speaker.bio}</div>
            <div className="sessions">
              <h2>{sessionText}</h2>
              {speakerSessions.map(session => (
                <div key={session.alternative_id}>
                  <Link to={`/session/${session.alternative_id}`}>
                    {session.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SpeakerTemplate;

export const query = graphql`
  query SpeakertQuery {
    sessionizeData {
      speakers {
        fullName
        firstName
        lastName
        tagLine
        bio
        profilePicture
        sessions
        links {
          url
          linkType
        }
      }
      sessions {
        alternative_id
        title
        description
      }
    }
  }
`;
