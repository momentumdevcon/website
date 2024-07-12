import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper } from '../components'
import { getSpeakerNameLink } from '../utils/getSpeakerNameLink'
import { LEVEL_ID, TAG_ID } from '../assets/data/levelAndTagId'
import '../assets/css/session.css'

const SessionTemplate = ({
  data: { sessionsData, sessionizeData },
  pageContext: { slug },
}) => {
  const session = sessionsData.sessions.find(
    (session) => session.alternative_id === slug
  )
  const title = session ? session.title : ''
  const speakerNames =
    session && session.speakers
      ? session.speakers.map((speaker) => speaker.name)
      : []
  const level =
    session &&
      session.categories &&
      session.categories.find((cat) => cat.alternative_id === LEVEL_ID)
      ? session.categories.find((cat) => cat.alternative_id === LEVEL_ID)
        .categoryItems[0].name
      : ''
  const tags =
    session &&
      session.categories &&
      session.categories.find((cat) => cat.alternative_id === TAG_ID)
      ? session.categories
        .find((cat) => cat.alternative_id === TAG_ID)
        .categoryItems.map((item) => item.name)
      : ''
  const speaker1 =
    session && session.speakers && session.speakers[0]
      ? sessionizeData.speakers.find(
        (speaker) =>
          speaker.alternative_id === session.speakers[0].alternative_id
      )
      : {}

  const pageDescription = `${title} presented by ${speakerNames.join(
    ', '
  )} at Momentum 2023`

  const PresenterInfo = () =>
    speakerNames.length > 0 ? (
      <div className="presenter">
        <span className="info-prefix">Presented by:</span>
        {getSpeakerNameLink(speakerNames[0])}
        {speakerNames.length > 1 ? (
          <span> and {getSpeakerNameLink(speakerNames[1])}</span>
        ) : (
          ''
        )}
      </div>
    ) : (
      ''
    )

  const LevelTags = () =>
    tags && tags.length > 0 ? (
      <div className="levelTags">
        <span>
          <span className="info-prefix">Level: </span>
          {level}
        </span>
        {tags && tags.length > 0 ? (
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
    <Wrapper
      title={title}
      metaImage={speaker1.profilePicture}
      metaDescription={pageDescription}
    >
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
  query NewSessionQuery {
    sessionizeData {
      speakers {
        alternative_id
        firstName
        lastName
        bio
        tagLine
        profilePicture
        isTopSpeaker
        fullName
      }
    }
    sessionsData {
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
`
