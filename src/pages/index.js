import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { metaContent } from '../assets/data/metaContent.js'
import { Banner, Layout, LatestBlogPost, WhatIsMomentum } from '../components'

const VISIBLE_HEIGHT = 1000; 

const HomeIndex = ({ data }) => {
  const whovaRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const container = whovaRef.current
    if (!container) return

    const existing = document.getElementById('whova-embeded-regform-script')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.src =
      'https://whova.com/static/frontend/xems/js/whova-regform-widget.js?eid=HYDIeQD2e6sV8sR@9Ok4&host=https://whova.com&registration=attendee&regpagetoken='
    script.type = 'text/javascript'
    script.id = 'whova-embeded-regform-script'
    container.insertAdjacentElement('afterend', script)

    const mo = new MutationObserver(() => {
      const iframe = container.querySelector('iframe')
      if (iframe) {
        iframe.style.width = '100%';
        iframe.style.height = `${VISIBLE_HEIGHT}px`;
        iframe.style.border = '0';
      }
    })
    mo.observe(container, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      script.remove()
    }
  }, [])

  return (
    <Layout>
      <Helmet title="Momentum Developer Conference" meta={[...metaContent]} />
      <Banner />
      <div id="main">
        <section className="whova-band">
          <div className="whova-inner">
            <div id="whova-regform-widget" ref={whovaRef} className="whova-frame" />
          </div>
        </section>

        <WhatIsMomentum />
        <LatestBlogPost posts={data.allMarkdownRemark.edges} />
      </div>

      <style>{`
        .whova-band {
          position: relative;
          padding: 24px 0;
        }
        .whova-band::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          top: 0;
          bottom: 0;
          background: #242943; /* navy */
          z-index: 0;
        }
        .whova-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .whova-frame {
          background: transparent !important;
          overflow: hidden;                 /* clip extra height */
          border-radius: 12px;
        }
        #whova-regform-widget iframe {
          display: block;
          width: 100% !important;
          height: ${VISIBLE_HEIGHT}px !important;  /* ensure the shorter height */
          border: 0;
          background: transparent !important;
        }
        .registration-widget-wrapper {
          background: #303658 !important;
        }
        .whova-seo { margin-top: 12px; text-align: center; }
      `}</style>
    </Layout>
  )
}

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
