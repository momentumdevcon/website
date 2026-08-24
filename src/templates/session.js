import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper } from '../components'
import { getSpeakerNameLink } from '../utils/getSpeakerNameLink'
import { LEVEL_ID, TAG_ID } from '../assets/data/levelAndTagId'
import { getSessionizeSessions } from '../utils/getSessionizeSessions'
import { getCategoryItems } from '../utils/getCategoryItems'
import '../assets/css/session.css'

const SessionTemplate = ({ data: { allSessionizeSessionGroup, allSessionizeSpeaker }, pageContext: { slug } }) => {
  allSessionizeSessionGroup = getSessionizeSessions(allSessionizeSessionGroup)
  allSessionizeSpeaker = allSessionizeSpeaker.nodes
  const session = allSessionizeSessionGroup.find((session) => session.alternative_id === slug)
  const title = session ? session.title : ''
  const speakerNames = session && session.speakers ? session.speakers.map((speaker) => speaker.name) : []
  const level = getCategoryItems(session, LEVEL_ID)[0] || ''
  const tags = getCategoryItems(session, TAG_ID)
  const speaker1 =
    session && session.speakers && session.speakers[0]
      ? allSessionizeSpeaker.find((speaker) => speaker.alternative_id === session.speakers[0].alternative_id)
      : null

  const pageDescription = speakerNames.length
    ? `${title} presented by ${speakerNames.join(', ')} at Momentum 2026`
    : `${title} at Momentum 2026`

  const PresenterInfo = () =>
    speakerNames.length > 0 ? (
      <div className="presenter">
        <span className="info-prefix">Presented by:</span>
        {getSpeakerNameLink(speakerNames[0])}
        {speakerNames.length > 1 ? <span> and {getSpeakerNameLink(speakerNames[1])}</span> : ''}
      </div>
    ) : (
      ''
    )

  const LevelTags = () =>
    level || tags.length > 0 ? (
      <div className="levelTags">
        <span>
          <span className="info-prefix">Level: </span>
          {level}
        </span>
        {tags.length > 0 ? (
          <span>
            <span className="info-prefix">Tags:</span>
            {tags.map((tag, index) => (
              <span key={tag}>{`${index !== tags.length - 1 ? `${tag}, ` : tag}`}</span>
            ))}
          </span>
        ) : (
          ''
        )}
      </div>
    ) : (
      ''
    )

  return (
    <Wrapper title={title} metaImage={speaker1 && speaker1.profilePicture} metaDescription={pageDescription}>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <PresenterInfo />
            <div className="description">{session && session.description}</div>
            <LevelTags />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
export default SessionTemplate

export const query = graphql`
  query SessionPageQuery {
    allSessionizeSpeaker(filter: { id: { ne: "dummy" } }) {
      nodes {
        alternative_id
        firstName
        lastName
        fullName
        profilePicture
      }
    }
    allSessionizeSessionGroup(filter: { id: { ne: "dummy" } }) {
      nodes {
        sessions {
          alternative_id
          description
          speakers {
            alternative_id
            name
          }
          categories {
            alternative_id
            categoryItems {
              name
            }
          }
          title
          isServiceSession
        }
      }
    }
  }
`
