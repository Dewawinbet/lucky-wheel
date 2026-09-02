'use client'

import type { CSSProperties, KeyboardEventHandler } from 'react'
import Image from 'next/image'
import { PRIZES } from '@/constants/prize'
import {
  CenterHub,
  FrameGlow,
  StageFrame,
  WheelDiscWrap,
  WheelOrbit,
  WheelShadow,
  WheelShell,
  WheelSvg,
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

const CENTER = 400
const RIM_RADIUS = 390
const LIGHT_RADIUS = 354
const SLICE_OUTER_RADIUS = 402
const SLICE_INNER_RADIUS = 142
const DIVIDER_ANGLES = [30, 90, 150, 210, 270, 330]
const LIGHT_ANGLES = Array.from({ length: 26 }, (_, index) => (index * 360) / 26)

const PRIZE_LAYOUTS: Record<
  string,
  {
    iconRadius: number
    labelRadius: number
    iconScale?: number
    labelSize: number
  }
> = {
  'iphone-17-pro-max': {
    iconRadius: 350,
    labelRadius: 250,
    iconScale: 1.02,
    labelSize: 43,
  },
  'cash-100': {
    iconRadius: 350,
    labelRadius: 250,
    iconScale: .9,
    labelSize: 56,
  },
  'cash-50': {
    iconRadius: 350,
    labelRadius: 250,
    iconScale: 1,
    labelSize: 54,
  },
  'cash-30': {
    iconRadius: 350,
    labelRadius: 250,
    iconScale: 0.96,
    labelSize: 56,
  },
  'cash-20': {
    iconRadius: 350,
    labelRadius: 250,
    iconScale: 0.98,
    labelSize: 54,
  },
  angpow: {
    iconRadius: 350,
    labelRadius: 240,
    iconScale: 1,
    labelSize: 42,
  },
}

const SLICE_COLORS = ['#7A2EF6', '#FF2D8D', '#1C5CFF', '#FF9800', '#F33276', '#11C7C8']

function polarToCartesian(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180

  return {
    x: CENTER + Math.sin(radians) * radius,
    y: CENTER - Math.cos(radians) * radius,
  }
}

function describeSlicePath(centerAngle: number, innerRadius: number, outerRadius: number) {
  const startOuter = polarToCartesian(centerAngle - 30, outerRadius)
  const endOuter = polarToCartesian(centerAngle + 30, outerRadius)
  const endInner = polarToCartesian(centerAngle + 30, innerRadius)
  const startInner = polarToCartesian(centerAngle - 30, innerRadius)

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerRadius} ${outerRadius} 0 0 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerRadius} ${innerRadius} 0 0 0 ${startInner.x} ${startInner.y}`,
    'Z',
  ].join(' ')
}

function renderWheelLabel(lines: string[], fontSize: number) {
  const lineHeight = fontSize * 0.92
  const startY = -((lines.length - 1) * lineHeight) / 2
  const strokeWidth = fontSize >= 52 ? 8 : 6

  return lines.map((line, index) => (
    <text
      key={line}
      x="0"
      y={startY + index * lineHeight}
      fill="#FFFFFF"
      fontSize={fontSize}
      fontWeight="900"
      textAnchor="middle"
      dominantBaseline="middle"
      letterSpacing="-0.04em"
      paintOrder="stroke fill"
      stroke="#111A42"
      strokeWidth={strokeWidth}
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {line}
    </text>
  ))
}

function PrizeGraphic({ prizeId }: { prizeId: string }) {
  switch (prizeId) {
    case 'iphone-17-pro-max':
      return (
        <g>
          <rect
            x="-22"
            y="-44"
            width="44"
            height="88"
            rx="12"
            fill="#161A24"
            stroke="#556078"
            strokeWidth="4"
          />
          <rect
            x="-18"
            y="-38"
            width="36"
            height="76"
            rx="9"
            fill="url(#phoneBody)"
          />
          <circle cx="-10" cy="-26" r="4.5" fill="#D7E0EA" />
          <circle cx="2" cy="-16" r="4.5" fill="#D7E0EA" />
          <circle cx="-10" cy="-6" r="4.5" fill="#D7E0EA" />
          <circle cx="8" cy="30" r="3.5" fill="#9CA3AF" opacity="0.65" />
        </g>
      )
    case 'cash-100':
      return (
        <g>
          <circle cx="-14" cy="10" r="22" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <circle cx="18" cy="-8" r="25" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <circle cx="8" cy="22" r="18" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <text x="-14" y="13" fill="#A4550A" fontSize="24" fontWeight="900" textAnchor="middle">
            ₱
          </text>
          <text x="18" y="-4" fill="#A4550A" fontSize="28" fontWeight="900" textAnchor="middle">
            ₱
          </text>
          <text x="8" y="26" fill="#A4550A" fontSize="20" fontWeight="900" textAnchor="middle">
            ₱
          </text>
        </g>
      )
    case 'cash-50':
      return (
        <g>
          <rect x="-34" y="-20" width="68" height="42" rx="10" fill="#D8ECFF" />
          <rect x="-26" y="-28" width="68" height="42" rx="10" fill="#B8D8FF" opacity="0.92" />
          <rect x="-18" y="-36" width="68" height="42" rx="10" fill="#E8F4FF" opacity="0.84" />
          <rect x="-10" y="-30" width="20" height="30" rx="8" fill="#8AB8FF" />
          <text x="0" y="-8" fill="#FFFFFF" fontSize="22" fontWeight="900" textAnchor="middle">
            ₱
          </text>
        </g>
      )
    case 'cash-30':
      return (
        <g>
          <ellipse cx="-4" cy="12" rx="24" ry="10" fill="#9E5A08" opacity="0.38" />
          <ellipse cx="-14" cy="20" rx="24" ry="10" fill="#9E5A08" opacity="0.22" />
          <circle cx="-8" cy="12" r="22" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <circle cx="22" cy="2" r="18" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <text x="-8" y="16" fill="#A4550A" fontSize="24" fontWeight="900" textAnchor="middle">
            ₱
          </text>
          <text x="22" y="6" fill="#A4550A" fontSize="20" fontWeight="900" textAnchor="middle">
            ₱
          </text>
        </g>
      )
    case 'cash-20':
      return (
        <g>
          <g transform="rotate(-18)">
            <rect x="-38" y="-18" width="76" height="40" rx="8" fill="#FCD0D9" />
            <rect x="-34" y="-14" width="68" height="32" rx="6" fill="#FFB8C7" />
            <rect x="-9" y="-14" width="18" height="32" rx="7" fill="#E95B74" />
            <circle cx="0" cy="2" r="8" fill="#FFD6DF" />
          </g>
        </g>
      )
    case 'angpow':
      return (
        <g>
          <rect
            x="-32"
            y="-38"
            width="64"
            height="76"
            rx="10"
            fill="#D61B1F"
            stroke="#8E0E14"
            strokeWidth="4"
          />
          <path
            d="M -32 -6 Q 0 20 32 -6"
            fill="none"
            stroke="#F9A93E"
            strokeWidth="5"
          />
          <path
            d="M -32 -10 L 0 12 L 32 -10"
            fill="#F0584D"
            stroke="#F7C56C"
            strokeWidth="3"
          />
          <circle cx="0" cy="2" r="8" fill="#F5CA64" stroke="#8B4A06" strokeWidth="3" />
        </g>
      )
    default:
      return null
  }
}

function PrizeNode({
  prizeId,
  angle,
  labelLines,
  labelRotation,
}: {
  prizeId: string
  angle: number
  labelLines: string[]
  labelRotation: number
}) {
  const layout = PRIZE_LAYOUTS[prizeId]
  const labelPosition = polarToCartesian(angle, layout.labelRadius)
  const iconPosition = polarToCartesian(angle, layout.iconRadius)

  return (
    <>
      <g transform={`translate(${iconPosition.x} ${iconPosition.y})`}>
        <g transform={`rotate(${-labelRotation}) scale(${layout.iconScale ?? 1})`}>
          <PrizeGraphic prizeId={prizeId} />
        </g>
      </g>

      <g transform={`translate(${labelPosition.x} ${labelPosition.y})`}>
        <g transform={`rotate(${-labelRotation})`}>
          {renderWheelLabel(labelLines, layout.labelSize)}
        </g>
      </g>
    </>
  )
}

function WheelGraphic({ labelRotation }: { labelRotation: number }) {
  return (
    <WheelSvg viewBox="0 0 800 800" aria-hidden="true">
      <defs>
        <linearGradient id="wheelRimGold" x1="120" y1="104" x2="680" y2="696" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF4B6" />
          <stop offset="0.14" stopColor="#F7C654" />
          <stop offset="0.34" stopColor="#C77711" />
          <stop offset="0.56" stopColor="#7B4305" />
          <stop offset="0.82" stopColor="#F1C964" />
          <stop offset="1" stopColor="#815009" />
        </linearGradient>
        <linearGradient id="wheelInnerGold" x1="400" y1="56" x2="400" y2="744" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF2BE" />
          <stop offset="0.26" stopColor="#F4D57C" />
          <stop offset="0.62" stopColor="#B86B0F" />
          <stop offset="1" stopColor="#6E3905" />
        </linearGradient>
        <linearGradient id="silverRing" x1="400" y1="80" x2="400" y2="720" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.28" stopColor="#F3F6FB" />
          <stop offset="0.7" stopColor="#C8D2E5" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="blueRing" x1="400" y1="234" x2="400" y2="566" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2D6BFF" />
          <stop offset="0.52" stopColor="#1E40AF" />
          <stop offset="1" stopColor="#132869" />
        </linearGradient>
        <radialGradient id="coinGold" cx="0.35" cy="0.3" r="1">
          <stop stopColor="#FFF7D8" />
          <stop offset="0.38" stopColor="#F8CA54" />
          <stop offset="0.7" stopColor="#D88D17" />
          <stop offset="1" stopColor="#8A4C07" />
        </radialGradient>
        <linearGradient id="phoneBody" x1="0" y1="-38" x2="0" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303743" />
          <stop offset="1" stopColor="#12161F" />
        </linearGradient>
        <radialGradient id="wheelHighlight" cx="0.32" cy="0.18" r="0.92">
          <stop stopColor="rgba(255,255,255,0.46)" />
          <stop offset="0.28" stopColor="rgba(255,255,255,0.14)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id="hubGold" cx="0.3" cy="0.3" r="1">
          <stop stopColor="#FFF5C2" />
          <stop offset="0.34" stopColor="#F5CA63" />
          <stop offset="0.68" stopColor="#C17616" />
          <stop offset="1" stopColor="#7E4406" />
        </radialGradient>
      </defs>

      {/* <circle cx="400" cy="400" r={RIM_RADIUS} fill="url(#wheelRimGold)" />
      <circle cx="400" cy="400" r="368" fill="url(#wheelInnerGold)" />
      <circle cx="400" cy="400" r="350" fill="url(#silverRing)" />
      <circle cx="400" cy="400" r="328" fill="#FDE7A3" opacity="0.94" /> */}

      {/* {LIGHT_ANGLES.map((angle) => {
        const light = polarToCartesian(angle, LIGHT_RADIUS)

        return (
          <circle
            key={angle}
            cx={light.x}
            cy={light.y}
            r="14"
            fill="url(#coinGold)"
            stroke="#91540D"
            strokeWidth="4"
          />
        )
      })} */}

      <circle cx="400" cy="400" r="312" fill="#11244A" opacity="0.28" />

      {PRIZES.map((prize, index) => (
        <path
          key={prize.id}
          d={describeSlicePath(prize.angle, SLICE_INNER_RADIUS, SLICE_OUTER_RADIUS)}
          fill={SLICE_COLORS[index]}
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      ))}

      {DIVIDER_ANGLES.map((angle) => {
        const start = polarToCartesian(angle, SLICE_INNER_RADIUS)
        const end = polarToCartesian(angle, SLICE_OUTER_RADIUS)

        return (
          <line
            key={angle}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke="rgba(255,255,255,0.52)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )
      })}

      {/* <circle cx="400" cy="400" r="302" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="4" />
      <circle cx="400" cy="400" r="142" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3" />
      <circle cx="400" cy="400" r="188" fill="url(#blueRing)" opacity="0.66" />
      <circle cx="400" cy="400" r="146" fill="#0C1331" opacity="0.22" />
      <circle cx="400" cy="400" r="124" fill="url(#hubGold)" opacity="0.28" /> */}

      {PRIZES.map((prize) => (
        <PrizeNode
          key={prize.id}
          prizeId={prize.id}
          angle={prize.angle}
          labelLines={prize.wheelLabel}
          labelRotation={labelRotation}
        />
      ))}

      <circle cx="400" cy="400" r="304" fill="url(#wheelHighlight)" opacity="0.56" />
      <circle cx="400" cy="400" r="394" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="10" />
    </WheelSvg>
  )
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

      <StageFrame>
        <Image
          src="/wheelFrame.png"
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 92vw, (max-width: 1400px) 44vw, 560px"
        />
      </StageFrame>

      <WheelShadow />

      <WheelOrbit>
        <WheelDiscWrap
          $animate={animateOnMount}
          style={
            {
              '--wheel-rest-angle': `${rotation}deg`,
              transform: animateOnMount ? undefined : `rotate(${rotation}deg)`,
            } as CSSProperties
          }
        >
          <WheelGraphic labelRotation={labelRotation} />
        </WheelDiscWrap>

        <CenterHub>
          <Image src="/80x80.png" alt="DEVAWINBET" fill sizes="140px" priority />
        </CenterHub>
      </WheelOrbit>
    </WheelShell>
  )
}
