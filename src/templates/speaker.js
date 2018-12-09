import React from 'react';
import { Layout } from '../components/';
import { graphql } from 'gatsby';

export default ({ data: { sessionizeData }, pageContext: { slug } }) => {
  const speaker = sessionizeData.speakers.find(speaker => speaker.fullName === slug);
  const speakerSessions = sessionizeData.sessions.filter(session =>
    speaker.sessions.includes(parseInt(session.alternative_id)));

  return (
    <Layout>
      <div>{speaker.fullName}</div>
      <div>{speaker.tagLine}</div>
      <div>{speaker.bio}</div>
      <img src={speaker.profilePicture} alt={speaker.fullName} />
      {speaker.links.map(link => (
        <div key={link.linkType}>{link.linkType}</div>
      ))}
      {speakerSessions.map(session => (
        <div key={session.alternative_id}>
          <div>{session.title}</div>
          <div>{session.description}</div>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query SpeakertQuery {
    sessionizeData {
      speakers {
        fullName
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
