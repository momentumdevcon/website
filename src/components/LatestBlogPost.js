import React from 'react';
import { sortDates } from '../utils/sortDates'
import { faComment } from '@fortawesome/free-solid-svg-icons';

import BlogInfo from './BlogInfo';
import Icon from './Icon';

const filterForPublished = ({ node: { frontmatter: { published } } }) => published === 'true';

const LatestPost = ({ posts }) => {
  const sortedPosts = posts
    .sort(sortDates)
    .filter(filterForPublished);

  const [latestPost] = sortedPosts;
  const { node: { frontmatter } } = latestPost;

  return (
    latestPost &&
    <section id="two" className="tiles whatIsMomentumTiles blogPost">
      <article>
        <header className="major">
          <h3>
            <span style={{ paddingRight: '12px' }}>
              <Icon icon={faComment} size="sm" />
            </span>
                Latest Blog Post
          </h3>
        </header>
        <BlogInfo info={frontmatter} blogPrefix='/blog/' />
      </article>
    </section>
  )
}

export default LatestPost;
