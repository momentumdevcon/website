import React from 'react'

// Inline copy of cropped-white.svg so each shape can be animated on its own:
// the chevrons slide in, then the three slashes drop in and ripple. See banner.css.
export const AnimatedLogo = () => (
  <svg className="animated-logo" viewBox="150 350 700 270" role="img" aria-label="Momentum logo">
    <polygon className="animated-logo__chevron animated-logo__chevron--left" points="247.7,567.8 161,481.1 248.1,394.1 284.8,430.9 234.6,481.1 284.5,531" />
    <path className="animated-logo__slash" d="M384.5,603.4H316l74.6-204.1c6.6-18,23.7-30,42.9-30h36.5L384.5,603.4z" />
    <polygon className="animated-logo__slash" points="493.1,603.4 424.6,603.4 510.2,369.3 578.7,369.3" />
    <polygon className="animated-logo__slash" points="601.6,603.4 533.2,603.4 618.8,369.3 687.2,369.3" />
    <polygon className="animated-logo__chevron animated-logo__chevron--right" points="751.9,567.8 715.2,531 765.4,480.8 715.5,430.9 752.3,394.1 839,480.8" />
  </svg>
)
