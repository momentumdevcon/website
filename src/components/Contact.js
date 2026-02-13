import React from 'react'
import { Icon } from '../components/Icon'
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/cropped-white.svg'

export const Contact = () => (
  <section className="contact">
    <section>
      <div className="contact-method">
        <Icon size="lg" icon={faEnvelope} />
        <h3>Email</h3>
        <a href="mailto:info@momentumdevcon.com">info@momentumdevcon.com</a>
      </div>
    </section>
    <section>
      <div className="contact-method">
        <Icon size="lg" icon={faPhone} />
        <h3>Phone</h3>
        <a href="tel:1-513-313-8278">1-513-313-8278</a>
      </div>
    </section>
    <section>
      <div className="contact-method">
        <Icon size="lg" icon={faHome} />
        <h3>Address</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/Hard+Rock+Casino+Cincinnati/@39.1081763,-84.5098039,17z/data=!3m1!4b1!4m5!3m4!1s0x8841b16c1b870331:0xbdcac896337247d9!8m2!3d39.1081763!4d-84.5076152"
        >
          Hard Rock Casino Cincinnati
          <br />
          1000 Broadway St
          <br />
          Cincinnati, OH 45202
        </a>
      </div>
    </section>
    <section>
      <div className="contact-method">
        <img src={logo} alt="logo" className="logo icon" />
        <h3>Prior Years</h3>
        <ul>
          <li>
            <a href="https://2025.momentumdevcon.com">2025</a>
          </li>
          <li>
            <a href="https://2024.momentumdevcon.com">2024</a>
          </li>
          <li>
            <a href="https://2023.momentumdevcon.com">2023</a>
          </li>
          <li>
            <a href="https://2022.momentumdevcon.com">2022</a>
          </li>
          <li>
            <a href="https://2021.momentumdevcon.com">2021</a>
          </li>
        </ul>
      </div>
    </section>
  </section>
)
