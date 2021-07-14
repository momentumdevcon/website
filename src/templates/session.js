import React from 'react';
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby';
import {createMetaContent} from '../assets/data/metaContent.js';
import { BannerLanding, Layout } from '../components';
import formatName from '../utils/formatName';
import getSpeakerSlug from '../utils/getSpeakerSlug.js';
import '../assets/css/session.css';

const LEVEL_ID = 29909;
const TAG_ID = 29909;

const SessionTemplate = ({ data: { sessionsData, sessionizeData }, pageContext: { slug } }) => {
  const session = sessionsData.sessions.find(session => session.alternative_id === slug);
  const title = session.title;
  const speakerNames = session.speakers.map(speaker => formatName(speaker.name));
  const level = session.categories.find(cat => cat.alternative_id === LEVEL_ID).categoryItems[0].name;
  const tags = session.categories.find(cat => cat.alternative_id === TAG_ID).categoryItems.map(item => item.name);

  const speaker1 = sessionizeData.speakers.find(speaker => speaker.alternative_id === session.speakers[0].alternative_id);

  const pageTitle = `${title} - Momentum Developer Conference`;
  const pageDescription = `${title} presented by ${speakerNames.join(', ')} at Momentum 2021`
  const metaContent = createMetaContent(pageTitle, pageDescription, speaker1.profilePicture)
  const getNameWithLink = (slug, name) => (
    <Link className="gatsby-link" to={`/speakers/${getSpeakerSlug(slug)}`}>
      {name}
    </Link>
  );
  
  return (
    <Layout>
      <Helmet
        title={pageTitle}
        meta={[...metaContent]}
      />

      <BannerLanding pageName={title} />

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <div className="presenter">
              <span className="info-prefix">Presented by:</span>
              { getNameWithLink(session.speakers[0].name, speakerNames[0]) }
              { speakerNames.length > 1 ?
                <span> and { getNameWithLink(session.speakers[1].name, speakerNames[1]) }</span> : ''
              }
            </div>
            <div className="description">{session.description}</div>
            <div className="levelTags">
              <span><span className="info-prefix">Level: </span>{level}</span>
              {
                tags.length > 0 ?
                  <span>
                    <span className="info-prefix">Tags:</span>
                    {
                      tags.map((tag, index) => (
                        <span key={tag}>{`${index !== tags.length - 1 ? `${tag}, ` : tag}`}</span>
                      ))
                    }
                  </span>
                  :
                  ''
              }
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SessionTemplate;

export const query = graphql`
  query NewSessionQuery {
    sessionizeData {
      speakers {
        alternative_id
        firstName
        lastName
        bio
        tagLine
        profilePicture
        isTopSpeaker
        fullName
      }
    }
    sessionsData {
      sessions {
        alternative_id
        description
        speakers {
          alternative_id
          name
        }
        categories {
          alternative_id
          categoryItems {
            name
          }
        }
        title
      }
    }
  }
`
