import * as React from 'react'
import { ReactElement, StatelessComponent, MouseEventHandler } from 'react'

export const cssPrefix = 'os_logo'

import './Logo.scss'

export interface LogoProps {
  onClick: MouseEventHandler<HTMLDivElement>
}

export type LogoElement = ReactElement<LogoProps>

export const Logo: StatelessComponent<LogoProps> = ({
  onClick,
}) => (
  <span
    onClick={onClick}
    className="os_logo mdi mdi-brightness-auto"
  />
  )
