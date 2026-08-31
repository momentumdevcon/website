import React from 'react'
import { graphql, Link } from 'gatsby'
import { Wrapper } from '../components'
import { getSpeakerNameLinks } from '../utils/getSpeakerNameLink'
import { LEVEL_ID, TAG_ID } from '../assets/data/levelAndTagId'
import { getSessionizeSessions } from '../utils/getSessionizeSessions'
import { getCategoryItems } from '../utils/getCategoryItems'
import { getLightningTalksIn } from '../utils/lightningTalks'
import { isLightningTalk } from '../utils/sessionSections'
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

  const lightningTalks = getLightningTalksIn(allSessionizeSessionGroup, session)

  const pageDescription = speakerNames.length
    ? `${title} presented by ${speakerNames.join(', ')} at Momentum 2026`
    : `${title} at Momentum 2026`

  const PresenterInfo = () =>
    speakerNames.length > 0 ? (
      <div className="presenter">
        <span className="info-prefix">Presented by:</span>
        {getSpeakerNameLinks(speakerNames)}
      </div>
    ) : (
      ''
    )

  const LightningTalks = () =>
    lightningTalks.length > 0 ? (
      <div className="lightningTalks">
        <h2>Talks</h2>
        {lightningTalks.map((talk) => (
          <div className="lightningTalk" key={talk.alternative_id}>
            <Link to={`/session/${talk.alternative_id}`}>{talk.title}</Link>
            <div className="lightningTalkSpeakers">
              {getSpeakerNameLinks(
                (talk.speakers || []).map((speaker) => speaker.name)
              )}
            </div>
          </div>
        ))}
      </div>
    ) : (
      ''
    )

  const lightning = isLightningTalk(session)

  const LevelTags = () =>
    lightning || level || tags.length > 0 ? (
      <div className="levelTags">
        <span>
          {lightning ? (
            <span className="lightningTalkLabel">Lightning Talk</span>
          ) : ''}
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
            <LightningTalks />
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
          startsAt
          endsAt
          description
          speakers {
            alternative_id
            name
          }
          categories {
            alternative_id
            categoryItems {
              alternative_id
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
