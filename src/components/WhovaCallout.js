import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// Links come from Whova's download widget for this event.
const appLinks = [
  {
    label: 'iOS',
    icon: faApple,
    href: 'https://itunes.apple.com/app/apple-store/id716979741?pt=1944835&ct=download_widget&mt=8',
  },
  {
    label: 'Android',
    icon: faGooglePlay,
    href: 'https://play.google.com/store/apps/details?id=com.whova.event',
  },
  {
    label: 'Web app',
    icon: faGlobe,
    href: 'https://whova.com/portal/webapp/oCGOLtl6mKCQJu1DhJM@/',
  },
]

// Served from Whova's tracking endpoint (not a static asset) so the widget's views are counted.
const logoUrl =
  'https://whova.com/xems/apis/get_whova_tracking_image/?event_id=pZYGes2elRW0ca-zj-q2uTnU4wuch8InDpIXydu-B-w=&track_id=use_small_widget&image_type=whova_logo'

export const WhovaCallout = () => (
  <section className="whova-callout">
    <div className="inner">
      <div className="whova-callout__copy">
        <img className="whova-callout__logo" src={logoUrl} alt="Whova" />
        <p className="whova-callout__eyebrow">Get the event app</p>
        <h3>Plan your day in Whova</h3>
        <p>
          Build your own agenda, get session reminders, and connect with
          other attendees before and during the conference.
        </p>
      </div>
      <ul className="actions whova-callout__actions">
        {appLinks.map(({ label, icon, href }) => (
          <li key={label}>
            <a
              className="button"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={icon} className="whova-callout__icon" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
