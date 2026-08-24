/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { getSessionizeSessions } = require('./src/utils/getSessionizeSessions')

const SESSIONIZE_API = 'https://sessionize.com/api/v2/oildqvig/view'
const SESSIONIZE_REQUEST_TIMEOUT_MS = 15000

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
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    signal: AbortSignal.timeout(SESSIONIZE_REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(
      `Sessionize request for ${endpoint} failed with ${response.status} ${response.statusText}`
    )
  }

  return normalizeSessionizeIds(await response.json())
}

/**
 * Sessionize sends null startsAt, endsAt and room until the schedule is public.
 * Gatsby does not infer a field that is null in every node, so queries fail.
 *
 * - Declare the session shape so the fields exist before the schedule is public.
 * - Keep startsAt and endsAt as String. Sessionize sends no time zone. With a
 *   Date field, Gatsby adds UTC and the schedule shows the wrong clock times.
 */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type SessionizeSessionGroup implements Node {
      groupId: String
      groupName: String
      sessions: [SessionizeSession!]
    }

    type SessionizeSession {
      alternative_id: String
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      roomId: Int
      status: String
      isConfirmed: Boolean
      isInformed: Boolean
      isPlenumSession: Boolean
      isServiceSession: Boolean
      speakers: [SessionizeSessionSpeaker!]
      categories: [SessionizeSessionCategory!]
    }

    type SessionizeSessionSpeaker {
      alternative_id: String
      name: String
    }

    type SessionizeSessionCategory {
      alternative_id: Int
      name: String
      sort: Int
      categoryItems: [SessionizeSessionCategoryItem!]
    }

    type SessionizeSessionCategoryItem {
      alternative_id: Int
      name: String
    }
  `)
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
          type: 'SessionizeSpeaker',
          contentDigest: createContentDigest(speaker),
        },
      })
    })

    sessionGroups.forEach((sessionGroup, index) => {
      const sessionGroupKey =
        sessionGroup.groupId || sessionGroup.groupName || 'default'

      createNode({
        ...sessionGroup,
        id: createNodeId(
          `sessionize-session-group-${sessionGroupKey}-${index}`
        ),
        parent: null,
        children: [],
        internal: {
          type: 'SessionizeSessionGroup',
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
      allSessionizeSpeaker(filter: {id: {ne: "dummy"}}) {
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
      allSessionizeSessionGroup(filter: {id: {ne: "dummy"}}) {
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

  const speakers = sessionsAndSpeakersResult.data.allSessionizeSpeaker.nodes
  const sessions = getSessionizeSessions(
    sessionsAndSpeakersResult.data.allSessionizeSessionGroup
  )

  speakers.forEach(({ fullName }) => {
    const slug = fullName.trim().split(/\s+/).join('_')
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
