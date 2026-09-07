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
  mountSpinDirection?: 'clockwise' | 'counterclockwise'
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
const SLICE_OUTER_RADIUS = 342
const SLICE_INNER_RADIUS = 86
const DIVIDER_ANGLES = [30, 90, 150, 210, 270, 330]
const BULB_ANGLES = Array.from({ length: 30 }, (_, index) => index * 12)

const PRIZE_LAYOUTS: Record<
  string,
  {
    groupRadius: number
    groupAngleOffset?: number
    groupDx?: number
    groupDy?: number
    arrangement: 'top' | 'right' | 'bottom' | 'left'
    labelRotation?: number
    labelSize: number
  }
> = {
  'iphone-17-pro-max': {
    groupRadius: 224,
    groupDy: 6,
    arrangement: 'top',
    labelSize: 25,
  },
  'cash-100': {
    groupRadius: 226,
    groupAngleOffset: 2,
    groupDx: 6,
    groupDy: 2,
    arrangement: 'top',
    labelSize: 36,
  },
  'cash-50': {
    groupRadius: 226,
    groupAngleOffset: 2,
    groupDx: 6,
    groupDy: 10,
    arrangement: 'top',
    labelSize: 36,
  },
  'cash-30': {
    groupRadius: 226,
    groupDy: 10,
    arrangement: 'top',
    labelSize: 36,
  },
  'cash-20': {
    groupRadius: 226,
    groupAngleOffset: -2,
    groupDx: -6,
    groupDy: 10,
    arrangement: 'top',
    labelSize: 36,
  },
  angpow: {
    groupRadius: 226,
    groupAngleOffset: -2,
    groupDx: -4,
    groupDy: 4,
    arrangement: 'top',
    labelSize: 32,
  },
}

const SLICE_FILLS = [
  'url(#sliceBlueOne)',
  'url(#sliceYellowOne)',
  'url(#sliceRedOne)',
  'url(#sliceBlueTwo)',
  'url(#sliceYellowTwo)',
  'url(#sliceRedTwo)',
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
      letterSpacing="0"
      paintOrder="stroke fill"
      stroke="#8D211C"
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

  return (
    <g transform={`translate(${groupX} ${groupY})`}>
      <g transform={`rotate(${-labelRotation + (layout.labelRotation ?? 0)})`}>
        {textBlock}
      </g>
    </g>
  )
}

