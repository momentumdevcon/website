import React from 'react'

export const CallForPresentersClosed = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>Call for Speakers Now Closed!</h3>
      </header>
      <p>
        Our 2023 Call for Speakers is now closed. Thank you to everyone who took
        the time and effort to submit their abstracts!
      </p>
    </article>
  </section>
)

export const CallForPresentersOpen = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>Call for Speakers Now Open!</h3>
      </header>
      <p>
        If you would like to be considered for presenting at Momentum 2024, put
        your best ideas together and get them over to us on Sessionize . Wow us
        with your expertise, or show us something we haven’t seen. Our CFP is
        open until May 31st!
        <br />
        <a
          href="https://sessionize.com/momentum-2024/"
          target="_blank"
          rel="noreferrer"
        >
          Link to CFP
        </a>
      </p>
      <p>
        Need help with your abstract?{' '}
        <a
          href="https://momentumdevcon.slack.com/"
          target="_blank"
          rel="noreferrer"
        >
          Join our Slack group
        </a>{' '}
        to talk about your ideas and get help from organizers and other
        speakers.
      </p>
    </article>
  </section>
)
