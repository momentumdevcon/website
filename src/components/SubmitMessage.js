import React from 'react';
import '../assets/css/submitMessage.css';

const SubmitMessage = ({heading, body}) => (
  <div className="Submit-Message">
    <h2>{heading}</h2>
    <p>{body}</p>
  </div>
);

export default SubmitMessage;