// import React from 'react';
// import { StaticQuery, graphql, Link } from 'gatsby';
// import '../assets/css/schedule.css'
// import timeInfo from '../utils/formatTime'

// Commenting out until we have the schedule since this graphql query will fail for missing fields

// const ScheduleTable = () => (
//   <StaticQuery
//     query={graphql`
//       query ScheduleQuery {
//         sessionsData {
//             sessions {
//                 alternative_id
//                 categories {
//                     categoryItems {
//                         name
//                     }
//                 }
//                 endsAt
//                 room
//                 startsAt
//                 title
//                 speakers {
//                     name
//                 }
//             }
//         }
//     }
//     `}
//     render={({ sessionsData: { sessions } }) => {
//       const rooms = sessions.reduce((acc, cur) => acc.includes(cur.room) ? acc : acc.concat(cur.room), []).sort();
//       const rawStartTimes = sessions.reduce((acc, cur) => acc.includes(cur.startsAt) ? acc : acc.concat(cur.startsAt), [])
//       return (
//         <div className='table-grid'>
//           <div className="table-grid__row hide-sm">
//             <div className="table-grid__cell table-grid__cell--header"></div>
//             {rooms.map((room, i) => <div key={i} className="table-grid__cell table-grid__cell--header">{room}</div>)}
//           </div>
//           {
//             rawStartTimes.map(time => {
//               const periodSessions = sessions.filter(session => session.startsAt === time)
//                 .sort((firstSession, secondSession) => {
//                   return(firstSession.room > secondSession.room) ? 1 : -1
//                 })
//                 .map(session => {
//                   return (
//                     <div className="table-grid__cell" key={session.alternative_id}>
//                       <span className="table-grid__cell-label">{session.room}</span>
//                       <Link to={`/session/${session.alternative_id}`}>
//                         <span className="table-grid__cell-body">{session.title}</span>
//                       </Link>
//                       {session.speakers.map((speaker, i) => (
//                         <Link id={i} to={`/speakers/${speaker.name.replace(/ /g, '_')}`} key={speaker.name}>
//                           <div className="table-grid__cell-speaker"><i>{speaker.name}</i></div>
//                         </Link>
//                       ))}
//                       <div className="category-container">
//                         {session.categories.map((categoriesObject, i) => categoriesObject.categoryItems.map((category, j) => (
//                           <span key={`${i}-${j}`}><span className={`table-grid__cell-tag-${i}`}>{category.name}</span></span>
//                         )))}
//                       </div>
//                     </div>
//                   )})
//               return (
//                 <div className="table-grid__row" key={time}>
//                   <div className="table-grid__cell table-grid__cell--header">
//                     {timeInfo(time).substring(0, timeInfo(time).indexOf('M') + 1)}
//                   </div>
//                   {periodSessions}
//                 </div>
//               )
//             })
//           }
//         </div>
//       )
//     }}
//   />
// )

export const ScheduleTable = () => {}
