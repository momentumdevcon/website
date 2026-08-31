import React from 'react'
import '../assets/css/sectionHeading.css'

// Shared by the sponsor levels and the speakers and sessions section headings.
export const SectionHeading = ({ children, className = '' }) => (
  <div className={`section-heading ${className}`.trim()}>
    <h1>{children}</h1>
    <div className="line" />
  </div>
)
