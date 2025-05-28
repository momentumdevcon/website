import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../assets/css/modal.css'

export const Modal = ({ children, formState, updateFormState }) => {
  const [modalStyle, setStyle] = useState('')
  if (typeof window !== 'undefined') {
    window.onclick = (e) => (e.target.className === 'modal' ? setStyle('none') : '')
  }

  return (
    <React.Fragment>
      <div className="container">
        {/* <Link
          to="https://feedback.momentumdevcon.com"
          style={{ textDecoration: 'none', borderBottom: 'none', paddingRight: '15px', paddingBottom: '10px' }}
          target="_blank"
        >
          <button className="banner-btn">Provide Feedback</button>
        </Link> */}
        {/* <Link
          to="https://app.momentumdevcon.com/"
          style={{ textDecoration: 'none', borderBottom: 'none', paddingRight: '15px', paddingBottom: '10px' }}
          target="_blank"
        >
          <button className="banner-btn">Momentum App</button>
        </Link> */}
        {/*
      <Link to="/blog/what-to-expect-2025" style={{ textDecoration: 'none', borderBottom: 'none', paddingRight: '15px', paddingBottom: '10px'  }}>
      <button  className='banner-btn'>What To Expect</button>
      </Link>*/}
      {
      <Link to="mailto:sponsors@momentumdevcon.com" style={{ textDecoration: 'none', borderBottom: 'none', paddingRight: '15px', paddingBottom: '10px'  }}>
      <button  className='banner-btn'>Inquire about sponsorship</button>
      </Link>}

        <button
          className="banner-btn"
          onClick={() => {
            setStyle('block')
            updateFormState('')
          }}
        >
          Send me email!
        </button>
      </div>
      <div className="modal" style={{ display: modalStyle }}>
        <div className="modal-content">
          <span className="close-btn" onClick={() => setStyle('none')}>
            &times;
          </span>
          {formState ? formState : children}
        </div>
      </div>
    </React.Fragment>
  )
}
