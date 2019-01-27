import React from 'react';
import Helmet from 'react-helmet'
import metaContent from '../assets/data/metaContent.js';
import { Layout } from '../components';
import { graphql } from 'gatsby';
import '../assets/css/session.css';

export default ({ data: { sessionsData }, pageContext: { slug } }) => {
  const session = sessionsData.sessions.find(session => session.alternative_id === slug);
  const title = session.title;
  const speakerName = session.speakers[0].name;
  const level = session.categories[0].categoryItems[0].name;
  const tags = session.categories[1].categoryItems.map(item => item.name);
  
  return (
    <Layout>
      <Helmet
        title={`${title} - Momentum Dev Con`}
        meta={[...metaContent]}
      />
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major session-title">
              <h1>{title}</h1>
            </header>
            <div className="presenter"><span className="info-prefix">Presented by:</span>{speakerName}</div>
            <div className="description">{session.description}</div>
            <div className="levelTags">
              <span><span className="info-prefix">Level: </span>{level}</span>
              <span>
                <span className="info-prefix">Tags:</span>
                  {
                    tags.map((tag, index) => (
                      <span>{`${index !== tags.length - 1 ? `${tag}, ` : tag}`}</span>
                    ))
                  }
              </span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query NewSessionQuery {
    sessionsData {
      sessions {
        alternative_id
        description
        speakers{
          name
        }
        categories{
          categoryItems{
            name
          }
        }
        title
      }
    }
  }
`;
