import React, { useEffect, useState } from 'react'
import { AnimatedLogo } from './AnimatedLogo'
import { conferenceDate, toLocalIsoDate } from '../assets/data/ticketing'
import '../assets/css/dayOfIntro.css'

const SEEN_KEY = 'momentum-dayof-intro-seen'
const AUTO_DISMISS_MS = 4200
const EXIT_MS = 700 // must match the dayof-exit animation in dayOfIntro.css
const CONFETTI_COLORS = ['#9bf1ff', '#6fc3df', '#8d82c4', '#ec8d81', '#e7b788', '#87c5a4', '#ffffff']

// Storage can throw (private mode, blocked cookies), so every access is guarded.
const readSeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch (e) {
    return false
  }
}
const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch (e) {
    // Not critical; worst case the intro plays again on the next homepage visit.
  }
}

// Random slash-shaped confetti, each flung outward from the center at its own angle and distance.
const makeConfetti = (count) =>
  Array.from({ length: count }, (_, i) => {
    const angle = Math.random() * Math.PI * 2
    const distance = 25 + Math.random() * 30 // in vmax so the burst fills any screen size
    return {
      id: i,
      style: {
        '--x': `${Math.cos(angle) * distance}vmax`,
        '--y': `${Math.sin(angle) * distance}vmax`,
        '--r': `${Math.round(Math.random() * 720 - 360)}deg`,
        '--delay': `${(Math.random() * 0.25).toFixed(2)}s`,
        background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      },
    }
  })

// Full-screen "Today's the day" splash, shown once per browser session on conference day.
// Add ?dayof to the URL to preview it on any date.
export const DayOfIntro = () => {
  const [phase, setPhase] = useState('hidden') // hidden -> showing -> leaving -> hidden
  const [confetti, setConfetti] = useState([])

  // Decide whether to show after mount, never during render, so Gatsby's static HTML stays date-agnostic.
  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).has('dayof')
    const isDayOf = toLocalIsoDate(new Date()) === conferenceDate
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (forced || (isDayOf && !readSeen() && !reducedMotion)) {
      setConfetti(makeConfetti(70))
      setPhase('showing')
      markSeen()
    }
  }, [])

  // While showing: lock page scroll, auto-dismiss after a few seconds, allow Escape to skip.
  useEffect(() => {
    if (phase !== 'showing') return undefined
    const dismiss = () => setPhase('leaving')
    const timer = setTimeout(dismiss, AUTO_DISMISS_MS)
    const onKey = (e) => e.key === 'Escape' && dismiss()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [phase])

  // After the slide-up exit animation finishes, unmount entirely.
  useEffect(() => {
    if (phase !== 'leaving') return undefined
    const timer = setTimeout(() => setPhase('hidden'), EXIT_MS)
    return () => clearTimeout(timer)
  }, [phase])

  if (phase === 'hidden') return null

  return (
    <div
      className={`dayof-intro ${phase === 'leaving' ? 'is-leaving' : ''}`}
      onClick={() => setPhase('leaving')}
      role="dialog"
      aria-label="Today is Momentum day"
    >
      <div className="dayof-intro__confetti" aria-hidden="true">
        {confetti.map((piece) => (
          <span key={piece.id} style={piece.style} />
        ))}
      </div>
      <div className="dayof-intro__content">
        <AnimatedLogo />
        <h2 className="dayof-intro__headline">Today&rsquo;s the day</h2>
        <p className="dayof-intro__sub">Momentum 2026 is live in Cincinnati</p>
        <button type="button" className="button special dayof-intro__cta">
          Let&rsquo;s go
        </button>
      </div>
    </div>
  )
}
