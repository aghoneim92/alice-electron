import * as React from 'react'

import './Navbar.scss'

import { Logo } from '../Logo/Logo'
import { Clock } from '../Clock/Clock'

export class Navbar extends React.Component<any> {

  handleLogoClick = () => null

  render() {
    return (
      <div className="Navbar">
        <Logo onClick={this.handleLogoClick}/>
        <Clock/>
      </div>
    )
  }
}
