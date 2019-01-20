import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/css/sessions.css';

const SessionsList = () => (
  <StaticQuery
    query={graphql`
      query SessionQuery {
        sessionizeData {
          sessions {
            alternative_id
            description
            speakers
            title
          }
        }
      }
    `}
    render={({ sessionizeData: { sessions } }) => (
      <section id="learnmore" className="about">
        <div />
        <div id='main'>
          <section id="two" className="spotlights">
            {
              sessions.map((session) => (
                <section key={session.alternative_id}>
                  <div className="image talkbubble">
                    <div className="title">{session.title}</div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{session.description}</p>
                    </div>
                  </div>
              </section>
              ))
            }
          </section>
        </div>
      </section>
    )}
  />
);

export default SessionsList;
