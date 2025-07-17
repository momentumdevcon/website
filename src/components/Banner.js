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
      <div id="whova-regform-widget" data-reactroot=""></div>
      <div id="whova-regform-seo-widget" data-reactroot="">
        Powered By <a class="brandlink" target="_blank" href="https://whova.com"><b>Whova</b></a>
        <br/>
        <a class="brandanchorlink" target="_blank" href="https://whova.com/event-registration-software">Conference registration system</a>
        </div>
        <script src="https://whova.com/static/frontend/xems/js/whova-regform-widget.js?eid=HYDIeQD2e6sV8sR@9Ok4&amp;host=https://whova.com&amp;registration=attendee&amp;regpagetoken=" type="text/javascript" id="whova-embeded-regform-script" data-reactroot=""></script>
      <div style={{ display: 'flex', gap: '4px' }}>
        <InterestForm />
      </div>
    </div>
  </section>
)
