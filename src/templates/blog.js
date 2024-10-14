import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper } from '../components/'
import { Link } from 'gatsby'
import '../assets/css/blog.css'

export default function BasicTemplate({ data }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <Wrapper title={frontmatter.title}>
      <div className="container alt" id="main">
        <div className="inner">
          <Link to='/blog'>Back to Blogs</Link> <br /><br />
          <div className="blog-author">
            By {frontmatter.author} &mdash;{' '}
            {frontmatter.publishedDate}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Link to='/blog'>Back to Blogs</Link>
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
