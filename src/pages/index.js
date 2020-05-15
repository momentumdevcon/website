import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import metaContent from '../assets/data/metaContent.js'
import { Banner, CallForPresenters, Layout, WhatIsMomentum } from '../components'

const HomeIndex = () => (
  <Layout>
    <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
    <Banner />
    <div id="main">
      <CallForPresenters />
      <WhatIsMomentum />
    </div>
  </Layout>
)

export default HomeIndex

export const query = graphql`
  query {
    sponsorImages: allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
      edges {
        node {
          relativePath
          ...sponsorImage
        }
      }
    }
  }
`
