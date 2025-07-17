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
      <a style="text-decoration:none;border-radius:3px;padding:10px;width:200px;font-family:Helvetica;line-height:1.6;font-weight:400;font-size:16px;display:block;text-align:center;background-color:#2dacee;color:#FFFFFF" target="_blank" rel="noreferrer" href="https://whova.com/portal/registration/HYDIeQD2e6sV8sR@9Ok4/" data-reactroot="">Register Now on Whova</a>    
      <div style={{ display: 'flex', gap: '4px' }}>
        <InterestForm />
      </div>
    </div>
  </section>
)
