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
        <p>Powered by The Circuit</p>
      </div>
      <p className="date">October 16, 2025</p>
      <div style={{ display: 'flex', gap: '4px' }}>
        <InterestForm />
      </div>
    </div>
  </section>
)
