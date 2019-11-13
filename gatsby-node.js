/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const markdownTemplate = path.resolve('src/templates/markdown.js');

  const result = await graphql(`{
    allMarkdownRemark(
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: markdownTemplate,
      context: {}, // additional data can be passed via context
    });
  });

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
          speakers{
            name
          }
          categories{
            alternative_id
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
    });
  
  return Promise.all([sessions]);
};
