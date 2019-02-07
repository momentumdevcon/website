import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/';
import generateSocialLink from '../utils/generateSocialLink';
import getSpeakerSlug from '../utils/getSpeakerSlug';
import '../assets/css/speaker.css';

export default ({ data: { sessionizeData }, pageContext: { slug } }) => {
  const speaker = sessionizeData.speakers.find((speaker) => {
    const speakerSlug = getSpeakerSlug(speaker.firstName, speaker.lastName);
    return speakerSlug === slug;
  });
  const speakerSessions = sessionizeData.sessions.filter(session =>
    speaker.sessions.includes(parseInt(session.alternative_id)));

  return (
    <Layout>
      <div id="main" className="alt">
        <div className="inner horizontalContainer">
          <div className="verticalContainer">
            <img src={speaker.profilePicture} alt={speaker.fullName} />
            <div>{speaker.tagLine}</div>
            <div className="horizontalContainer">
              {speaker.links.map(link => (
                generateSocialLink(link, 'speakerSocial')
              ))}
            </div>
          </div>
          <div className="verticalContainer">
            <div>{speaker.fullName}</div>
            <div>{speaker.bio}</div>
            {speakerSessions.map(session => (
              <Link key={session.alternative_id} to={`/session/${session.alternative_id}`}>
                {session.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

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
