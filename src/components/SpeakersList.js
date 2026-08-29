import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { SectionHeading } from './SectionHeading'
import { generateSocialLink } from '../utils/generateSocialLink'
import '../assets/css/speakers.css'
import { getSpeakerSlug } from '../utils/getSpeakerSlug'
import { BlueLogo } from '../assets/images'
import { getSessionizeSessions } from '../utils/getSessionizeSessions'
import { groupSessionsIntoSections } from '../utils/sessionSections'

const TITLE_CHAR_LIMIT = 35

const Speaker = ({ speaker, sessionTitlesById, isKeynoteSpeaker }) => {
  const speakerLink = `/speakers/${getSpeakerSlug(speaker.fullName)}`

  return (
    <div className={`speaker${isKeynoteSpeaker ? ' keynoteSpeaker' : ''}`}>
      <header>
        <Link className="gatsby-link" to={speakerLink}>
          <h3 className="speakerName">{speaker.fullName}</h3>
        </Link>
      </header>
      <Link className="gatsby-link" to={speakerLink}>
        <img
          alt={speaker.fullName}
          src={speaker.profilePicture || BlueLogo}
          className={speaker.profilePicture ? 'profilePic' : 'placeholder'}
        />
      </Link>
      <div className="speakerSocialIcons">
        {speaker.links.map((link) => generateSocialLink(link, 'speakerIcon'))}
      </div>
      <div className="session-links">
        {speaker.sessions.map((sessionId) => (
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
  )
}

export const SpeakersList = () => (
  <StaticQuery
    query={graphql`
      query SpeakerList {
        allSessionizeSpeaker(filter: {id: {ne: "dummy"}}) {
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
        allSessionizeSessionGroup(filter: {id: {ne: "dummy"}}) {
          nodes {
            sessions {
              title
              alternative_id
              categories {
                alternative_id
                categoryItems {
                  alternative_id
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={({ allSessionizeSpeaker, allSessionizeSessionGroup }) => {
      const sessions = getSessionizeSessions(allSessionizeSessionGroup)
      const speakers = allSessionizeSpeaker.nodes
        .map((speaker) => {
          const firstName = speaker.firstName ? speaker.firstName.trim() : speaker.firstName
          const lastName = speaker.lastName ? speaker.lastName.trim() : speaker.lastName
          const fullName = speaker.fullName ? speaker.fullName.trim() : speaker.fullName

          return {
            ...speaker,
            firstName,
            lastName,
            fullName,
          }
        })
        .sort((a, b) => {
          const nameA = a.fullName ? a.fullName.toLowerCase() : ''
          const nameB = b.fullName ? b.fullName.toLowerCase() : ''
          return nameA.localeCompare(nameB)
        })
      const sessionTitlesById = sessions
        .reduce((acc, cur) => {
          const shortTitle = cur.title.length > TITLE_CHAR_LIMIT ? `${cur.title.substring(0, TITLE_CHAR_LIMIT)}...` : cur.title
          return {
            ...acc,
            [cur.alternative_id]: { shortTitle, title: cur.title },
          }
        }, {})

      // A speaker with talks in two sections appears in both, each time showing
      // only that section's talks.
      const sections = groupSessionsIntoSections(sessions).map((section) => {
        const sectionSessionIds = section.sessions.map((session) =>
          String(session.alternative_id)
        )

        return {
          ...section,
          speakers: speakers
            .map((speaker) => ({
              ...speaker,
              sessions: (speaker.sessions || [])
                .map((session) => String(session.alternative_id))
                .filter((sessionId) => sectionSessionIds.includes(sessionId)),
            }))
            .filter((speaker) => speaker.sessions.length > 0),
        }
      })

      return (
        <section id="learnmore" className="about">
          <div className="speakerContainer">
            {sections.map(({ key, title, speakers }) => (
              <section id={key} key={key}>
                <SectionHeading>{title}</SectionHeading>
                <article>
                  {speakers.map((speaker) => (
                    <Speaker
                      key={speaker.fullName}
                      speaker={speaker}
                      sessionTitlesById={sessionTitlesById}
                      isKeynoteSpeaker={key === 'keynote'}
                    />
                  ))}
                </article>
              </section>
            ))}
          </div>
        </section>
      )
    }}
  />
)
