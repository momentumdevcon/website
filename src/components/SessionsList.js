import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { getSpeakerNameLink } from '../utils/getSpeakerNameLink'
import { LEVEL_ID, TAG_ID } from '../assets/data/levelAndTagId'
import { getSessionizeSessions } from '../utils/getSessionizeSessions'
import { getCategoryItems } from '../utils/getCategoryItems'
import '../assets/css/sessions.css'
import '../assets/css/session.css'

export const SessionsList = () => (
  <StaticQuery
    query={graphql`
      query SessionList {
        allSessionizeSessionGroup(filter: {id: {ne: "dummy"}}) {
          nodes {
            sessions {
              alternative_id
              isServiceSession
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
    render={({ allSessionizeSessionGroup }) => {
      // Service sessions have no speaker and no level, so they would show here
      // as empty cards. They include lunch, opening remarks and the lightning
      // talk block.
      const sessions = getSessionizeSessions(allSessionizeSessionGroup).filter(
        (session) => !session.isServiceSession
      )
      return (
        <div id="main" className="alt">
          <section id="one" className="sessionList">
            {sessions.map((session) => {
              const TITLE_CHAR_LIMIT = 80
              const DESC_CHAR_LIMIT = 340
              const shortTitle = session.title.length > TITLE_CHAR_LIMIT ? `${session.title.substring(0, TITLE_CHAR_LIMIT)}...` : session.title
              const description = session.description || ''
              const shortDesc = description.length > DESC_CHAR_LIMIT ? `${description.substring(0, DESC_CHAR_LIMIT)}...` : description
              const level = getCategoryItems(session, LEVEL_ID)[0] || ''
              const tags = getCategoryItems(session, TAG_ID)
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
                    {speakers.length > 0 ? (
                      <div className="speakerLink">
                        <div className="presentedBy">Presented by:</div>
                        <div>
                          {getSpeakerNameLink(speakers[0])}
                          {speakers.length > 1 ? (<span> and {getSpeakerNameLink(speakers[1])}</span>) : ''}
                        </div>
                      </div>
                    ) : ''}
                  </div>
                  <div className="description">{shortDesc}</div>
                  {level || tags.length > 0 ? (
                    <div className="levelTags">
                      {level ? (
                        <span>
                          <span className="info-prefix">Level: </span>
                          {level}
                        </span>
                      ) : ''}
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
                  ) : ''}
                </div>
              )
            })}
          </section>
        </div>
      )
    }}
  />
)
