import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import {
  ticketsAreAvailable,
  whovaRegistrationUrl,
} from '../assets/data/ticketing'
import '../assets/css/ticketsPopup.css'

// Bump the version suffix to re-show the popup to everyone (e.g. an early-bird deadline push).
const STORAGE_KEY = 'momentum-2026-tickets-popup-v2'
const SHOW_DELAY_MS = 2000
// How long a visitor stays "already nudged" after seeing the popup once.
const SNOOZE_DAYS = 7
const SNOOZE_MS = SNOOZE_DAYS * 24 * 60 * 60 * 1000
// Visitors already on the tickets page don't need the nudge.
const SUPPRESSED_PATHS = ['/tickets']

// localStorage (not sessionStorage) so the snooze survives closing the browser.
// Storage access throws in Safari private mode and when site data is blocked.
// Failing open (show the popup) is better than letting an exception break the page.
const hasSeenPopup = () => {
  try {
    const seenAt = Number(window.localStorage.getItem(STORAGE_KEY))
    // NaN (missing/garbage value) fails this check, so we fall through and show it.
    return seenAt > 0 && Date.now() - seenAt < SNOOZE_MS
  } catch (e) {
    return false
  }
}

const markPopupSeen = () => {
  try {
    // Store the timestamp rather than a boolean so the snooze can expire.
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
  } catch (e) {
    // Ignore: the popup simply shows again next load.
  }
}

// `trailingSlash: "ignore"` in gatsby-config means both /tickets and /tickets/ resolve.
const isSuppressedPath = (pathname) => {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  return SUPPRESSED_PATHS.includes(normalized)
}

export const TicketsPopup = () => {
  // Starts false on the server render AND the first client render, so hydration matches.
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!ticketsAreAvailable) return undefined
    if (isSuppressedPath(window.location.pathname)) return undefined
    if (hasSeenPopup()) return undefined

    const timeoutId = setTimeout(() => {
      setIsOpen(true)
      // Marked on show, not on dismiss: Gatsby remounts Layout on every client-side
      // navigation, so a dismiss-only flag would let this reappear on the next page.
      markPopupSeen()
    }, SHOW_DELAY_MS)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKeyDown)

    // Stop the page behind the overlay from scrolling, which is especially bad on mobile.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus the dialog itself rather than the close button: screen readers announce the
    // dialog and its label, and we avoid painting a focus ring on the × for mouse users.
    if (panelRef.current) panelRef.current.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, close])

  if (!isOpen) return null

  // Only close on the backdrop itself, never on clicks that bubble up from the panel.
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) close()
  }

  return (
    <div className="tickets-popup" onClick={handleBackdropClick}>
      <div
        className="tickets-popup__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tickets-popup-title"
        ref={panelRef}
        tabIndex={-1}
      >
        <button
          type="button"
          className="tickets-popup__close"
          aria-label="Close"
          onClick={close}
        >
          &times;
        </button>
        <p className="tickets-popup__eyebrow">Registration is open</p>
        <h2 id="tickets-popup-title">Momentum 2026 tickets are on sale</h2>
        <p>Thursday, October 15, 2026 &middot; Hard Rock Casino, Cincinnati</p>
        <div className="tickets-popup__actions">
          <a
            className="button special"
            href={whovaRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Buy tickets now
          </a>
          <Link className="button" to="/tickets" onClick={close}>
            See ticket details
          </Link>
        </div>
      </div>
    </div>
  )
}
