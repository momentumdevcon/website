import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// TODO: Find pics that match each session. 
// Host them locally and match them to session when mapping over sessionize data
import pic08 from '../assets/images/pic08.jpg';

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
              sessions.map((session, index) => (
                <section key={session.alternative_id}>
                  <Link to="/generic" className="image">
                    <img src={pic08} alt="" />
                  </Link>
                  <div className="content">
                    <div className="inner">
                      <header className="major">
                        <h3>{session.title}</h3>
                      </header>
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
