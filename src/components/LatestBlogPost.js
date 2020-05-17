import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import Icon from './Icon'

const formatDate = (date) => moment(date.replace(/-/g, '/'), 'YYYY/MM/DD', true).valueOf();
const sortDates = (a, b) =>
  formatDate(a.node.frontmatter.publishedDate) < formatDate(b.node.frontmatter.publishedDate) ? 1 : -1;
const filterForPublished = ({ node: { frontmatter: { published } } }) => published === 'true';

export const LatestPost = ({ posts }) => {
  const sortedPosts = posts
    .sort(sortDates)
    .filter(filterForPublished);

  const [latestPost] = sortedPosts;
  const { node: { frontmatter } } = latestPost;

  return (
    latestPost &&
    <section id="two" className="tiles whatIsMomentumTiles latestBlogPost">
      <article>
        <header className="major">
          <h3>
            <span style={{ paddingRight: '12px' }}>
              <Icon iconName='comment' className="fa-md" />
            </span>
                Latest Blog Post
          </h3>
        </header>
        <Link
          to={`${frontmatter.template}/${frontmatter.slug}`}
          className='blogTitle'
          style={{ fontSize: '1.3rem' }}
        >
          {`${frontmatter.title}`}
        </Link>
        <p 
          className='blogSummary'
          style={{ fontSize: '1.1rem' }}
        >
          {frontmatter.summary}
        </p>
        <div className='iconAndText' style={{ display: 'flex' }}>
          <span className='icon'>
            <Icon iconName='user' />
          </span>
          <p>{`${frontmatter.author}`}</p>
          <span className='icon' style={{ marginLeft: '20px' }}>
            <Icon iconName='calendar' />
          </span>
          <p>{`${frontmatter.publishedDate}`}</p>
        </div>
      </article>
    </section>
  )
}

export default LatestPost;
