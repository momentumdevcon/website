import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { metaContent } from '../assets/data/metaContent.js'

import { Banner, Layout, LatestBlogPost, WhatIsMomentum } from '../components'

const HomeIndex = ({ data }) => (
  <Layout>
    <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
    <Banner />
    <div id="main">
    <div id="whova-regform-widget" data-reactroot=""></div>
      <div id="whova-regform-seo-widget" data-reactroot="">
        Powered By <a class="brandlink" target="_blank" href="https://whova.com"><b>Whova</b></a>
        <br/>
        <a class="brandanchorlink" target="_blank" href="https://whova.com/event-registration-software">Conference registration system</a>
        </div>
        <script src="https://whova.com/static/frontend/xems/js/whova-regform-widget.js?eid=HYDIeQD2e6sV8sR@9Ok4&amp;host=https://whova.com&amp;registration=attendee&amp;regpagetoken=" type="text/javascript" id="whova-embeded-regform-script" data-reactroot=""></script>
      <WhatIsMomentum />
      <LatestBlogPost posts={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export default HomeIndex

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "blog" } } }) {
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
