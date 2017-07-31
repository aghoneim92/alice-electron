import * as React from 'react'
import { StatelessComponent } from 'react'
export const cssPrefix = 'os_wallpaperBlur'

import './WallpaperBlur.scss'

interface WallpaperBlurProps {
  background?: string
  width: number
  height: number
}

export const WallpaperBlur: StatelessComponent<WallpaperBlurProps> = ({
  width,
  height,
}) => (
    <svg
      width="100%"
      height="4vh"
      className={cssPrefix}
      viewBox={`0 0 ${width} ${0.04 * height}`}
    >
      <filter id="filter" x="-5%" y="-5%" width="110%" height="110%">
        <feGaussianBlur result="blur" in="SourceGraphic" stdDeviation="3.5" />
        <feFlood
          result="floodFill"
          width="110%"
          height="110%"
          floodColor="white"
          floodOpacity="0.3"
        />
        <feBlend result="blend" in="blur" in2="floodFill" mode="lighten" />
      </filter>
      <image
        x={0}
        y={0}
        xlinkHref='./src/components/OS/background.jpg'
        width={width}
        height="5vh"
        filter="url(#filter)"
        preserveAspectRatio="xMinYMin slice"
      />
    </svg>
  )

