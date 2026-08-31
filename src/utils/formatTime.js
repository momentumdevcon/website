// The schedule's time column is narrow. Non-breaking spaces keep "9:20 AM"
// whole and tie the dash to the start time, so a range wraps only after it.
const NBSP = '\u00A0'

export const formatTimeOfDay = (time) =>
  new Date(time)
    .toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    // Node uses a normal space before AM, newer browsers a narrow no-break space.
    // Matching all whitespace keeps server and client output equal for hydration.
    .replace(/\s/g, NBSP)

export const formatTimeRange = (startTime, endTime) =>
  `${formatTimeOfDay(startTime)}${NBSP}– ${formatTimeOfDay(endTime)}`
