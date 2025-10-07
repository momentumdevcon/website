import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { timeInfo } from '../utils/formatTime'
import '../assets/css/schedule.css'

export const ScheduleTable = () => (
  <StaticQuery
    query={graphql`
    query SessionsWithSchedule {
      allSessions {
        nodes {
          sessions {
            alternative_id
            categories {
              categoryItems {
                name
              }
            }
            endsAt
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
    render={({ allSessions }) => {
      const sessions = allSessions.nodes[0].sessions
      const MAIN_BALLROOM = 'Main Ballroom'

      const sortRooms = (a, b) =>
        a === MAIN_BALLROOM
          ? -1
          : b === MAIN_BALLROOM
            ? 1
            : a.toLowerCase() < b.toLowerCase()
              ? -1
              : 1

      const rooms = sessions
        .reduce(
          (acc, cur) => (acc.includes(cur.room) ? acc : acc.concat(cur.room)),
          []
        )
        .sort(sortRooms)
      const rawStartTimes = sessions.reduce(
        (acc, cur) =>
          acc.includes(cur.startsAt) ? acc : acc.concat(cur.startsAt),
        []
      )

      return (
        <div className="table-grid">
          <div className="table-grid__row hide-sm hide-md">
            <div className="table-grid__cell table-grid__cell--header"></div>
            {rooms.map((room, i) => (
              <div
                key={i}
                className="table-grid__cell table-grid__cell--header"
              >
                {room}
              </div>
            ))}
          </div>
          {rawStartTimes.map((time) => {
            const periodSessions = rooms.map((room) => {
              const session = sessions.find(
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
                    <span className="table-grid__cell-body">
                      {session.title}
                    </span>
                  </Link>
                  {session.speakers.map((speaker, i) => (
                    <Link
                      id={i}
                      to={`/speakers/${speaker.name.replace(/ /g, '_')}`}
                      key={speaker.name}
                    >
                      <div className="table-grid__cell-speaker">
                        <i>{speaker.name}</i>
                      </div>
                    </Link>
                  ))}
                  <div className="category-container">
                    {session.categories.map((categoriesObject, i) =>
                      categoriesObject.categoryItems.map((category, j) => (
                        <span key={`${i}-${j}`}>
                          <span className={`table-grid__cell-tag-${i}`}>
                            {category.name}
                          </span>
                        </span>
                      ))
                    )}
                  </div>
                </div>
              )
            })
            return (
              <div className="table-grid__row" key={time}>
                <div className="table-grid__cell table-grid__cell--header">
                  {timeInfo(time).substring(0, timeInfo(time).indexOf('M') + 1)}
                </div>
                {periodSessions}
              </div>
            )
          })}
        </div>
      )
    }}
  />
)
