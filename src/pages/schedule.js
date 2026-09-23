import React from 'react'
import { Wrapper, ScheduleTable, WhovaCallout } from '../components'
import '../assets/css/schedule.css'

const SchedulePage = () => (
  <Wrapper title="2026 Schedule">
    <div id="main" className="alt">
      <WhovaCallout />
      <div className="inner">
        <ScheduleTable />
      </div>
    </div>
  </Wrapper>
)
export default SchedulePage
