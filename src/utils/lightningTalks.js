/* eslint-env node */

const { isLightningTalk } = require('./sessionSections')

// Sessionize gives no link from a talk to its block, so the block is found as
// the service session whose time range holds every lightning talk.
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

module.exports = { getLightningTalkBlock, getLightningTalksIn }
