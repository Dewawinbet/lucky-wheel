'use client'

import { Box, styled } from '@mui/material'

export const WheelShell = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$interactive' && prop !== '$variant',
})<{
  $interactive?: boolean
  $variant?: 'hero' | 'stage'
}>(({ theme, $interactive, $variant = 'hero' }) => ({
  position: 'relative',
  width: $variant === 'stage' ? 'min(470px, 82vw)' : 'min(470px, 82vw)',
  aspectRatio: '0.92',
  display: 'grid',
  placeItems: 'center',
  margin: '0 auto',
  cursor: $interactive ? 'pointer' : 'default',
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
  userSelect: 'none',
  textDecoration: 'none',

  [theme.breakpoints.down('md')]: {
    width: $variant === 'stage' ? 'min(430px, 78vw)' : 'min(430px, 78vw)',
  },

  [theme.breakpoints.down('sm')]: {
    width: $variant === 'stage' ? 'min(344px, 88vw)' : 'min(344px, 88vw)',
  },

  '@media (max-height: 900px)': {
    width: $variant === 'stage' ? 'min(410px, 54vh, 72vw)' : 'min(470px, 82vw)',
  },

  '@media (max-height: 820px)': {
    width: $variant === 'stage' ? 'min(372px, 48vh, 66vw)' : 'min(470px, 82vw)',
  },
}))

export const FrameGlow = styled(Box)({
  position: 'absolute',
  inset: '3% 8% 18%',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(41,121,255,0.22) 0%, rgba(251,191,36,0.18) 36%, rgba(236,72,153,0.16) 62%, transparent 74%)',
  filter: 'blur(34px)',
  pointerEvents: 'none',
})

export const WheelFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '88%',
  aspectRatio: '1',
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(circle at 32% 28%, rgba(255,243,180,0.42), transparent 24%), linear-gradient(145deg, #f9df98 0%, #f4bb46 14%, #b36b10 32%, #7b4205 52%, #ebba56 72%, #fff0b3 84%, #93540d 100%)',
  boxShadow:
    '0 24px 56px rgba(0,0,0,0.42), inset 0 3px 4px rgba(255,255,255,0.55), inset 0 -8px 16px rgba(86,41,0,0.38)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 14,
    borderRadius: '50%',
    background:
      'linear-gradient(180deg, #fff4c3 0%, #f8d77f 28%, #b16a0b 62%, #5e3103 100%)',
    boxShadow:
      'inset 0 2px 4px rgba(255,255,255,0.62), inset 0 -7px 10px rgba(98,50,0,0.42)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 32,
    borderRadius: '50%',
    boxShadow:
      '0 0 0 2px rgba(255,243,192,0.9), 0 0 0 14px rgba(7,20,54,0.2), inset 0 0 0 2px rgba(255,255,255,0.28)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    '&::before': {
      inset: 10,
    },

    '&::after': {
      inset: 24,
    },
  },
}))

export const WheelDiscWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$animate',
})<{ $animate?: boolean }>(({ $animate = false }) => ({
  '--wheel-rest-angle': '0deg',
  position: 'relative',
  zIndex: 2,
  width: 'calc(100% - 42px)',
  aspectRatio: '1',
  borderRadius: '50%',
  transition: 'transform 9.2s cubic-bezier(0.06, 0.88, 0.14, 1)',
  animation: $animate
    ? 'wheelHeroSpin 4.8s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards'
    : 'none',
  willChange: 'transform',
  filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.36))',

  '@keyframes wheelHeroSpin': {
    '0%': { transform: 'rotate(0deg)' },
    '14%': { transform: 'rotate(28deg)' },
    '68%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle) - 10deg))' },
    '82%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle) + 5deg))' },
    '100%': { transform: 'rotate(calc(5turn + var(--wheel-rest-angle)))' },
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}))

export const WheelDisc = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '1',
  borderRadius: '50%',
  overflow: 'hidden',
  background: `
    radial-gradient(circle at 32% 26%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.14) 14%, transparent 26%),
    radial-gradient(circle at 68% 72%, rgba(255,184,77,0.22) 0%, transparent 24%),
    radial-gradient(circle at center, rgba(255,255,255,0.06) 0 16%, transparent 16% 100%),
    conic-gradient(
      from -30deg,
      #8b5cf6 0deg 60deg,
      #ff3a71 60deg 120deg,
      #5468ff 120deg 180deg,
      #ffae18 180deg 240deg,
      #e43f94 240deg 300deg,
      #17c3c8 300deg 360deg
    )
  `,
  boxShadow:
    'inset 0 0 0 2px rgba(255,255,255,0.18), 0 0 0 10px rgba(255,255,255,0.94)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    background:
      'radial-gradient(circle at 50% 18%, rgba(255,255,255,0.34), transparent 28%), radial-gradient(circle at 22% 42%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 50% 50%, transparent 0 36%, rgba(15,23,42,0.12) 36% 100%)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '6% 6% 44% 6%',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.28), transparent 88%)',
    filter: 'blur(10px)',
    pointerEvents: 'none',
  },
})

export const SliceLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '28%',
  display: 'grid',
  justifyItems: 'center',
  transform: 'translate(-50%, -50%)',
  transformOrigin: 'center',
  pointerEvents: 'none',
  zIndex: 2,

  '&.iphone': {
    width: '34%',
  },

  '&.angpow': {
    width: '32%',
  },

  [theme.breakpoints.down('sm')]: {
    width: '30%',

    '&.iphone': {
      width: '36%',
    },

    '&.angpow': {
      width: '34%',
    },
  },
}))

