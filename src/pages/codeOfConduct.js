import React from 'react';
import { Wrapper } from '../components';
// Why is this here? Is this necessary?
import '../assets/css/schedule.css';

const CodeOfConduct = () => (
  <Wrapper title="Code of Conduct">
    <div id="main" className="alt">
      <div className="inner">
        <p>
  At Momentum Developer Conference, we value all our speakers and attendees. Our goal is to make this conference a safe space where new and experienced developers can connect and learn from one another. Therefore, we do not tolerate any form of harassment or prejudice. This Code of Conduct governs both in-person events as well as online forums, including but not limited to social media.
        </p>

        <p>
  Harassment includes but is not limited to:
        </p>
        <ul>
          <li>Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, mental illness, physical appearance, body size, race, age, or religion</li>
          <li>Sexual images in public spaces</li>
          <li>Racist or derogatory jokes, imagery, or content</li>
          <li>Inappropriate physical contact</li>
          <li>Unwelcome sexual attention</li>
          <li>Deliberate intimidation, stalking, or following</li>
          <li>Deliberately referring to someone with incorrect pronouns</li>
        </ul>
        <p>
  Members who violate this code of conduct will be approached by the organizers and asked to stop immediately. Members may also be banned from attending future Momentum Developer Conferences and removed from the Slack workspace.
        </p>

        <p>
  If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. To report an incident of harassment you can either talk directly to one of our co-organizers, before, after, or during the meetup, or email us at <a href="mailto:codeofconduct@momentumdevcon.com">codeofconduct@momentumdevcon.com</a>.
        </p>

        <p>
  Our primary goal is to support you. We will listen to you and then help you determine a course of action based on the situation. While harassment may not always result in that member being expelled from the group, depending on the type and severity of harassment. We want to make sure you have all the support you need no matter what that entails, including whether to stay anonymous or not. Whatever decision you make, our priority is your safety. 
        </p>
      </div>
    </div>
  </Wrapper>

);
export default CodeOfConduct;
