import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import '../assets/css/sessions.css';

const SessionsList = () => (
  <StaticQuery
    query={graphql`
      query SessionQuery {
        sessionsData {
          sessions {
            alternative_id
            speakers{
              name
            }
            title
          }
        }
      }
    `}
    render={({ sessionsData: { sessions } }) => (
      <section id="learnmore" className="about">
        <div />
        <div id='main'>
          <section id="two" className="spotlights">
            {
              sessions.map((session) => (
                <section key={session.alternative_id}>
                  <div className="image talkbubble">
                    <Link to={`/session/${session.alternative_id}`}>
                      <div className="title">{session.title}</div>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{session.speakers[0].name}</p>
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
