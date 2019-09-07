import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import timeInfo from '../utils/formatTime'

const ScheduleTable = props => (
  <StaticQuery
    query={graphql`
      query ScheduleQuery {
        sessionsData {
            sessions {
                alternative_id
                startsAt
                endsAt
                room
                speakers{
                    name
                }
                title
            }
        }
    }
    `}
    render={({ sessionsData: { sessions } }) => {
        const rooms = sessions.reduce((acc, cur) => acc.includes(cur.room) ? acc : acc.concat(cur.room), [])
        return (
            <>  
                {rooms.map(room => (
                    <>
                        <h2>{room}</h2>
                        {sessions.filter(session => session.room === room)
                            .map(session => (
                                <>
                                    <div>{session.title}</div>
                                    <div>{timeInfo(session.startsAt, session.endsAt)}</div>
                                    <div>{session.speakers.map(speaker => speaker.name)}</div>
                                </>
                            ))
                        }
                    </>
                ))}
            </>
        )
    }}
  />
)

export default ScheduleTable