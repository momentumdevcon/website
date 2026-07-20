import React from 'react'
import Helmet from 'react-helmet'
import { Wrapper } from '../components'
import {
  ticketsAreAvailable,
  whovaRegistrationUrl,
} from '../assets/data/ticketing'

const TicketsPage = () => (
  <Wrapper title="2026 Tickets">
    <Helmet
      title="Momentum 2026 Tickets"
      meta={[
        {
          name: 'description',
          content: ticketsAreAvailable
            ? 'Momentum 2026 tickets are available now. Join us October 15 at the Hard Rock Casino in Cincinnati.'
            : 'Momentum 2026 ticket sales are opening shortly. Join us October 15 at the Hard Rock Casino in Cincinnati.',
        },
      ]}
    />
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <p className="tickets-cta__eyebrow">
            {ticketsAreAvailable ? 'Registration is open' : 'Ticket sales are opening'}
          </p>
          <h2>
            {ticketsAreAvailable
              ? 'Momentum 2026 tickets are available now'
              : 'Momentum 2026 tickets are almost here'}
          </h2>
          <p>
            Get ready for a full day of practical sessions,
            new ideas, and connections with Cincinnati's developer community.
          </p>
          <h3>Thursday, October 15, 2026</h3>
          <p>Hard Rock Casino · Cincinnati, Ohio</p>
          {ticketsAreAvailable ? (
            <p>
              <a
                className="button special next"
                href={whovaRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register on Whova
              </a>
            </p>
          ) : (
            <p>
              The Whova registration link will be available here shortly. Please
              check back soon.
            </p>
          )}
          <hr />
          <h3>What's included</h3>
          <ul>
            <li>35 sessions from local, regional, and international speakers</li>
            <li>Breakfast, lunch, and refreshments throughout the day</li>
            <li>A full day to connect with the developer community</li>
          </ul>
        </div>
      </section>
    </div>
  </Wrapper>
)
export default TicketsPage
