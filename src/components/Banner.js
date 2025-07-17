import React from 'react'
import { InterestForm } from '.'
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
          <a href="https://www.thecircuit.net/" target="_blank">
            The Circuit
          </a>
        </p>
      </div>
      <p className="date">October 16, 2025</p>
      <a
  style={{
    textDecoration: 'none',
    borderRadius: '3px',
    padding: '10px',
    width: '200px',
    fontFamily: 'Helvetica',
    lineHeight: 1.6,
    fontWeight: 400,
    fontSize: '16px',
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#2dacee',
    color: '#FFFFFF',
  }}
  target="_blank"
  rel="noreferrer"
  href="https://whova.com/portal/registration/HYDIeQD2e6sV8sR@9Ok4/"
>
  Register Now on Whova
</a>
      <div style={{ display: 'flex', gap: '4px' }}>
        <InterestForm />
      </div>
    </div>
  </section>
)
