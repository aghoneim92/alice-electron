/// <reference path="../../../index.d.ts" />

import ReactClockWall from 'react-clockwall'

import * as React from 'react'

import './Clock.scss'

interface ClockProps {

}

export class Clock extends React.Component<ClockProps> {
  state = {
    opened: false,
  }

  handleClick = () => {
    this.setState({
      opened: !this.state.opened,
    })
  }

  render() {
    const { opened } = this.state

    return (
      <div
        className={`clock-wrapper${opened ? ' is-opened' : ''}`}
        onClick={this.handleClick}
      >
        <ReactClockWall
          config={{
            timezone: 'Africa/Cairo', town: 'Alexandria',
          }}
        />
      </div>
    )
  }
}
