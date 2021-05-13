import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper } from '../components/'
import '../assets/css/blog.css'

export default function BasicTemplate({ data }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <Wrapper title={frontmatter.title}>
      <div className="container alt" id="main">
        <div className="inner">
          <div className="blog-author">
            By {frontmatter.author} &mdash;{' '}
            {frontmatter.publishedDate}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        author
        publishedDate
      }
    }
  }
`
