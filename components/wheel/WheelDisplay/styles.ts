'use client'

import { Box, styled } from '@mui/material'

export const WheelShell = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$interactive' && prop !== '$variant',
})<{
  $interactive?: boolean
  $variant?: 'hero' | 'stage'
}>(({ theme, $interactive, $variant = 'hero' }) => ({
  position: 'relative',
  width: $variant === 'stage' ? 'min(860px, 100%)' : 'min(760px, 100%)',
  aspectRatio: '1 / 1.18',
  display: 'grid',
  justifyItems: 'center',
  alignContent: 'start',
  margin: '0 auto',
  cursor: $interactive ? 'pointer' : 'default',
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
  userSelect: 'none',
  textDecoration: 'none',
  overflow: 'visible',

  [theme.breakpoints.down('md')]: {
    width: $variant === 'stage' ? 'min(760px, 100%)' : 'min(660px, 100%)',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'min(520px, 96vw)',
  },

  '@media (max-height: 860px)': {
    width: $variant === 'stage' ? 'min(720px, 74vh, 100%)' : 'min(640px, 68vh, 100%)',
  },
}))

export const FrameGlow = styled(Box)({
  position: 'absolute',
  inset: '6% 6% 14%',
  zIndex: 0,
  background:
    'radial-gradient(circle at 50% 42%, rgba(42,214,255,0.24) 0%, rgba(100,120,255,0.22) 24%, rgba(170,88,255,0.24) 44%, rgba(255,81,166,0.18) 62%, transparent 78%)',
  filter: 'blur(42px)',
  pointerEvents: 'none',
})

export const WheelShadow = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '79%',
  zIndex: 1,
  width: '78%',
  height: '8%',
  transform: 'translateX(-50%)',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(4,6,18,0.52) 0%, rgba(4,6,18,0.24) 56%, transparent 78%)',
  filter: 'blur(18px)',
  pointerEvents: 'none',
})

export const WheelOrbit = styled(Box)({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  aspectRatio: '1',
  display: 'grid',
  placeItems: 'center',
  marginTop: '0%',
  pointerEvents: 'none',
})

export const BaseImageWrap = styled(Box)({
  position: 'absolute',
  left: '50%',
  bottom: '-12%',
  zIndex: 2,
  width: '78%',
  aspectRatio: '1448 / 1086',
  transform: 'translateX(-50%)',
  pointerEvents: 'none',

  '& img': {
    objectFit: 'contain',
  },
})

export const WheelDiscWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$animate' && prop !== '$direction',
})<{ $animate?: boolean; $direction?: 'clockwise' | 'counterclockwise' }>(
  ({ $animate = false, $direction = 'clockwise' }) => ({
  '--wheel-rest-angle': '0deg',
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 9.2s cubic-bezier(0.06, 0.88, 0.14, 1)',
  animation: $animate
    ? `${$direction === 'clockwise' ? 'wheelHeroSpinClockwise' : 'wheelHeroSpinCounterClockwise'} 4.8s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards`
    : 'none',
  willChange: 'transform',
  filter: 'drop-shadow(0 30px 36px rgba(0,0,0,0.28))',
  pointerEvents: 'none',

  '@keyframes wheelHeroSpinClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '14%': { transform: 'rotate(26deg)' },
    '68%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle) - 10deg))' },
    '82%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle) + 6deg))' },
    '100%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle)))' },
  },

  '@keyframes wheelHeroSpinCounterClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '14%': { transform: 'rotate(-26deg)' },
    '68%': { transform: 'rotate(calc(-5turn + var(--wheel-rest-angle) + 10deg))' },
    '82%': { transform: 'rotate(calc(-5turn + var(--wheel-rest-angle) - 6deg))' },
    '100%': { transform: 'rotate(calc(-5turn + var(--wheel-rest-angle)))' },
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}))

export const WheelSvg = styled('svg')({
  width: '100%',
  height: '100%',
  display: 'block',
  overflow: 'visible',
})

export const Pointer = styled('svg')({
  position: 'absolute',
  top: '-1%',
  left: '50%',
  zIndex: 8,
  width: '9.6%',
  aspectRatio: '0.75',
  transform: 'translateX(-50%)',
  overflow: 'visible',
  filter: 'drop-shadow(0 13px 16px rgba(0,0,0,0.42))',
  pointerEvents: 'none',
})

export const CenterHub = styled(Box)({
  position: 'absolute',
  inset: '50% auto auto 50%',
  zIndex: 5,
  width: '18.5%',
  aspectRatio: '1',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  background:
    'radial-gradient(circle at 28% 28%, #FFF6C7 0%, #F8CD62 26%, #D88D1F 54%, #7A4306 100%)',
  boxShadow:
    '0 12px 24px rgba(0,0,0,0.24), inset 0 2px 3px rgba(255,255,255,0.52), inset 0 -10px 16px rgba(106,56,5,0.42)',
  pointerEvents: 'none',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '10%',
    borderRadius: '50%',
    background:
      'conic-gradient(from 12deg, #8B4B07, #F5C85D, #FFF2B8, #C77712, #6F3704, #E9B444, #8B4B07)',
    boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.34), inset 0 -8px 14px rgba(91,45,4,0.42)',
  },
})
