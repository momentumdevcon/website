import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import getSpeakerSlug from '../utils/getSpeakerSlug';
import '../assets/css/sessions.css';
import '../assets/css/session.css';

const LEVEL_ID = 29909;
const TAG_ID = 29914;

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
            description
            categories {
              alternative_id
              categoryItems {
                name
              }
            }
          }
        }
      }
    `}
    render={({ sessionsData: { sessions } }) => (
      <div id="main" className="alt">
        <section id="one" className="sessionList">
          {
            sessions.map((session) => {
              const shortTitle = session.title.split('').slice(0, 80);
              if (shortTitle.length !== session.title.length) {
                shortTitle.push('...');
              }
              const shortDescription = session.description.split('').slice(0,340);
              if (shortDescription.length !== session.description.length) {
                shortDescription.push('...')
              }
              const level = session.categories.find(cat => cat.alternative_id === LEVEL_ID).categoryItems[0].name;
              const tags = session.categories.find(cat => cat.alternative_id === TAG_ID).categoryItems.map(item => item.name);
              const speakers = session.speakers.map(speaker => getSpeakerSlug(speaker.name))
              const speakerLink = speakers.length > 1 ?
                (
                  <div>
                    <Link to={`/speakers/${speakers[0]}`}>{session.speakers[0].name}</Link>
                    and
                    <Link to={`/speakers/${speakers[1]}`}>{session.speakers[1].name}</Link>
                  </div>
                ) :
                <Link to={`/speakers/${speakers[0]}`}>{session.speakers[0].name}</Link>

              return (
                <div className="inner session" key={session.alternative_id}>
                  <div className="sessionTitle">
                    <h2>
                      <Link title={session.title} className="title" to={`/session/${session.alternative_id}`}>
                        {shortTitle}
                      </Link>
                    </h2>
                    <div className="speakerLink">
                      <div className="presentedBy">Presented by:</div>
                      <div>{speakerLink}</div>
                    </div>
                  </div>
                  <div className="description">{shortDescription}</div>
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
              )
            })
          }
        </section>
      </div>
    )}
  />
);

export default SessionsList;
