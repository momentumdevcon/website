import React from 'react';
import ThankYouImage from '../assets/images/thank-you.png'
import '../assets/css/bannerImage.css'

const ThankYou = () => (
  <section id="one" className="tiles whatIsMomentumTiles">
    <article>
      <div className="banner-wrapper">
        <img 
          className="banner"
          src={ThankYouImage}
          alt="Thank you to our attendees, speakers, sponsors, volunteers, and organizers!"
        />
      </div>
      <header className="major">
        <h3>Thank You!</h3>
      </header>
      <p>
      In this season when we reflect on the blessings in our lives, we’d be remiss for not thanking everyone who made Momentum 2021 possible. 
      We are deeply grateful to our sponsors, speakers, hotel staff, volunteers, organizers, and attendees. 
      To those of you who selflessly invested long hours – we appreciate you so much. 
      Thank you! Momentum 2021 was a truly memorable event and we’ve been humbled by the positive feedback we’ve received. 
      It’s our hope that you’ll journey with us as Momentum continues to grow in size, prestige, and influence. 
      Plan to join us next October!
      </p>
    </article>
  </section>
)

export default ThankYou;