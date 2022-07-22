import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '../components'
import '../assets/css/pagination.css'

const generateArrFromInt = num => [...Array(parseInt(num, 10)).keys()];

const Paginator = ({ children, pageContext, pageTitle }) => (
  <Wrapper title={pageTitle}>
    <div className="container alt" id="main">
      <div className="inner">
        {children}
      </div>
      <div className='paginationWrapper'>
        {
          generateArrFromInt(pageContext.numberOfPages).map(
            (page) =>
              pageContext.humanPageNumber === page + 1
                ? <div key={page} className='currentPage'>{page + 1}</div>
                : <Link
                  to={`/blog${page === 0 ? '' : `/${page + 1}`}`}
                  className='link'
                  key={page}
                >
                  {page + 1}
                </Link>
          )
        }
      </div>
    </div>
  </Wrapper>
);

export default Paginator;
