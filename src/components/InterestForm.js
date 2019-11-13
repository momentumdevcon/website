import React, { useState } from 'react';
import Modal from './Modal';
import encode from '../utils/encode';
import '../assets/css/interestForm.css';
import SubmitMessage from '../components/SubmitMessage';
import submitMessages from '../assets/data/submitMessages.json';

const handleSubmit = (e, name, email, interest, updateFormState) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "Register",
      name,
      email,
      ...interest
    })
  })
    .then(() => updateFormState(
      <SubmitMessage 
        heading={submitMessages.success.heading}
        body={submitMessages.success.body}
      />
    ))
    .catch(() => updateFormState(
      <SubmitMessage 
        heading={submitMessages.error.heading}
        body={submitMessages.error.body}
      />
    ));

  e.preventDefault();
};

const updateCheckbox = (option, interest, updateInterest) => {
  updateInterest({
    ...interest,
    [option.value]: option.checked
  })
}

const InterestForm = () => {
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [interest, updateInterest] = useState({});
  const [formState, updateFormState] = useState('');

  return (
    <Modal formState={formState} updateFormState={updateFormState}>
      <div id="main" className="InterestForm">
        <form method="post" data-netlify="true" name="Register" netlify-honeypot="bot-field" onSubmit={(e) => handleSubmit(e, name, email, interest, updateFormState)}>
          <input type="hidden" name="form-name" value="Register" />
          <input type="hidden" name="bot-field" />
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={(e) => updateName(e.target.value)} />
          </div>
          <div>
            <label className="Required-Field" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={(e) => updateEmail(e.target.value)} />
          </div>
          <fieldset className="Interest">
            <label htmlFor="interest">I'm interested in</label>
            <div className="Interest-Checkboxes">
              <div>
                <input type="checkbox" id="Attending" name="Attending" value="Attending" onChange={(e) => updateCheckbox(e.target, interest, updateInterest)} />
                <label htmlFor="Attending">Attending</label>
              </div>
              <div>
                <input type="checkbox" id="Sponsoring" name="Sponsoring" value="Sponsoring" onChange={(e) => updateCheckbox(e.target, interest, updateInterest)} />
                <label htmlFor="Sponsoring">Sponsoring</label>
              </div>
              <div>
                <input type="checkbox" id="Volunteering" name="Volunteering" value="Volunteering" onChange={(e) => updateCheckbox(e.target, interest, updateInterest)} />
                <label htmlFor="Volunteering">Volunteering</label>
              </div>
            </div>
          </fieldset>
          <p className="privacy-terms">By submitting this form, you agree to Momentum's
            <a href="/terms-of-use"> Terms of Use</a> and 
            <a href="/privacy-policy"> Privacy Policy</a>.
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Modal>
  )
}

export default InterestForm;
