import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import metaContent from '../assets/data/metaContent.js'
import { 
  CovidPolicyBlurb,
  Banner,
  Layout,
  LatestBlogPost,
  TicketsCTA,
  WhatIsMomentum
} from '../components'

const HomeIndex = ({ data }) => (
  <Layout>
    <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
    <Banner />
    <div id="main">
      <TicketsCTA />
      <CovidPolicyBlurb />
      <WhatIsMomentum />
      <LatestBlogPost posts={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export default HomeIndex

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "blog"}}}) {
      edges {
        node {
          frontmatter {
            template
            slug
            author
            publishedDate
            title
            published
            summary
          }
        }
      }
    }
  }
`