function WheelGraphic({ labelRotation }: { labelRotation: number }) {
  return (
    <WheelSvg viewBox="0 0 800 800" aria-hidden="true">
      <defs>
        <linearGradient id="rimOuter" x1="128" y1="90" x2="674" y2="708" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF0B5" />
          <stop offset="0.12" stopColor="#EFB241" />
          <stop offset="0.28" stopColor="#7A2415" />
          <stop offset="0.48" stopColor="#3A0907" />
          <stop offset="0.68" stopColor="#7D2117" />
          <stop offset="0.86" stopColor="#F2BE4E" />
          <stop offset="1" stopColor="#5B1A0B" />
        </linearGradient>
        <linearGradient id="rimBand" x1="400" y1="30" x2="400" y2="770" gradientUnits="userSpaceOnUse">
          <stop stopColor="#781E16" />
          <stop offset="0.28" stopColor="#4B0D0A" />
          <stop offset="0.56" stopColor="#9E2A1E" />
          <stop offset="1" stopColor="#3A0907" />
        </linearGradient>
        <linearGradient id="sliceBlueOne" x1="250" y1="116" x2="570" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BDE8FF" />
          <stop offset="0.14" stopColor="#39A7FF" />
          <stop offset="0.42" stopColor="#0759D8" />
          <stop offset="0.72" stopColor="#062A87" />
          <stop offset="1" stopColor="#02134B" />
        </linearGradient>
        <linearGradient id="sliceYellowOne" x1="505" y1="150" x2="706" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF8B8" />
          <stop offset="0.18" stopColor="#FFD849" />
          <stop offset="0.48" stopColor="#D99505" />
          <stop offset="0.74" stopColor="#8A4A02" />
          <stop offset="1" stopColor="#412100" />
        </linearGradient>
        <linearGradient id="sliceRedOne" x1="610" y1="386" x2="540" y2="684" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD1CF" />
          <stop offset="0.16" stopColor="#FF4E59" />
          <stop offset="0.46" stopColor="#C4121E" />
          <stop offset="0.74" stopColor="#71070E" />
          <stop offset="1" stopColor="#2C0205" />
        </linearGradient>
        <linearGradient id="sliceBlueTwo" x1="518" y1="650" x2="280" y2="640" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4F3FF" />
          <stop offset="0.14" stopColor="#278EFF" />
          <stop offset="0.44" stopColor="#1146CF" />
          <stop offset="0.72" stopColor="#061F78" />
          <stop offset="1" stopColor="#010D38" />
        </linearGradient>
        <linearGradient id="sliceYellowTwo" x1="178" y1="550" x2="310" y2="276" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7B0" />
          <stop offset="0.16" stopColor="#FFC833" />
          <stop offset="0.46" stopColor="#C97B00" />
          <stop offset="0.74" stopColor="#753600" />
          <stop offset="1" stopColor="#321700" />
        </linearGradient>
        <linearGradient id="sliceRedTwo" x1="168" y1="270" x2="332" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD2CA" />
          <stop offset="0.16" stopColor="#FF4657" />
          <stop offset="0.46" stopColor="#B90F1B" />
          <stop offset="0.74" stopColor="#65070E" />
          <stop offset="1" stopColor="#260204" />
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
        <radialGradient id="bulbGlow" cx="0.35" cy="0.28" r="0.8">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.34" stopColor="#FFF2C5" />
          <stop offset="0.66" stopColor="#FFB23B" />
          <stop offset="1" stopColor="#A92C17" />
        </radialGradient>
        <radialGradient id="shine" cx="0.26" cy="0.2" r="0.9">
          <stop stopColor="rgba(255,255,255,0.44)" />
          <stop offset="0.24" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <circle cx="400" cy="400" r="392" fill="#260403" />
      <circle cx="400" cy="400" r="386" fill="url(#rimOuter)" />
      <circle cx="400" cy="400" r="374" fill="url(#rimBand)" />
      <circle cx="400" cy="400" r="350" fill="#F1C060" />
      <circle cx="400" cy="400" r="344" fill="#3B0B08" opacity="0.34" />

      {PRIZES.map((prize, index) => (
        <path
          key={prize.id}
          d={describeSlicePath(prize.angle, SLICE_INNER_RADIUS, SLICE_OUTER_RADIUS)}
          fill={SLICE_FILLS[index]}
          stroke="#BDA24F"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      ))}

      <circle cx="400" cy="400" r="346" fill="none" stroke="#F7D983" strokeWidth="5" />
      <circle cx="400" cy="400" r="373" fill="none" stroke="#4C0D09" strokeWidth="10" opacity="0.55" />

      {BULB_ANGLES.map((angle) => {
        const position = polarToCartesian(angle, 362)
        return (
          <g key={angle}>
            <circle
              cx={position.x}
              cy={position.y}
              r="18"
              fill="#FFB23B"
              opacity="0.34"
            />
            <circle
              cx={position.x}
              cy={position.y}
              r="12"
              fill="url(#bulbGlow)"
              stroke="#8C2A13"
              strokeWidth="2.6"
            />
            <circle
              cx={position.x - 3.6}
              cy={position.y - 4.2}
              r="3.6"
              fill="#FFFFFF"
              opacity="0.86"
            />
          </g>
        )
      })}

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
            stroke="#BDA24F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        )
      })}

      <circle cx="400" cy="400" r="326" fill="url(#shine)" opacity="0.38" />
      <circle cx="400" cy="400" r="98" fill="url(#hubGold)" stroke="#A95A0A" strokeWidth="8" />
      <circle cx="400" cy="400" r="64" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="2" />
      <path
        d="M 400 308 A 92 92 0 0 1 492 400"
        fill="none"
        stroke="rgba(255,255,255,0.42)"
        strokeWidth="10"
        strokeLinecap="round"
      />

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
  mountSpinDirection = 'clockwise',
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
          src="/newBaseColorSized.png"
          alt="DEVAWINBET podium"
          fill
          sizes="(max-width: 900px) 84vw, (max-width: 1400px) 48vw, 720px"
          priority
        />
      </BaseImageWrap>

      <WheelOrbit>
        <WheelDiscWrap
          $animate={animateOnMount}
          $direction={mountSpinDirection}
          style={
            {
              '--wheel-rest-angle': `${rotation}deg`,
              transform: animateOnMount ? undefined : `rotate(${rotation}deg)`,
            } as CSSProperties
          }
        >
          <WheelGraphic labelRotation={labelRotation} />
        </WheelDiscWrap>

        <CenterHub aria-hidden="true" />
      </WheelOrbit>

      <Pointer viewBox="0 0 120 160" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="pointerOuterGold" x1="20" y1="8" x2="96" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF0A8" />
            <stop offset="0.18" stopColor="#F3BB3C" />
            <stop offset="0.46" stopColor="#8B1D0F" />
            <stop offset="0.76" stopColor="#D78A19" />
            <stop offset="1" stopColor="#FFF1AA" />
          </linearGradient>
          <linearGradient id="pointerInnerGold" x1="37" y1="24" x2="84" y2="138" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF8C4" />
            <stop offset="0.28" stopColor="#F7C64B" />
            <stop offset="0.58" stopColor="#D08313" />
            <stop offset="1" stopColor="#7C3108" />
          </linearGradient>
          <radialGradient id="pointerCap" cx="0.34" cy="0.28" r="0.9">
            <stop stopColor="#FFFAD1" />
            <stop offset="0.34" stopColor="#F7D45F" />
            <stop offset="0.68" stopColor="#D58A17" />
            <stop offset="1" stopColor="#7C2E06" />
          </radialGradient>
        </defs>
        <path
          d="M60 5 C30 5 12 25 12 55 C12 83 34 101 60 151 C86 101 108 83 108 55 C108 25 90 5 60 5 Z"
          fill="#7C150C"
        />
        <path
          d="M60 14 C36 14 21 31 21 56 C21 78 40 96 60 134 C80 96 99 78 99 56 C99 31 84 14 60 14 Z"
          fill="url(#pointerOuterGold)"
        />
        <path
          d="M60 25 C42 25 31 38 31 57 C31 73 45 89 60 116 C75 89 89 73 89 57 C89 38 78 25 60 25 Z"
          fill="#8A1A0E"
          opacity="0.92"
        />
        <circle cx="60" cy="56" r="27" fill="url(#pointerCap)" />
        <circle
          cx="60"
          cy="56"
          r="21"
          fill="none"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="4"
        />
        <circle cx="60" cy="103" r="7" fill="url(#pointerInnerGold)" stroke="#8A1A0E" strokeWidth="2" />
      </Pointer>
    </WheelShell>
  )
}
