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
              Sharonville Convention Center
              <br />
              11355 Chester Rd
              <br />
              Cincinnati, OH 45246
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
