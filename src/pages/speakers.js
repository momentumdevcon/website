import React from 'react';
import { SpeakersList, Wrapper } from '../components';

const SpeakersPage = () => (
  <Wrapper title="2021 Speakers">
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <SpeakersList />
        </div>
      </section>
    </div>
  </Wrapper>
);

export default SpeakersPage;