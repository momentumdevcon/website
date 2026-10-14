import React from 'react'

// Shared inline style so the anchor wrappers don't pick up the theme's link underline.
const buttonLinkStyle = { textDecoration: 'none', borderBottom: 'none' }

export const ThankYou = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <header className="major">
        <h3>Thank You!</h3>
      </header>
      <p>
        Thank you to everyone who made Momentum 2026 possible. We are deeply grateful to our sponsors, speakers,
        volunteers, organizers, and attendees. To those of you who selflessly invested long hours - we appreciate you so
        much. Thank you! Momentum 2026 was a truly memorable event and we've been humbled by the positive feedback we've
        received. It's our hope that you'll journey with us as Momentum continues to grow in size, prestige, and
        influence. Plan to join us October of 2027!
      </p>
      <p>
        Have thoughts on this year's conference? Rate the sessions you attended and share your feedback in the Whova
        app. Your input directly shapes what Momentum looks like next year.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <a
          href="https://whova.com/portal/webapp/oCGOLtl6mKCQJu1DhJM@/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonLinkStyle}
        >
          <button className="banner-btn">Provide Feedback</button>
        </a>

        <a href="https://2025.momentumdevcon.com" target="_blank" rel="noopener noreferrer" style={buttonLinkStyle}>
          <button className="banner-btn">Check out 2025!</button>
        </a>
      </div>
    </article>
  </section>
)
