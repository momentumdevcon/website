import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { formatTimeOfDay, formatTimeRange } from '../utils/formatTime'
import { getSessionizeSessions } from '../utils/getSessionizeSessions'
import { getSpeakerSlug } from '../utils/getSpeakerSlug'
import { LEVEL_ID, TAG_ID } from '../assets/data/levelAndTagId'
import { getCategoryItems } from '../utils/getCategoryItems'
import {
  isLightningTalk,
  getLightningTalkBlock,
} from '../utils/lightningTalks'
import '../assets/css/schedule.css'

export const ScheduleTable = () => (
  <StaticQuery
    query={graphql`
    query SessionsWithSchedule {
      allSessionizeSessionGroup(filter: {id: {ne: "dummy"}}) {
        nodes {
          sessions {
            alternative_id
            categories {
              alternative_id
              categoryItems {
                alternative_id
                name
              }
            }
            endsAt
            isServiceSession
            room
            startsAt
            title
            speakers {
              name
            }
          }
        }
      }
    }
  `}
    render={({ allSessionizeSessionGroup }) => {
      // Sessionize leaves startsAt and room null until the schedule is public.
      const published = getSessionizeSessions(allSessionizeSessionGroup).filter(
        (session) => session.startsAt && session.room
      )

      // Keep each lightning talk off the grid. The block row links to a page
      // that lists them.
      const lightningBlock = getLightningTalkBlock(published)
      const scheduled = published.filter((session) => !isLightningTalk(session))

      if (scheduled.length === 0) {
        return (
          <p>
            The Momentum 2026 schedule will be announced soon. Please check back
            later for the full schedule.
          </p>
        )
      }

      // A banner session spans the grid instead of one room column:
      // - a service session, such as registration or lunch
      // - the only session at its start time, such as the keynote
      // Without this, the keynote room adds a column that is empty in every
      // other row.
      const slotSizes = scheduled.reduce(
        (acc, cur) =>
          Object.assign(acc, { [cur.startsAt]: (acc[cur.startsAt] || 0) + 1 }),
        {}
      )
      const isBanner = (session) =>
        session.isServiceSession || slotSizes[session.startsAt] === 1

      const bannerSessions = scheduled.filter(isBanner)
      const roomSessions = scheduled.filter((session) => !isBanner(session))

      const rooms = roomSessions
        .reduce(
          (acc, cur) => (acc.includes(cur.room) ? acc : acc.concat(cur.room)),
          []
        )
        .sort((a, b) => a.localeCompare(b))
      const startTimes = roomSessions
        .reduce(
          (acc, cur) =>
            acc.includes(cur.startsAt) ? acc : acc.concat(cur.startsAt),
          []
        )
        .sort()

      // When a banner and a room row start at the same time, put the banner first.
      const rank = (row) => (row.session ? 0 : 1)
      const rows = bannerSessions
        .map((session) => ({ time: session.startsAt, session }))
        .concat(startTimes.map((time) => ({ time })))
        .sort((a, b) => a.time.localeCompare(b.time) || rank(a) - rank(b))

      // Keep this in step with the page filter in gatsby-node.js.
      const hasPage = (session) =>
        !session.isServiceSession ||
        (lightningBlock &&
          session.alternative_id === lightningBlock.alternative_id)

      const bannerRow = (session) => (
        <div
          className="table-grid__row table-grid__row--banner"
          key={session.alternative_id}
          style={{ '--room-span': `${rooms.length || 1}fr` }}
        >
          <div className="table-grid__cell table-grid__cell--header table-grid__cell--time">
            {formatTimeRange(session.startsAt, session.endsAt)}
          </div>
          <div className="table-grid__cell table-grid__cell--banner">
            {hasPage(session) ? (
              <Link to={`/session/${session.alternative_id}`}>
                <span className="table-grid__cell-body">{session.title}</span>
              </Link>
            ) : (
              <span className="table-grid__cell-body">{session.title}</span>
            )}
            {(session.speakers || []).map((speaker) => (
              <Link
                to={`/speakers/${getSpeakerSlug(speaker.name)}`}
                key={speaker.name}
              >
                <div className="table-grid__cell-speaker">
                  <i>{speaker.name}</i>
                </div>
              </Link>
            ))}
            <span className="table-grid__cell-room">{session.room}</span>
          </div>
        </div>
      )

      const roomRow = (time) => (
        <div className="table-grid__row" key={time}>
          <div className="table-grid__cell table-grid__cell--header table-grid__cell--time">
            {formatTimeOfDay(time)}
          </div>
          {rooms.map((room) => {
            const session = roomSessions.find(
              (session) => session.room === room && session.startsAt === time
            )

            if (!session) {
              return (
                <div className="table-grid__cell" key={room}>
                  <span className="table-grid__cell-label">{room}</span>
                  <span className="table-grid__cell-body"></span>
                </div>
              )
            }

            return (
              <div className="table-grid__cell" key={session.alternative_id}>
                <span className="table-grid__cell-label">{session.room}</span>
                <Link to={`/session/${session.alternative_id}`}>
                  <span className="table-grid__cell-body">{session.title}</span>
                </Link>
                {(session.speakers || []).map((speaker) => (
                  <Link
                    to={`/speakers/${getSpeakerSlug(speaker.name)}`}
                    key={speaker.name}
                  >
                    <div className="table-grid__cell-speaker">
                      <i>{speaker.name}</i>
                    </div>
                  </Link>
                ))}
                <div className="category-container">
                  {getCategoryItems(session, LEVEL_ID).map((level) => (
                    <span className="table-grid__cell-tag-0" key={level}>
                      {level}
                    </span>
                  ))}
                  {getCategoryItems(session, TAG_ID).map((tag) => (
                    <span className="table-grid__cell-tag-1" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )

      return (
        <div className="table-grid">
          <div className="table-grid__row hide-sm hide-md">
            <div className="table-grid__cell table-grid__cell--header"></div>
            {rooms.map((room) => (
              <div
                key={room}
                className="table-grid__cell table-grid__cell--header"
              >
                {room}
              </div>
            ))}
          </div>
          {rows.map(({ time, session }) =>
            session ? bannerRow(session) : roomRow(time)
          )}
        </div>
      )
    }}
  />
)
