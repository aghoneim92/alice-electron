import * as React from 'react'
import { ReactType } from 'react'

import Tooltip from 'rc-tooltip'

import { Map } from 'immutable'

import './Sidebar.scss'

interface App extends Map<string, any> {
  id: string
  name: string
  Icon: ReactType
  order: number
}

type AppButtonClickHandler = (id: string) => void

interface SidebarProps {
  apps: Map<string, App>
  onAppButtonClick: AppButtonClickHandler
}

const createAppButonClickHandler = (id: string, onAppButtonClick: AppButtonClickHandler) =>
  () => onAppButtonClick(id)

export class Sidebar extends React.PureComponent<SidebarProps> {
  render() {
    const { apps, onAppButtonClick } = this.props

    return (
      <div className="Sidebar">
      {
        apps.toList().sort(
          (a, b) => a.get('order') - b.get('order')
        ).toJS().map(
          ({ id, Icon, name }: App) => (
            <Tooltip
              key={id}
              placement="right"
              trigger={['hover']}
              overlay={<span>{name}</span>}
            >
              <div className="AppButton" onClick={createAppButonClickHandler(id, onAppButtonClick)}>
                <Icon/>
              </div>
            </Tooltip>
          )
        )
      }
      </div>
    )
  }
}