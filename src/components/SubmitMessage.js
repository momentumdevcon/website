import React from 'react';
import '../assets/css/submitMessage.css';

export const SubmitMessage = ({heading, body}) => (
  <div className="Submit-Message">
    <h2>{heading}</h2>
    <p>{body}</p>
  </div>
);