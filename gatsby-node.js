/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { execFile } = require('child_process')
const { promisify } = require('util')

const execFileAsync = promisify(execFile)

const SESSIONIZE_API = 'https://sessionize.com/api/v2/trh93sgi/view'

const normalizeSessionizeIds = (value) => {
  if (Array.isArray(value)) {
    return value.map(normalizeSessionizeIds)
  }

  if (value && typeof value === 'object') {
    return Object.entries(value).reduce((acc, [key, childValue]) => {
      const normalizedKey = key === 'id' ? 'alternative_id' : key
      acc[normalizedKey] = normalizeSessionizeIds(childValue)
      return acc
    }, {})
  }

  return value
}

const fetchSessionizeData = async (endpoint) => {
  const url = `${SESSIONIZE_API}/${endpoint}`
  const { stdout } = await execFileAsync('curl', [
    '--fail',
    '--silent',
    '--show-error',
    '--location',
    '--header',
    'Content-Type: application/json',
    url,
  ], { maxBuffer: 1024 * 1024 * 10 })

  return normalizeSessionizeIds(JSON.parse(stdout))
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, reporter }) => {
  const { createNode } = actions

  try {
    const [speakers, sessionGroups] = await Promise.all([
      fetchSessionizeData('speakers'),
      fetchSessionizeData('sessions'),
    ])

    speakers.forEach((speaker) => {
      createNode({
        ...speaker,
        id: createNodeId(`sessionize-speaker-${speaker.alternative_id}`),
        parent: null,
        children: [],
        internal: {
          type: 'speakers',
          contentDigest: createContentDigest(speaker),
        },
      })
    })

    sessionGroups.forEach((sessionGroup) => {
      createNode({
        ...sessionGroup,
        id: createNodeId(`sessionize-session-group-${sessionGroup.alternative_id}`),
        parent: null,
        children: [],
        internal: {
          type: 'sessions',
          contentDigest: createContentDigest(sessionGroup),
        },
      })
    })
  } catch (error) {
    reporter.panicOnBuild('Error while loading Sessionize data.', error)
  }
}

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
