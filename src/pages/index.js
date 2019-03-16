import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Banner } from '../components';
import { graphql } from 'gatsby'
import metaContent, { mainDescription } from '../assets/data/metaContent.js';

import {sponsors,  query as sponsorImageQuery } from '../components/SponsorData'

import Img from 'gatsby-image'


const HomeIndex = ({ data }) =>{
  return (
  <Layout>
    <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
    
    <Banner />
    <div id="main">
      <section id="one" className="tiles whatIsMomentumTiles">
        <article>
          <header className="major">
            <h3>What is Momentum?</h3>
          </header>
          <p>
            {mainDescription}
          </p>
          <header className="major">
            <h4>What does my ticket include?</h4>
          </header>
          <ul>
           <li>35 sessions of outstanding content presented by speakers from Cincinnati, the region, and around the globe</li>
           <li>Breakfast, lunch, and happy hour</li>
           <li>Refreshments throughout the day</li>
           <li>Connect and chat with some of Cincinnati's best developers</li>
          </ul>
        </article>
      </section>
      <section id="two" className="tiles">
        <article className="sponsorsArticle">
          <header className="major">
            <h3>Sponsors</h3>
          </header>
          <div className="sponsors">
            {sponsors.map(({ key, fileName, link, alt }) => (
              <div key={key} className="sponsorWrapper">
                <a href={link} target="_blank" rel="noopener" style={{ height: '100%', width: '200px' }}
                    alt={alt}>
                  <Img
                    fixed={data.sponsorImages.edges.find(n => n.node.relativePath === fileName).node.childImageSharp.image200}
                  />
                </a>
              </div>
            ))}
          </div>
          <p>
            Interested in becoming a sponsor? Email us at{' '}
            <a href="mailto:sponsors@momentumdevcon.com">
              sponsors@momentumdevcon.com
            </a>
          </p>
        </article>
      </section>
    </div>
  </Layout>
)}

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
