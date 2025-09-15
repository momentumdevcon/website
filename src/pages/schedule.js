import React from 'react'
import { Wrapper, ScheduleTable } from '../components'
import '../assets/css/schedule.css'

const SchedulePage = () => (
  <Wrapper title="2025 Schedule">
    <div id="main" className="alt">
      <div className="inner">
      <ScheduleTable />
      </div>
    </div>
  </Wrapper>
)
export default SchedulePage
