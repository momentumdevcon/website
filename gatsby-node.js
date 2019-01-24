/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const sessions = graphql(`
    {
      sessionsData {
        sessions {
          alternative_id
          description
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
    });

  const speakers = graphql(`
    {
      sessionizeData {
        speakers {
          fullName
        }
      }
    }
  `).then((result) => {
      result.data.sessionizeData.speakers.forEach(({ fullName }) => {
        createPage({
          path: `/speakers/${fullName}`,
          component: path.resolve('./src/templates/speaker.js'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: fullName,
          },
        });
      });
    });
  
  return Promise.all([sessions, speakers]);
};
