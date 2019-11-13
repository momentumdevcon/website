import React, { useState } from 'react';
import '../assets/css/modal.css';

const Modal = ({children, formState, updateFormState}) => {
  const [modalStyle, setStyle] = useState('');
  if (typeof window !== 'undefined') {
    window.onclick = ((e) => e.target.className === 'modal' ? setStyle('none') : '')
  }

  return (
    <React.Fragment>
      <button 
        id="modal-btn"
        style={{background: "rgba(36,41,67,.8)"}}
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

export default Modal;