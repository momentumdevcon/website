import React from 'react';
import { graphql } from 'gatsby';
import { Wrapper } from '../components/';

export default function BasicTemplate({ data }) {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  return (
    <Wrapper title={frontmatter.title}>
      <div
        className="container alt"
        id="main"
      >
        <div
          className="inner"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Wrapper>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
