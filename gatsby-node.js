/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const sessions = graphql(`
    {
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
          startsAt
          endsAt
          speakers{
            name
          }
          categories{
            categoryItems{
              name
            }
          }
          title
        }
      }
    }
  `).then((result) => {
      result.data.sessionsData.sessions.forEach(({ alternative_id }) => {
        createPage({
          path: `/session/${alternative_id}`,
          component: path.resolve('./src/templates/session.js'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: alternative_id,
          },
        });
      });

      result.data.sessionizeData.speakers.forEach(({ fullName }) => {
        const slug = fullName.split(' ').join('_');
        createPage({
          path: `/speakers/${slug}`,
          component: path.resolve('./src/templates/speaker.js'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug,
          },
        });
      });
      console.log(' ***** IM THE DATA *********', result.data.sessionsData.sessions)
    });
  
  return Promise.all([sessions]);
};
