import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { generateSocialLink } from '../utils/generateSocialLink'
import '../assets/css/speakers.css'
import { getSpeakerSlug } from '../utils/getSpeakerSlug'
import { BlueLogo } from '../assets/images'

export const SpeakersList = () => (
  <StaticQuery
    query={graphql`
      query SpeakerList {
        allSpeakers(filter: {id: {ne: "dummy"}}) {
          nodes {
            alternative_id
            firstName
            lastName
            fullName
            bio
            tagLine
            profilePicture
            links {
              linkType
              title
              url
            }
            sessions {
              alternative_id
              name
            }
          }
        }
        allSessions(filter: {id: {ne: "dummy"}}) {
          nodes {
            sessions {
              title
              alternative_id
            }
          }
        }
      }
    `}
    render={({ allSpeakers, allSessions }) => {
      const sessions = allSessions.nodes[0].sessions
      const speakers = allSpeakers.nodes
      const sessionTitlesById = sessions
        .reduce((acc, cur) => {
          const TITLE_CHAR_LIMIT = 35
          const shortTitle = cur.title.length > TITLE_CHAR_LIMIT ? `${cur.title.substring(0, 35)}...` : cur.title
          return {
            ...acc,
            [cur.alternative_id]: { shortTitle, title: cur.title },
          }
        }, {})

      return (
        <section id="learnmore" className="about">
          <div className="speakerContainer">
            <section>
              <article>
                {speakers.map((speaker) => (
                  <div key={speaker.fullName} className="speaker">
                    <header>
                      <Link
                        className="gatsby-link"
                        to={`/speakers/${getSpeakerSlug(speaker.fullName)}`}
                      >
                        <h3 className="speakerName">{speaker.fullName}</h3>
                      </Link>
                    </header>
                    <Link
                      className="gatsby-link"
                      to={`/speakers/${getSpeakerSlug(speaker.fullName)}`}
                    >
                      <img
                        alt={speaker.fullName}
                        src={speaker.profilePicture || BlueLogo}
                        className={
                          speaker.profilePicture ? 'profilePic' : 'placeholder'
                        }
                      />
                    </Link>
                    <div className="speakerSocialIcons">
                      {speaker.links.map((link) =>
                        generateSocialLink(link, 'speakerIcon')
                      )}
                    </div>
                    <div className="session-links">
                      {speaker.sessions.map(({ alternative_id: sessionId }) => (
                        <Link
                          title={sessionTitlesById[sessionId].title}
                          key={sessionId}
                          to={`/session/${sessionId}`}
                        >
                          {sessionTitlesById[sessionId].shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            </section>
          </div>
        </section>
      )
    }}
  />
)
