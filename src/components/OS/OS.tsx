/// <reference types="react"/>

import * as React from 'react'

import EventListener from 'react-event-listener'

import './OS.scss'

import { Navbar } from '../Navbar/Navbar'

import { WallpaperBlur } from '../WallpaperBlur/WallpaperBlur'

export class OS extends React.Component<any> {
  OSRef: HTMLDivElement;

  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    this.handleDocumentResize()
  }

  handleDocumentResize = () => this.setState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  render() {
    return (
      <div className="OS" style={{
        backgroundImage: "url('./src/components/OS/background.jpg'"}}>
        <EventListener
          target="window"
          onResize={this.handleDocumentResize}
          onKeyPress={
            (key) => console.log(key)
          }
        />
         <WallpaperBlur width={this.state.width} height={this.state.height}/>
        <Navbar/>
      </div>
    )
  }
}
