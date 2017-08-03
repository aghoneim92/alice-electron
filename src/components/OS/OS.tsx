/// <reference types="react"/>

import * as React from 'react'

import EventListener from 'react-event-listener'

import { Map, fromJS } from 'immutable'

import './OS.scss'

import { Navbar } from '../Navbar/Navbar'
import { WallpaperBlur } from '../WallpaperBlur/WallpaperBlur'
import { Sidebar } from '../Sidebar/Sidebar'

const OSStyle = {
  backgroundImage: "url('./src/components/OS/background.jpg'",
}

const Apps = fromJS({
  '0': {
    id: '0',
    name: 'Files',
    Icon: require('../Apps/Files/Icon').Icon,
    Component: require('../Apps/Files/Files').Files,
    order: 0,
  }
})

export class OS extends React.PureComponent<{}> {
  OSRef: HTMLDivElement;

  state = {
    width: 0,
    height: 0,
    windows: Map(),
    apps: Apps,
  }

  componentDidMount() {
    this.handleDocumentResize()
  }

  handleDocumentResize = () => this.setState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  handleAppButtonClick = (id: string) => {
    this.setState({
      windows: this.state.windows.set(id, Apps.get(id))
    })
  }

  render() {
    return (
      <div className="OS" style={OSStyle}>
        <EventListener
          target="window"
          onResize={this.handleDocumentResize}
        />
         <WallpaperBlur width={this.state.width} height={this.state.height}/>
        <Navbar/>
         <Sidebar
          apps={this.state.apps}
          onAppButtonClick={this.handleAppButtonClick}
        />
      </div>
    )
  }
}
