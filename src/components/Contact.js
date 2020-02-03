import React from 'react';

const Contact = () => (
  <section>
    <div className="inner">
      <section className="contact">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:info@momentumdevcon.com">info@momentumdevcon.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>(513) 917-3814</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              Hyatt Regency Cincinnati
              <br />
              151 W 5th St
              <br />
              Cincinnati, OH 45202
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
