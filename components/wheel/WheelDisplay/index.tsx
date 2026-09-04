'use client'

import type { CSSProperties, KeyboardEventHandler } from 'react'
import Image from 'next/image'
import { PRIZES } from '@/constants/prize'
import {
  BaseImageWrap,
  CenterHub,
  FrameGlow,
  Pointer,
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
const SLICE_OUTER_RADIUS = 360
const SLICE_INNER_RADIUS = 118
const DIVIDER_ANGLES = [30, 90, 150, 210, 270, 330]

const PRIZE_LAYOUTS: Record<
  string,
  {
    groupRadius: number
    groupAngleOffset?: number
    groupDx?: number
    groupDy?: number
    arrangement: 'top' | 'right' | 'bottom' | 'left'
    labelRotation?: number
    iconScale?: number
    labelSize: number
  }
> = {
  'iphone-17-pro-max': {
    groupRadius: 232,
    groupDy: 18,
    arrangement: 'top',
    iconScale: 0.98,
    labelSize: 28,
  },
  'cash-100': {
    groupRadius: 232,
    groupAngleOffset: 2,
    groupDx: 6,
    groupDy: 2,
    arrangement: 'top',
    iconScale: 0.98,
    labelSize: 33,
  },
  'cash-50': {
    groupRadius: 232,
    groupAngleOffset: 2,
    groupDx: 6,
    groupDy: 10,
    arrangement: 'top',
    iconScale: 0.98,
    labelSize: 33,
  },
  'cash-30': {
    groupRadius: 232,
    groupDy: 10,
    arrangement: 'top',
    iconScale: 0.98,
    labelSize: 33,
  },
  'cash-20': {
    groupRadius: 232,
    groupAngleOffset: -2,
    groupDx: -6,
    groupDy: 10,
    arrangement: 'top',
    iconScale: 0.98,
    labelSize: 33,
  },
  angpow: {
    groupRadius: 232,
    groupAngleOffset: -2,
    groupDx: -4,
    groupDy: 4,
    arrangement: 'top',
    iconScale: 0.98,
    labelSize: 33,
  },
}

const SLICE_FILLS = [
  'url(#sliceBlueOne)',
  'url(#sliceRedOne)',
  'url(#sliceGoldOne)',
  'url(#sliceBlueTwo)',
  'url(#sliceRedTwo)',
  'url(#sliceGoldTwo)',
]
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
  const strokeWidth = fontSize >= 34 ? 6 : 4.5

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
          <rect x="-20" y="-38" width="40" height="76" rx="11" fill="#1B202B" stroke="#5B6475" strokeWidth="4" />
          <rect x="-16" y="-34" width="32" height="68" rx="8" fill="url(#phoneBody)" />
          <circle cx="-8" cy="-20" r="4" fill="#D7E0EA" />
          <circle cx="4" cy="-10" r="4" fill="#D7E0EA" />
          <circle cx="-8" cy="0" r="4" fill="#D7E0EA" />
          <circle cx="8" cy="24" r="3" fill="#9CA3AF" opacity="0.7" />
        </g>
      )
    case 'cash-100':
      return (
        <g>
          <circle cx="-14" cy="10" r="20" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <circle cx="14" cy="-8" r="23" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <circle cx="10" cy="20" r="16" fill="url(#coinGold)" stroke="#8B4A06" strokeWidth="4" />
          <text x="-14" y="14" fill="#A4550A" fontSize="22" fontWeight="900" textAnchor="middle">₱</text>
          <text x="14" y="-4" fill="#A4550A" fontSize="24" fontWeight="900" textAnchor="middle">₱</text>
          <text x="10" y="24" fill="#A4550A" fontSize="18" fontWeight="900" textAnchor="middle">₱</text>
        </g>
      )
    case 'cash-50':
      return <PrizeGraphic prizeId="cash-100" />
    case 'cash-30':
      return <PrizeGraphic prizeId="cash-100" />
    case 'cash-20':
      return <PrizeGraphic prizeId="cash-100" />
    case 'angpow':
      return <PrizeGraphic prizeId="cash-100" />
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
  const groupPosition = polarToCartesian(
    angle + (layout.groupAngleOffset ?? 0),
    layout.groupRadius
  )
  const groupX = groupPosition.x + (layout.groupDx ?? 0)
  const groupY = groupPosition.y + (layout.groupDy ?? 0)
  const textBlock = renderWheelLabel(labelLines, layout.labelSize)

  if (layout.arrangement === 'top') {
    return (
      <g transform={`translate(${groupX} ${groupY})`}>
        <g transform={`rotate(${-labelRotation})`}>
          <g transform={`translate(0 -26) scale(${layout.iconScale ?? 1})`}>
            <PrizeGraphic prizeId={prizeId} />
          </g>
          <g transform="translate(0 34)">{textBlock}</g>
        </g>
      </g>
    )
  }

  if (layout.arrangement === 'bottom') {
    return (
      <g transform={`translate(${groupX} ${groupY})`}>
        <g transform={`rotate(${-labelRotation})`}>
          <g transform="translate(0 -10)">{textBlock}</g>
          <g transform={`translate(0 42) scale(${layout.iconScale ?? 1})`}>
            <PrizeGraphic prizeId={prizeId} />
          </g>
        </g>
      </g>
    )
  }

  if (layout.arrangement === 'left') {
    return (
      <g transform={`translate(${groupX} ${groupY})`}>
        <g transform={`rotate(${-labelRotation + (layout.labelRotation ?? 0)})`}>
          <g transform={`translate(-54 14) scale(${layout.iconScale ?? 1})`}>
            <PrizeGraphic prizeId={prizeId} />
          </g>
          <g transform="translate(18 0)">{textBlock}</g>
        </g>
      </g>
    )
  }

  return (
    <g transform={`translate(${groupX} ${groupY})`}>
      <g transform={`rotate(${-labelRotation + (layout.labelRotation ?? 0)})`}>
        <g transform="translate(-18 0)">{textBlock}</g>
        <g transform={`translate(56 14) scale(${layout.iconScale ?? 1})`}>
          <PrizeGraphic prizeId={prizeId} />
        </g>
      </g>
    </g>
  )
}

