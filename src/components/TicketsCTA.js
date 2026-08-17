import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import {
  findActiveTier,
  formatTierDate,
  ticketsAreAvailable,
  ticketTiers,
  toLocalIsoDate,
  whovaRegistrationUrl,
} from '../assets/data/ticketing'

export const TicketsCTA = () => {
  // Resolved after mount rather than at module scope: this site is statically generated, so
  // computing at build time would freeze the highlight to whenever the site was last deployed.
  // Null until hydration, which also keeps the server and first client render identical.
  const [todayIso, setTodayIso] = useState(null)

  useEffect(() => {
    setTodayIso(toLocalIsoDate(new Date()))
  }, [])

  const activeTier = todayIso ? findActiveTier(todayIso) : undefined

  return (
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
        <div className="table-wrapper tickets-cta__pricing">
          <table>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Price</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              {ticketTiers.map((tier) => {
                const isActive = activeTier && activeTier.name === tier.name
                const isPast = Boolean(todayIso) && tier.end < todayIso

                return (
                  <tr
                    key={tier.name}
                    className={classnames({
                      'tickets-cta__tier--active': isActive,
                      'tickets-cta__tier--past': isPast,
                    })}
                  >
                    <td>
                      {tier.name}
                      {isActive && (
                        <span className="tickets-cta__badge">On sale now</span>
                      )}
                    </td>
                    <td>${tier.price}</td>
                    <td>
                      {formatTierDate(tier.start)} &ndash; {formatTierDate(tier.end)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <a
          className="button special next"
          href={whovaRegistrationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ticketsAreAvailable ? 'Get tickets' : 'View ticket details'}
        </a>
      </article>
    </section>
  )
}
