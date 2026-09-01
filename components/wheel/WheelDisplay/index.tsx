'use client'

import type { KeyboardEventHandler } from 'react'
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined'
import {
  BrandMark,
  BrandWordmark,
  CenterHub,
  FrameGlow,
  LightBulb,
  Pointer,
  StandBase,
  StandFoot,
  WheelDisc,
  WheelDiscWrap,
  WheelFrame,
  WheelShell,
} from './styles'

interface WheelDisplayProps {
  rotation?: number
  animateOnMount?: boolean
  interactive?: boolean
  variant?: 'hero' | 'stage'
  onClick?: () => void
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
  tabIndex?: number
  role?: string
  ariaLabel?: string
}

const LIGHT_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

export default function WheelDisplay({
  rotation = 0,
  animateOnMount = false,
  interactive = false,
  variant = 'hero',
  onClick,
  onKeyDown,
  tabIndex,
  role,
  ariaLabel,
}: WheelDisplayProps) {
  return (
    <WheelShell
      $interactive={interactive}
      $variant={variant}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <FrameGlow />
      <Pointer $animate={animateOnMount} />

      <WheelFrame>
        {LIGHT_ANGLES.map((angle) => (
          <LightBulb
            key={angle}
            style={{ '--light-angle': `${angle}deg` } as React.CSSProperties}
          />
        ))}

        <WheelDiscWrap
          $animate={animateOnMount}
          style={
            {
              '--wheel-rest-angle': `${rotation}deg`,
              transform: animateOnMount ? undefined : `rotate(${rotation}deg)`,
            } as React.CSSProperties
          }
        >
          <WheelDisc />
        </WheelDiscWrap>
      </WheelFrame>

      <CenterHub>
        <RedeemOutlinedIcon />
      </CenterHub>

      <StandFoot />
      <StandBase>
        <BrandMark>Powered by</BrandMark>
        <BrandWordmark>Devawinbet</BrandWordmark>
      </StandBase>
    </WheelShell>
  )
}
