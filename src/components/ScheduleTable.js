import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import '../assets/css/schedule.css'
import timeInfo from '../utils/formatTime'

const ScheduleTable = props => (
  <StaticQuery
    query={graphql`
      query ScheduleQuery {
        sessionsData {
            sessions {
                alternative_id
                categories {
                    categoryItems {
                        name
                    }
                }
                endsAt
                room
                speakers{
                    name
                }
                startsAt
                title
            }
        }
    }
    `}
    render={({ sessionsData: { sessions } }) => {
        const rooms = sessions.reduce((acc, cur) => acc.includes(cur.room) ? acc : acc.concat(cur.room), [])
        const startTimes = sessions.reduce((acc, cur) => acc.includes(cur.startsAt) ? acc : acc.concat(cur.startsAt), [])
            .map(time => timeInfo(time).split(' ')[0] + ' ' + timeInfo(time).split(' ')[1])
        return (
            <div className='schedule-wrapper'> 
                {startTimes.map(time => <h3 className={time}>{time}</h3>)}
                {rooms.map(room => (
                    <>
                        <h3 className={room}>{room}</h3>
                        {sessions.filter(session => session.room === room)
                            .map(session => (
                                <div className={session.room.split(' ')[0] + '-' + timeInfo(session.startsAt).split(' ')[0]}>
                                    <div>{session.title}</div>
                                    <div>{timeInfo(session.startsAt, session.endsAt)}</div>
                                    <div>{session.speakers.map(speaker => speaker.name)}</div>
                                    <div>{session.categories.map(category => <div>{category.categoryItems.map(item => item.name)}</div>)}</div>
                                </div>
                            ))
                        }
                    </>
                ))}
            </div>
        )
    }}
  />
)

export default ScheduleTable