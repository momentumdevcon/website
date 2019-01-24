import React from 'react';
import Helmet from 'react-helmet'
import metaContent from '../assets/data/metaContent.js';
import { Layout } from '../components';
import { graphql } from 'gatsby';

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
            <header className="major">
              <h1>{title}</h1>
            </header>
            <div>{speakerName}</div>
            <div>Level - {level}</div>
            <div>Tags: {tags}</div>
            <div>{session.description}</div>
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
