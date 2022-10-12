import React from 'react';
import { TitoWidget, Wrapper } from '../components';

const TicketsPage = () => (
  <Wrapper title="2022 Tickets">
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <p>Late registration through Thursday, October 13th!</p>
          <TitoWidget source="tickets-page-widget" />
          <p>
            *If you encounter any issues with the integrated purchase experience,
            use our <nsbp/>
            <a href="https://ti.to/the-circuit/momentum-2022?source=widget-issue" target='_blank' rel="noopener noreferrer">
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
