/* eslint-env node */

const {
  SESSION_TYPE_ID,
  LIGHTNING_TALK_ID,
} = require('../assets/data/levelAndTagId')

const isLightningTalk = (session) =>
  ((session && session.categories) || []).some(
    (category) =>
      category.alternative_id === SESSION_TYPE_ID &&
      (category.categoryItems || []).some(
        (item) => item.alternative_id === LIGHTNING_TALK_ID
      )
  )

// Sessionize gives no link between a lightning talk and its block. The block
// is the service session whose time range holds every lightning talk.
const getLightningTalkBlock = (sessions) => {
  const talks = sessions.filter(isLightningTalk)

  return talks.length > 0
    ? sessions.find(
      (session) =>
        session.isServiceSession &&
        talks.every(
          (talk) =>
            talk.startsAt >= session.startsAt && talk.endsAt <= session.endsAt
        )
    )
    : undefined
}

const getLightningTalksIn = (sessions, block) =>
  block && block.isServiceSession
    ? sessions
      .filter(
        (session) =>
          isLightningTalk(session) &&
          session.startsAt >= block.startsAt &&
          session.endsAt <= block.endsAt
      )
      .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
    : []

module.exports = { isLightningTalk, getLightningTalkBlock, getLightningTalksIn }
