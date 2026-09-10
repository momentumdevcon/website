import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import logo from '../assets/images/sponsors/docusor.png'
import '../assets/css/docusorDance.css'

export const DocusorDance = () => {
  const [dancing, setDancing] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    setDancing(!preference.matches)
    const stopForReducedMotion = () => {
      if (preference.matches) setDancing(false)
    }
    preference.addEventListener('change', stopForReducedMotion)
    return () => preference.removeEventListener('change', stopForReducedMotion)
  }, [])

  useEffect(() => {
    if (!dancing) return undefined
    const timeout = window.setTimeout(() => setDancing(false), 12000)
    const stopOnEscape = (event) => {
      if (event.key === 'Escape') setDancing(false)
    }
    window.addEventListener('keydown', stopOnEscape)
    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener('keydown', stopOnEscape)
    }
  }, [dancing])

  return (
    <>
      <button
        type="button"
        className="docusor-dance-toggle"
        aria-pressed={dancing}
        onClick={() => setDancing(!dancing)}
      >
        {dancing ? 'Stop the dance' : 'Make DocuSOR dance'}
      </button>
      {dancing && createPortal(
        <div className="docusor-dance-stage" aria-hidden="true">
          <div className="docusor-dance-traveler">
            <img className="docusor-dance-logo" src={logo} alt="" />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