function WheelGraphic({ labelRotation }: { labelRotation: number }) {
  return (
    <WheelSvg viewBox="0 0 800 800" aria-hidden="true">
      <defs>
        <linearGradient id="rimOuter" x1="134" y1="96" x2="668" y2="706" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF4C2" />
          <stop offset="0.14" stopColor="#F8CF63" />
          <stop offset="0.34" stopColor="#B87418" />
          <stop offset="0.58" stopColor="#512A05" />
          <stop offset="0.8" stopColor="#E9BE53" />
          <stop offset="1" stopColor="#734108" />
        </linearGradient>
        <linearGradient id="rimInner" x1="400" y1="70" x2="400" y2="730" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFBEE" />
          <stop offset="0.18" stopColor="#F2DB98" />
          <stop offset="0.52" stopColor="#A96A15" />
          <stop offset="1" stopColor="#452204" />
        </linearGradient>
        <linearGradient id="sliceBlueOne" x1="264" y1="150" x2="548" y2="324" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E4F6FF" />
          <stop offset="0.12" stopColor="#7FD3FF" />
          <stop offset="0.28" stopColor="#2D9FFF" />
          <stop offset="0.52" stopColor="#0E63E6" />
          <stop offset="0.76" stopColor="#0A3C98" />
          <stop offset="1" stopColor="#05173F" />
        </linearGradient>
        <linearGradient id="sliceRedOne" x1="514" y1="174" x2="698" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE0E6" />
          <stop offset="0.12" stopColor="#FFA0B5" />
          <stop offset="0.28" stopColor="#FF4B77" />
          <stop offset="0.52" stopColor="#D91A49" />
          <stop offset="0.76" stopColor="#8F102F" />
          <stop offset="1" stopColor="#420716" />
        </linearGradient>
        <linearGradient id="sliceGoldOne" x1="614" y1="396" x2="546" y2="670" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7D5" />
          <stop offset="0.12" stopColor="#FFE38A" />
          <stop offset="0.28" stopColor="#FFC93A" />
          <stop offset="0.52" stopColor="#D88A00" />
          <stop offset="0.76" stopColor="#935300" />
          <stop offset="1" stopColor="#482300" />
        </linearGradient>
        <linearGradient id="sliceBlueTwo" x1="520" y1="642" x2="282" y2="642" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0FAFF" />
          <stop offset="0.12" stopColor="#9DDAFF" />
          <stop offset="0.28" stopColor="#4F8DFF" />
          <stop offset="0.52" stopColor="#2357D1" />
          <stop offset="0.76" stopColor="#15328A" />
          <stop offset="1" stopColor="#09173F" />
        </linearGradient>
        <linearGradient id="sliceRedTwo" x1="178" y1="548" x2="302" y2="288" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE5EB" />
          <stop offset="0.12" stopColor="#FFB0C0" />
          <stop offset="0.28" stopColor="#FF5A82" />
          <stop offset="0.52" stopColor="#C81D45" />
          <stop offset="0.76" stopColor="#821130" />
          <stop offset="1" stopColor="#3D0617" />
        </linearGradient>
        <linearGradient id="sliceGoldTwo" x1="176" y1="268" x2="330" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFBE8" />
          <stop offset="0.12" stopColor="#FFE59B" />
          <stop offset="0.28" stopColor="#FFC93A" />
          <stop offset="0.52" stopColor="#CC8400" />
          <stop offset="0.76" stopColor="#8A4C00" />
          <stop offset="1" stopColor="#432100" />
        </linearGradient>
        <linearGradient id="phoneBody" x1="0" y1="-38" x2="0" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303743" />
          <stop offset="1" stopColor="#12161F" />
        </linearGradient>
        <radialGradient id="coinGold" cx="0.35" cy="0.3" r="1">
          <stop stopColor="#FFF7D8" />
          <stop offset="0.38" stopColor="#F8CA54" />
          <stop offset="0.7" stopColor="#D88D17" />
          <stop offset="1" stopColor="#8A4C07" />
        </radialGradient>
        <radialGradient id="hubGold" cx="0.3" cy="0.3" r="1">
          <stop stopColor="#FFF5C9" />
          <stop offset="0.32" stopColor="#F4C65E" />
          <stop offset="0.58" stopColor="#D88F1F" />
          <stop offset="1" stopColor="#7B4205" />
        </radialGradient>
        <radialGradient id="shine" cx="0.26" cy="0.2" r="0.9">
          <stop stopColor="rgba(255,255,255,0.44)" />
          <stop offset="0.24" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <circle cx="400" cy="400" r="390" fill="url(#rimOuter)" />
      <circle cx="400" cy="400" r="368" fill="#2D1403" opacity="0.18" />

      {PRIZES.map((prize, index) => (
        <path
          key={prize.id}
          d={describeSlicePath(prize.angle, SLICE_INNER_RADIUS, SLICE_OUTER_RADIUS)}
          fill={SLICE_FILLS[index]}
          stroke="#FFF1FB"
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
            stroke="rgba(255,255,255,0.34)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )
      })}

      <circle cx="400" cy="400" r="362" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="3" />
      <circle cx="400" cy="400" r="330" fill="url(#shine)" opacity="0.54" />
      <circle cx="400" cy="400" r="118" fill="rgba(20,10,24,0.34)" />
      <circle cx="400" cy="400" r="108" fill="url(#hubGold)" opacity="0.24" />

      {PRIZES.map((prize) => (
        <PrizeNode
          key={prize.id}
          prizeId={prize.id}
          angle={prize.angle}
          labelLines={prize.wheelLabel}
          labelRotation={labelRotation}
        />
      ))}

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
      <WheelShadow />
      <BaseImageWrap>
        <Image
          src="/landingWheelBase.png"
          alt="DEVAWINBET podium"
          fill
          sizes="(max-width: 900px) 84vw, (max-width: 1400px) 48vw, 720px"
          priority
        />
      </BaseImageWrap>

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
          <Image src="/80x80.png" alt="DEVAWINBET" fill sizes="160px" priority />
        </CenterHub>
      </WheelOrbit>

      <Pointer />
    </WheelShell>
  )
}
