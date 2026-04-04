import React from 'react'

export const ThankYou = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>Thank You!</h3>
      </header>
      <p>
        Thank you to everyone who made Momentum 2025 possible. We are deeply grateful to our sponsors, speakers,
        volunteers, organizers, and attendees. To those of you who selflessly invested long hours - we appreciate you so
        much. Thank you! Momentum 2025 was a truly memorable event and we've been humbled by the positive feedback we've
        received. It's our hope that you'll journey with us as Momentum continues to grow in size, prestige, and
        influence. Plan to join us October of 2026!
      </p>
      <p>
        In the meantime, we're building something for the Cincinnati tech community and we need your input. 
        AI adoption is moving fast, but most of the data out there is national or enterprise-focused. We want to 
        know what's actually happening on the ground here in Cincinnati. We're running a short survey (about 5 minutes) on 
        AI usage and adoption across Cincinnati-area companies, and we'll be publishing the results publicly to help 
        shape programming at local conferences and meetups, including Momentum Dev Con this October.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <a href="https://forms.gle/36Wc62gaSBzLrLaEA" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <button className="banner-btn">AI Adoption Survey</button>
        </a>

        <a href="https://2025.momentumdevcon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <button className="banner-btn">Check out 2025!</button>
        </a>
      </div>
    </article>
  </section>
)
