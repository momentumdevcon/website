/* eslint-env node */

const getSessionizeSessions = (sessionGroups) =>
  (sessionGroups && sessionGroups.nodes ? sessionGroups.nodes : []).flatMap(
    ({ sessions }) => sessions || []
  )

module.exports = { getSessionizeSessions }