export const SliceLabelInner = styled(Box)(({ theme }) => ({
  display: 'grid',
  justifyItems: 'center',
  gap: 2,
  maxWidth: '100%',
  color: '#fff',
  fontWeight: 900,
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '-0.03em',
  lineHeight: 0.96,
  textShadow: '0 6px 18px rgba(0,0,0,0.36), 0 2px 5px rgba(0,0,0,0.28)',

  '& > span': {
    display: 'block',
    whiteSpace: 'nowrap',
  },

  '.iphone &': {
    fontSize: 16,
  },

  '.angpow &': {
    fontSize: 17,
  },

  fontSize: 20,

  [theme.breakpoints.down('md')]: {
    fontSize: 18,

    '.iphone &': {
      fontSize: 14,
    },

    '.angpow &': {
      fontSize: 15,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gap: 1,
    fontSize: 15,

    '.iphone &': {
      fontSize: 11,
    },

    '.angpow &': {
      fontSize: 12,
    },
  },
}))

export const CenterHub = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 5,
  width: 92,
  height: 92,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(circle at 30% 30%, #fff5c9 0%, #f4c65e 26%, #d88f1f 55%, #7b4205 100%)',
  border: '7px solid rgba(128,72,7,0.92)',
  boxShadow:
    '0 10px 26px rgba(0,0,0,0.35), inset 0 2px 3px rgba(255,255,255,0.48), inset 0 -8px 14px rgba(102,50,0,0.35)',
  pointerEvents: 'none',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 11,
    borderRadius: '50%',
    background:
      'conic-gradient(from 0deg, #fff8d6, #f8c451, #b8690c, #fff2b4, #f8c451, #8e4f07, #fff8d6)',
    opacity: 0.92,
  },

  '& img': {
    position: 'relative',
    zIndex: 1,
    width: '56%',
    height: '56%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.26))',
  },

  [theme.breakpoints.down('sm')]: {
    width: 74,
    height: 74,
    borderWidth: 6,

    '&::before': {
      inset: 9,
    },

    '& img': {
      width: '58%',
      height: '58%',
    },
  },
}))

export const Pointer = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$animate',
})<{ $animate?: boolean }>(({ theme, $animate = false }) => ({
  position: 'absolute',
  top: '4%',
  left: '50%',
  zIndex: 8,
  width: 46,
  height: 56,
  transform: 'translateX(-50%)',
  clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
  background:
    'linear-gradient(180deg, #fff0ae 0%, #ffcb4a 22%, #df8c12 58%, #925007 100%)',
  border: '3px solid rgba(122,65,6,0.92)',
  borderRadius: '8px 8px 16px 16px',
  boxShadow:
    '0 10px 18px rgba(0,0,0,0.35), inset 0 2px 2px rgba(255,255,255,0.58)',
  animation: $animate ? 'pointerBounce 4.8s ease-out 1' : 'none',
  pointerEvents: 'none',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 6,
    clipPath: 'polygon(50% 100%, 5% 8%, 95% 8%)',
    background:
      'linear-gradient(180deg, #3b82f6 0%, #2552da 44%, #163286 100%)',
  },

  '@keyframes pointerBounce': {
    '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
    '20%': { transform: 'translateX(-50%) translateY(-3px)' },
    '26%': { transform: 'translateX(-50%) translateY(2px)' },
    '74%': { transform: 'translateX(-50%) translateY(-4px)' },
    '80%': { transform: 'translateX(-50%) translateY(-1px)' },
    '88%': { transform: 'translateX(-50%) translateY(1px)' },
  },

  [theme.breakpoints.down('sm')]: {
    width: 36,
    height: 46,
    borderWidth: 2,
  },
}))

export const StandFoot = styled(Box)({
  position: 'absolute',
  bottom: '3%',
  width: '44%',
  height: '14%',
  borderRadius: '50% 50% 18% 18% / 100% 100% 18% 18%',
  background:
    'linear-gradient(180deg, #b01d22 0%, #da2e31 26%, #8e0e12 76%, #65080a 100%)',
  boxShadow:
    '0 10px 22px rgba(0,0,0,0.32), inset 0 2px 0 rgba(255,183,160,0.28)',
  zIndex: 1,
  pointerEvents: 'none',
})

export const StandBase = styled(Box)({
  position: 'absolute',
  bottom: 0,
  width: '56%',
  minHeight: '8.5%',
  padding: '12px 18px 10px',
  borderRadius: 999,
  background:
    'linear-gradient(180deg, #ea3b3e 0%, #cb1c24 45%, #7a0710 100%)',
  boxShadow:
    '0 16px 24px rgba(0,0,0,0.32), inset 0 2px 0 rgba(255,164,148,0.25)',
  zIndex: 1,
  pointerEvents: 'none',
  display: 'grid',
  justifyItems: 'center',
  alignContent: 'center',
  gap: 2,
  textAlign: 'center',
})

export const BrandMark = styled(Box)({
  color: 'rgba(255,242,195,0.86)',
  fontSize: 8,
  fontWeight: 800,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  lineHeight: 1,
})

export const BrandWordmark = styled(Box)({
  color: '#fff6da',
  fontSize: 16,
  fontWeight: 900,
  letterSpacing: '0.02em',
  lineHeight: 1,
  textTransform: 'uppercase',
  textShadow: '0 1px 2px rgba(62,9,9,0.42)',
})
