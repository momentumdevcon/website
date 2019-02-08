import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/';
import generateSocialLink from '../utils/generateSocialLink';
import getSpeakerSlug from '../utils/getSpeakerSlug';
import metaContent from '../assets/data/metaContent';
import '../assets/css/speaker.css';

export default ({ data: { sessionizeData }, pageContext: { slug } }) => {
  const speaker = sessionizeData.speakers.find((speaker) => {
    const speakerSlug = getSpeakerSlug(speaker.firstName, speaker.lastName);
    return speakerSlug === slug;
  });
  const speakerSessions = sessionizeData.sessions.filter(session =>
    speaker.sessions.includes(parseInt(session.alternative_id)));
  const sessionText = `Session${speakerSessions.length > 1 ? 's' : ''}:`

  return (
    <Layout>
      <Helmet
       title={`${speaker.fullName} - Momentum Dev Con`}
       meta={[...metaContent]}
      />
      <div id="main" className="alt">
        <div className="inner horizontalContainer">
          <div className="verticalContainer">
            <img className="speakerImage" src={speaker.profilePicture} alt={speaker.fullName} />
            <div className="tagline">{speaker.tagLine}</div>
            <div className="horizontalContainer">
              {speaker.links.map(link => (
                generateSocialLink(link, 'speakerSocial')
              ))}
            </div>
          </div>
          <div className="verticalContainer">
            <h1 className="name">{speaker.fullName}</h1>
            <div>{speaker.bio}</div>
            <div className="sessions">
              <h2>{sessionText}</h2>
              {speakerSessions.map(session => (
                <div>
                  <Link key={session.alternative_id} to={`/session/${session.alternative_id}`}>
                    {session.title}
                  </Link>
                </div>
              ))}
            </div>
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
