import React from 'react';
import CFPBanner from '../assets/images/CFP-Banner.png'
import '../assets/css/callForPresenters.css'

const CallForPresenters = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major cfp">
        <h3>CFP Now Open!</h3>
        <a href="https://sessionize.com/momentum-2021" target="_blank" className="no-underline" rel="noopener">
          <img
            className="banner"
            src={CFPBanner}
            alt="Cfp now open through May 31"
          />
        </a>
      </header>
      <p>
      We are moving forward with our plans to have an in-person conference on October 15, and have opened up our call for presenters! 
      If you would like to be considered for presenting at Momentum 2021, put your best ideas together and get them over to us on <a href="https://sessionize.com/momentum-2021">Sessionize</a> 
       . Wow us with your expertise, or show us something we haven’t already seen. Our speaker selection committee is excited to watch the talks come rolling in. 
      Our CFP is open May 1-31st, but don’t procrastinate. <a href="https://sessionize.com/momentum-2021">Submit your proposal today!</a>
      </p>
    </article>
  </section>
)

export default CallForPresenters;
