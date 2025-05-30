import React from 'react'
import { Link } from 'gatsby'
import { Icon } from './Icon'
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons'

export const BlogInfo = ({ info, blogPrefix = '/blog/' }) => (
  <>
    <Link
      to={`${blogPrefix ? blogPrefix : ''}${info.slug}`}
      className="blogTitle"
      style={{ fontSize: '1.3rem' }} /*  */
    >
      {`${info.title}`}
    </Link>
    <p className="blogSummary" style={{ fontSize: '1.1rem' }}>
      {info.summary}
    </p>
    <div className="iconAndText" style={{ display: 'flex' }}>
      <span className="icon">
        <Icon icon={faUser} size="xl" />
      </span>
      <p>{`${info.author}`}</p>
      <span className="icon" style={{ marginLeft: '20px' }}>
        <Icon icon={faCalendarAlt} size="xl" />
      </span>
      <p>{`${info.publishedDate}`}</p>
    </div>
  </>
)
