import React from 'react'
import { Link } from 'gatsby'
import { ticketsAreAvailable } from '../assets/data/ticketing'

export const TicketsCTA = () => (
  <section id="tickets-on-sale" className="tickets-cta">
    <article>
      <p className="tickets-cta__eyebrow">
        {ticketsAreAvailable ? 'Registration is open' : 'Ticket sales are opening'}
      </p>
      <h2>
        {ticketsAreAvailable
          ? 'Momentum 2026 tickets are available now'
          : 'Momentum 2026 tickets are almost here'}
      </h2>
      <p>
        Join Cincinnati's developer community at the Hard Rock Casino on October 15.
        {ticketsAreAvailable
          ? ' Reserve your spot today.'
          : ' Registration will be available through Whova shortly.'}
      </p>
      <Link className="button special next" to="/tickets">
        {ticketsAreAvailable ? 'Get tickets' : 'View ticket details'}
      </Link>
    </article>
  </section>
)
