import React from 'react'
import { graphql } from 'gatsby'
import { BlogInfo, Paginator } from '../components'

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Paginator pageContext={pageContext} pageTitle='Blog'>
      <div className='container alt' id='main'>
        <div className='inner'>
          {
            posts.map(({ node: { frontmatter } }) => {
              return (
                <section
                  id="two"
                  className="tiles whatIsMomentumTiles blogPost"
                  key={frontmatter.slug}
                >
                  <article>
                    <BlogInfo info={frontmatter} />
                  </article>
                </section>
              )
            })
          }
        </div>
      </div>
    </Paginator>
  )
}
export default BlogList

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { publishedDate: DESC } }
      filter: { frontmatter: { template: { eq: "blog" } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            template
            title
            slug
            author
            publishedDate
            summary
          }
        }
      }
    }
  }
`
