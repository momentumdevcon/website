import React from 'react'
import { SessionsList, WhovaCallout, Wrapper } from '../components'

const Sessions = () => (
  <Wrapper title="2026 Sessions">
    <div id="main">
      <WhovaCallout />
      <SessionsList />
    </div>
  </Wrapper>
)
export default Sessions
