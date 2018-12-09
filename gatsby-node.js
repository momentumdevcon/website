/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
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
      resolve();
    });
  });
};
