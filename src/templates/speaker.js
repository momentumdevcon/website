import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/';
import generateSocialLink from '../utils/generateSocialLink';

export default ({ data: { sessionizeData }, pageContext: { slug } }) => {
  const speaker = sessionizeData.speakers.find((speaker) => {
    const craftedSlug = `${speaker.firstName.split(' ').join('_')}_${speaker.lastName.split(' ').join('_')}`;
    return craftedSlug === slug;
  });
  const speakerSessions = sessionizeData.sessions.filter(session =>
    speaker.sessions.includes(parseInt(session.alternative_id)));

  return (
    <Layout>
      <div>{speaker.fullName}</div>
      <img src={speaker.profilePicture} alt={speaker.fullName} />
      <div>{speaker.tagLine}</div>
      <div>{speaker.bio}</div>
      {speaker.links.map(link => (
        generateSocialLink(link, 'speakerSocial')
      ))}
      {speakerSessions.map(session => (
        <Link key={session.alternative_id} to={`/session/${session.alternative_id}`}>
          {session.title}
        </Link>
      ))}
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
