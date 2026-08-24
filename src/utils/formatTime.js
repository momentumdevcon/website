// The schedule time column is narrow. Non-breaking spaces keep "9:20 AM"
// together and hold the dash to the start time. A range then breaks only
// once, after the dash.
const NBSP = '\u00A0'

export const formatTimeOfDay = (time) =>
  new Date(time)
    .toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    // Node puts a normal space before AM. Newer browsers put a narrow no-break
    // space. Match all whitespace so both render the same text and hydration
    // does not fail.
    .replace(/\s/g, NBSP)

export const formatTimeRange = (startTime, endTime) =>
  `${formatTimeOfDay(startTime)}${NBSP}– ${formatTimeOfDay(endTime)}`
