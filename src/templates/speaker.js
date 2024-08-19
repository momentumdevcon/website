import React from 'react'
import { graphql, Link } from 'gatsby'
import { Wrapper } from '../components/'
import { generateSocialLink } from '../utils/generateSocialLink'
import { getSpeakerSlug } from '../utils/getSpeakerSlug'
import { BlueLogo } from '../assets/images'
import '../assets/css/speaker.css'

const SpeakerTemplate = ({
  data: { allSessions, allSpeakers },
  pageContext: { slug },
}) => {
  allSessions = allSessions.nodes[0].sessions
  allSpeakers = allSpeakers.nodes
  const speaker = allSpeakers.find(
    (speaker) => slug == getSpeakerSlug(speaker.fullName)
  )
  const speakerSessions = allSessions.filter((session) =>
    speaker.sessions
      .map((s) => String(s.alternative_id))
      .includes(session.alternative_id)
  )
  const sessionText = `Session${speakerSessions.length > 1 ? 's' : ''}:`

  const pageTitle = `${speaker.fullName} - Momentum 2024 Speaker`
  const sessionList = speakerSessions
    .map((session) => `"${session.title}"`)
    .join(', ')
  return (
    <Wrapper
      title={speaker.fullName}
      pageTitle={pageTitle}
      metaDescription={`${speaker.firstName}'s ${sessionText} ${sessionList}`}
      metaImage={speaker.profilePicture}
    >
      <div id="main" className="alt">
        <div className="inner horizontalContainer">
          <div className="verticalContainer">
            <img
              className="speakerImage"
              src={speaker.profilePicture || BlueLogo}
              alt={speaker.fullName}
            />
            <div className="tagline">{speaker.tagLine}</div>
            <div className="horizontalContainer">
              {speaker.links.map((link) =>
                generateSocialLink(link, 'speakerSocial')
              )}
            </div>
          </div>
          <div className="verticalContainer">
            <div>{speaker.bio}</div>
            <div className="sessions">
              <h2>{sessionText}</h2>
              {speakerSessions.map((session) => (
                <div key={session.alternative_id}>
                  <Link to={`/session/${session.alternative_id}`}>
                    {session.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default SpeakerTemplate

export const query = graphql`
  query SpeakerPage {
    allSpeakers(filter: { id: { ne: "dummy" } }) {
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
        }
      }
    }
    allSessions(filter: { id: { ne: "dummy" } }) {
      nodes {
        sessions {
          alternative_id
          title
        }
      }
    }
  }
`
