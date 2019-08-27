import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

// const ScheduleTable = props => (
//   <StaticQuery
//     query={graphql`
//       query SessionQuery {
//         sessionsData {
//           sessions {
//             alternative_id
//             speakers{
//               name
//             }
//             title
//           }
//         }
//       }
//     `}
//     render={({ sessionsData: { sessions } }) => (
//         <div>{sessions}</div>
//     )}
//     />
// )

// export default ScheduleTable