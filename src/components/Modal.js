import React, { useState } from 'react';
import '../assets/css/modal.css';

export const Modal = ({children, formState, updateFormState}) => {
  const [modalStyle, setStyle] = useState('');
  if (typeof window !== 'undefined') {
    window.onclick = ((e) => e.target.className === 'modal' ? setStyle('none') : '')
  }

  return (
    <React.Fragment>
      <button 
        id="modal-btn"
        onClick={() => {
          setStyle('block')
          updateFormState('')
        }}
      >
        Send me email!
      </button>
      <div className="modal" style={{display: modalStyle}}>
        <div className="modal-content">
          <span className="close-btn" onClick={() => setStyle('none')}>&times;</span>
          {formState ? formState : children}
        </div>
      </div>
    </React.Fragment>
  )
}