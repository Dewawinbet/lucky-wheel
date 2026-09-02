'use client'

import { Box, styled } from '@mui/material'

export const WheelShell = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$interactive' && prop !== '$variant',
})<{
  $interactive?: boolean
  $variant?: 'hero' | 'stage'
}>(({ theme, $interactive, $variant = 'hero' }) => ({
  position: 'relative',
  width: $variant === 'stage' ? 'min(640px, 100%)' : 'min(560px, 100%)',
  aspectRatio: '1198 / 1313',
  display: 'block',
  margin: '0 auto',
  cursor: $interactive ? 'pointer' : 'default',
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
  userSelect: 'none',
  textDecoration: 'none',
  overflow: 'visible',

  [theme.breakpoints.down('md')]: {
    width: 'min(520px, 100%)',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'min(390px, 94vw)',
  },

  '@media (max-height: 860px)': {
    width: $variant === 'stage' ? 'min(560px, 58vh, 100%)' : 'min(520px, 54vh, 100%)',
  },
}))

export const StageFrame = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',

  '& img': {
    objectFit: 'contain',
  },
})

export const FrameGlow = styled(Box)({
  position: 'absolute',
  inset: '10% 14% 18%',
  zIndex: 0,
  background:
    'radial-gradient(circle at center, rgba(46,103,255,0.3) 0%, rgba(125,52,255,0.18) 28%, rgba(236,72,153,0.12) 54%, transparent 76%)',
  filter: 'blur(30px)',
  pointerEvents: 'none',
})

export const WheelShadow = styled(Box)({
  position: 'absolute',
  left: '50%',
  bottom: '18.8%',
  zIndex: 2,
  width: '50%',
  height: '5%',
  transform: 'translateX(-50%)',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(6,10,28,0.52) 0%, rgba(6,10,28,0.26) 48%, transparent 74%)',
  filter: 'blur(10px)',
  pointerEvents: 'none',
})

export const WheelOrbit = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '38.45%',
  zIndex: 3,
  width: '63.8%',
  aspectRatio: '1',
  transform: 'translate(-50%, -50%)',
  display: 'grid',
  placeItems: 'center',
  pointerEvents: 'none',
})

export const WheelDiscWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$animate',
})<{ $animate?: boolean }>(({ $animate = false }) => ({
  '--wheel-rest-angle': '0deg',
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 9.2s cubic-bezier(0.06, 0.88, 0.14, 1)',
  animation: $animate
    ? 'wheelHeroSpin 4.8s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards'
    : 'none',
  willChange: 'transform',
  filter: 'drop-shadow(0 24px 28px rgba(0,0,0,0.28))',
  pointerEvents: 'none',

  '@keyframes wheelHeroSpin': {
    '0%': { transform: 'rotate(0deg)' },
    '14%': { transform: 'rotate(26deg)' },
    '68%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle) - 10deg))' },
    '82%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle) + 6deg))' },
    '100%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle)))' },
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

export const CenterHub = styled(Box)({
  position: 'absolute',
  inset: '50% auto auto 50%',
  zIndex: 5,
  width: '24%',
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
    inset: '12%',
    borderRadius: '50%',
    background:
      'radial-gradient(circle at 32% 30%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.14) 28%, transparent 42%), linear-gradient(145deg, #F6D67F 0%, #B46A0A 44%, #7A4306 100%)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '22%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #101217 0%, #000000 78%)',
    boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.08)',
  },

  '& img': {
    objectFit: 'contain',
    padding: '23%',
    zIndex: 1,
    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
  },
})
