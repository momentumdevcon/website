import React from 'react'
import { Link } from 'gatsby'
import { InterestForm } from '.'
import { ticketsAreAvailable } from '../assets/data/ticketing'
import '../assets/css/banner.css'

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
      <p className="date">October 15, 2026</p>
      <div className="banner-actions">
        <Link className="button special" to="https://whova.com/portal/registration/2ev2ReOea-5UJ4yBtC2-/" target="_blank">
          {ticketsAreAvailable ? 'Get tickets' : 'Ticket details'}
        </Link>
        <InterestForm />
      </div>
    </div>
  </section>
)
