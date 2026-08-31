/* eslint-env node */

const {
  SESSION_TYPE_ID,
  KEYNOTE_ID,
  LIGHTNING_TALK_ID,
} = require('../assets/data/levelAndTagId')

const hasSessionType = (session, sessionTypeId) =>
  ((session && session.categories) || []).some(
    (category) =>
      category.alternative_id === SESSION_TYPE_ID &&
      (category.categoryItems || []).some(
        (item) => item.alternative_id === sessionTypeId
      )
  )

const isKeynote = (session) => hasSessionType(session, KEYNOTE_ID)

const isLightningTalk = (session) => hasSessionType(session, LIGHTNING_TALK_ID)

// Sponsor sessions are their own Sessionize type but run alongside the full
// sessions, so they share a section.
const SESSION_SECTIONS = [
  { key: 'keynote', title: 'Keynote', includes: isKeynote },
  {
    key: 'sessions',
    title: 'Sessions',
    includes: (session) => !isKeynote(session) && !isLightningTalk(session),
  },
  { key: 'lightning', title: 'Lightning Talks', includes: isLightningTalk },
]

// Drop empty sections so no page shows a bare heading.
const groupSessionsIntoSections = (sessions) =>
  SESSION_SECTIONS.map((section) => ({
    ...section,
    sessions: sessions.filter(section.includes),
  })).filter((section) => section.sessions.length > 0)

module.exports = { isLightningTalk, groupSessionsIntoSections }
