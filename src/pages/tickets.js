import React from 'react';
import { TitoWidget, Wrapper } from '../components';

const TicketsPage = () => (
  <Wrapper title="2023 Tickets">
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h3>Early Bird Ticket Sales Close August 15!</h3>
          <TitoWidget />
          <p>
            *If you encounter any issues with the integrated purchase experience,
            use our <nsbp/>
            <a href="https://ti.to/the-circuit/momentum-2023?source=widget-issue" target='_blank' rel="noopener noreferrer">
              Tito page 
            </a>
            <nsbp/> directly.
          </p>
        </div>
      </section>
    </div>
  </Wrapper>
);
export default TicketsPage;
