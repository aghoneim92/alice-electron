/// <reference path="../../../index.d.ts" />

import ReactClockWall from 'react-clockwall'

import * as React from 'react'

import './Clock.scss'

interface ClockProps {

}

export class Clock extends React.Component<ClockProps> {

  render() {
    return (
      <div
        className={`clock-wrapper`}
      >
        <ReactClockWall
          config={{
            timezone: 'Africa/Cairo', town: 'Alexandria',
          }}
        />
        <div className='clock-popup'>

        </div>
      </div>
    )
  }
}
