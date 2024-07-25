/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('src/templates/blog.js')
  const markdownTemplate = path.resolve('src/templates/markdown.js')

  // Create blog pages
  const blogsResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "blog" } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (blogsResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  blogsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // Create the BlogList page with pagination
  paginate({
    createPage,
    items: blogsResult.data.allMarkdownRemark.edges,
    itemsPerPage: 4,
    pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve('src/templates/blogList.js'), // Just like `createPage()`
  })

  // Create Markdown pages
  const markdownResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "markdown" } } }
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
    }
  `)

  if (markdownResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  markdownResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: markdownTemplate,
      context: {}, // additional data can be passed via context
    })
  })


  // Create speaker and sessions pages
  const sessionsAndSpeakersResult = await graphql(`
    query AllInfo {
      allSpeakers(filter: {id: {ne: "dummy"}}) {
        nodes {
          fullName
          alternative_id
          bio
          firstName
          isTopSpeaker
          lastName
          links {
            linkType
            title
            url
          }
          sessions {
            alternative_id
            name
          }
          tagLine
          profilePicture
        }
      }
      allSessions(filter: {id: {ne: "dummy"}}) {
        nodes {
          sessions {
            title
            status
            description
            categories {
              alternative_id
              name
              categoryItems {
                alternative_id
                name
              }
            }
            isConfirmed
            isInformed
            isPlenumSession
            isServiceSession
            alternative_id
            speakers {
              alternative_id
              name
            }
          }
        }
      }
    }
  `)
  if (sessionsAndSpeakersResult.errors) {
    reporter.panicOnBuild("Error while running speakers and sessions GraphQL query.")
    return
  }

  const speakers = sessionsAndSpeakersResult.data.allSpeakers.nodes
  const sessions = sessionsAndSpeakersResult.data.allSessions.nodes[0].sessions

  speakers.forEach(({ fullName }) => {
    const slug = fullName.split(' ').join('_')
    createPage({
      path: `/speakers/${slug}`,
      component: path.resolve('./src/templates/speaker.js'),
      context: {
        slug,
      },
    })
  })


  sessions.forEach(({ alternative_id }) => {
    createPage({
      path: `/session/${alternative_id}`,
      component: path.resolve('./src/templates/session.js'),
      context: {
        slug: alternative_id,
      },
    })
  })


}
