'use client'

import type { KeyboardEventHandler } from 'react'
import Image from 'next/image'
import { PRIZES } from '@/constants/prize'
import {
  BrandMark,
  BrandWordmark,
  CenterHub,
  FrameGlow,
  Pointer,
  SliceLabel,
  SliceLabelInner,
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
  labelRotation?: number
  onClick?: () => void
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
  tabIndex?: number
  role?: string
  ariaLabel?: string
}

export default function WheelDisplay({
  rotation = 0,
  animateOnMount = false,
  interactive = false,
  variant = 'hero',
  labelRotation = 0,
  onClick,
  onKeyDown,
  tabIndex,
  role,
  ariaLabel,
}: WheelDisplayProps) {
  const getLabelPosition = (prizeId: string, centerAngle: number) => {
    const radiusByPrize: Record<string, number> = {
      'iphone-17-pro-max': 0.28,
      angpow: 0.31,
      default: 0.34,
    }

    const radius = radiusByPrize[prizeId] ?? radiusByPrize.default
    const radians = ((centerAngle - 90) * Math.PI) / 180

    return {
      left: `${50 + Math.cos(radians) * radius * 100}%`,
      top: `${50 + Math.sin(radians) * radius * 100}%`,
    }
  }

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
        <WheelDiscWrap
          $animate={animateOnMount}
          style={
            {
              '--wheel-rest-angle': `${rotation}deg`,
              transform: animateOnMount ? undefined : `rotate(${rotation}deg)`,
            } as React.CSSProperties
          }
        >
          <WheelDisc>
            {PRIZES.map((prize) => {
              const position = getLabelPosition(prize.id, prize.angle)

              return (
                <SliceLabel
                  key={prize.id}
                  className={prize.className}
                  style={position}
                >
                  <SliceLabelInner
                    style={{ transform: `rotate(${-labelRotation}deg)` }}
                  >
                    {prize.wheelLabel.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </SliceLabelInner>
                </SliceLabel>
              )
            })}
          </WheelDisc>
        </WheelDiscWrap>
      </WheelFrame>

      <CenterHub>
        <Image src="/80x80.png" alt="DEVAWINBET" width={80} height={80} priority />
      </CenterHub>

      <StandFoot />
      <StandBase>
        <BrandMark>Powered by</BrandMark>
        <BrandWordmark>DEVAWINBET</BrandWordmark>
      </StandBase>
    </WheelShell>
  )
}
