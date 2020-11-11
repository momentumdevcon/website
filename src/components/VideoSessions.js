import React from 'react';
import Icon from './Icon';
import videoSessions from '../assets/data/videoSessions.json';
import { faVideo, faFilm, faUser } from '@fortawesome/free-solid-svg-icons';

const VideoSessions = () => {
  return <section id="two" className="tiles whatIsMomentumTiles videoSessions">
    <article>
      <header className="major">
        <h3>
          <span style={{ paddingRight: '12px' }}>
            <Icon icon={faVideo} size="md" />
          </span>
          Sessions
        </h3>
      </header>
      {
        videoSessions.map(({ name, title, link }) => (
          <div className='allSessions' key={name}>
            <span className='iconAndText' style={{ display: 'flex', alignItems: 'baseline', paddingBottom: '10px' }}>
              <Icon icon={faFilm} size="md" />
              <a
                href={link}
                target='_blank' 
                rel='noopener noreferrer'
              >
                {title}
              </a>
            </span>
            <span className='iconAndText' style={{ display: 'flex', alignItems: 'baseline', }}>
              <Icon icon={faUser} size="md" />
              <p>{name}</p>
            </span>
          </div>
        ))
      }
    </article>
  </section>
}

export default VideoSessions;
