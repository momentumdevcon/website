import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { getSpeakerNameLink } from '../utils/getSpeakerNameLink'
import { LEVEL_ID, TAG_ID } from '../assets/data/levelAndTagId'
import '../assets/css/sessions.css'
import '../assets/css/session.css'

export const SessionsList = () => (
  <StaticQuery
    query={graphql`
      query SessionList {
        allSessions(filter: {id: {ne: "dummy"}}) {
          nodes {
            sessions {
              alternative_id
              speakers {
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
      }
    `}
    render={({ allSessions }) => {
      const sessions = allSessions.nodes[0].sessions
      return (
        <div id="main" className="alt">
          <section id="one" className="sessionList">
            {sessions.map((session) => {
              const TITLE_CHAR_LIMIT = 80
              const DESC_CHAR_LIMIT = 340
              const shortTitle = session.title.length > TITLE_CHAR_LIMIT ? `${session.title.substring(0, TITLE_CHAR_LIMIT)}...` : session.title
              const shortDesc = session.description.length > DESC_CHAR_LIMIT ? `${session.description.substring(0, DESC_CHAR_LIMIT)}...` : session.description
              const level =
                session.categories &&
                  session.categories.find((cat) => cat.alternative_id === LEVEL_ID)
                  ? session.categories.find(
                    (cat) => cat.alternative_id === LEVEL_ID
                  ).categoryItems[0].name
                  : ''
              const tags =
                session.categories &&
                  session.categories.find((cat) => cat.alternative_id === TAG_ID)
                  ? session.categories
                    .find((cat) => cat.alternative_id === TAG_ID)
                    .categoryItems.map((item) => item.name)
                  : ''
              const speakers = session.speakers
                ? session.speakers.map((speaker) => speaker.name)
                : []

              return (
                <div className="inner session" key={session.alternative_id}>
                  <div className="sessionTitle">
                    <h2>
                      <Link
                        title={session.title}
                        className="title"
                        to={`/session/${session.alternative_id}`}
                      >
                        {shortTitle}
                      </Link>
                    </h2>
                    <div className="speakerLink">
                      <div className="presentedBy">Presented by:</div>
                      <div>
                        {getSpeakerNameLink(speakers[0])}
                        {speakers.length > 1 ? (<span> and {getSpeakerNameLink(speakers[1])}</span>) : ''}
                      </div>
                    </div>
                  </div>
                  <div className="description">{shortDesc}</div>
                  <div className="levelTags">
                    <span>
                      <span className="info-prefix">Level: </span>
                      {level}
                    </span>
                    {tags.length > 0 ? (
                      <span>
                        <span className="info-prefix">Tags:</span>
                        {tags.map((tag, index) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {index !== tags.length - 1 ? ', ' : ''}
                          </React.Fragment>
                        ))}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              )
            })}
          </section>
        </div>
      )
    }}
  />
)
