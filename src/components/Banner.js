import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { InterestForm } from '.'
import { conferenceDate, toLocalIsoDate } from '../assets/data/ticketing'
import '../assets/css/banner.css'

// Shows a pulsing "Live now" badge only on the visitor's local conference day.
// Checked after mount (not during render) so the static HTML Gatsby builds never bakes it in.
const LiveBadge = () => {
  const [isLive, setIsLive] = useState(false)
  useEffect(() => {
    setIsLive(toLocalIsoDate(new Date()) === conferenceDate)
  }, [])
  if (!isLive) return null
  return (
    <span className="live-badge">
      <span className="live-badge__dot" aria-hidden="true" />
      Live now
    </span>
  )
}

export const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Momentum Developer Conference</h1>
      </header>
      <div className="content">
        <p>
          Powered by{' '}
          <a href="https://www.thecircuit.net/" target="_blank" rel="noreferrer">
            The Circuit
          </a>
        </p>
      </div>
      <p className="date">
        October 15, 2026 <LiveBadge />
      </p>
      <div className="banner-actions">
        {/* <Link className="button special" to="https://whova.com/portal/registration/2ev2ReOea-5UJ4yBtC2-/" target="_blank">
          {ticketsAreAvailable ? 'Get tickets' : 'Ticket details'}
        </Link> */}
        <Link className="button special" to="/schedule">
          Check out the schedule
        </Link>
        <InterestForm />
      </div>
    </div>
  </section>
)
