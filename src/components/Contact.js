import React from 'react';

const Contact = () => (
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
        <a href="tel:1-513-917-3814">1-513-917-3814</a>
      </div>
    </section>
    <section>
      <div className="contact-method">
        <span className="icon alt fa-home" />
        <h3>Address</h3>
        <a 
          target='_blank' rel="noopener noreferrer"
          href="https://maps.google.com?q=Hyatt+Regency+Cincinnati%2C+West+5th+Street%2C+Cincinnati%2C+OH"
        >
              Hyatt Regency Cincinnati
          <br />
              151 W 5th St
          <br />
              Cincinnati, OH 45202
        </a>
      </div>
    </section>
  </section>
);

export default Contact;
