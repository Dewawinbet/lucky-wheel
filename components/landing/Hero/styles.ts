'use client'

import { Box, Button, styled } from '@mui/material'

export const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 76px)',
  display: 'grid',
  gridTemplateColumns: '1fr 0.9fr',
  alignItems: 'center',
  gap: 50,
  padding: '60px 0 80px',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    padding: '55px 0 70px',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    padding: '42px 0 55px',
  },
}))

export const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
})

export const Eyebrow = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  padding: '8px 13px',
  borderRadius: 100,
  background: 'rgba(139,92,246,0.11)',
  border: '1px solid rgba(139,92,246,0.24)',
  color: '#C4B5FD',
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 22,
})

export const HeroTitle = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(3rem, 6vw, 5.4rem)',
  lineHeight: 0.98,
  fontWeight: 800,
  letterSpacing: '-0.055em',
  maxWidth: 650,
  color: '#fff',
  marginBottom: 24,

  '& span': {
    background: 'linear-gradient(90deg, #A78BFA 10%, #F472B6 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: 720,
    margin: '0 auto 22px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(2.8rem, 15vw, 4rem)',
  },
}))

export const HeroDescription = styled(Box)(({ theme }) => ({
  maxWidth: 540,
  color: '#A7B0C5',
  fontSize: 18,
  lineHeight: 1.7,
  marginBottom: 32,

  [theme.breakpoints.down('md')]: {
    margin: '0 auto 30px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
    lineHeight: 1.6,
  },
}))

export const SpinButton = styled(Button)({
  minWidth: 190,
  minHeight: 56,
  borderRadius: 16,
  color: '#fff',
  fontSize: 16,
  fontWeight: 800,
  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  boxShadow: '0 14px 40px rgba(139,92,246,0.3)',
  transition: 'all 0.25s ease',

  '&:hover': {
    background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
    transform: 'translateY(-2px)',
    boxShadow: '0 18px 48px rgba(139,92,246,0.4)',
  },
})

export const TrustText = styled(Box)({
  marginTop: 17,
  color: '#717B94',
  fontSize: 12,
  fontWeight: 500,
})

export const WheelVisual = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'min(470px, 80vw)',
  aspectRatio: '1',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',

  [theme.breakpoints.down('sm')]: {
    width: 'min(350px, 88vw)',
    marginTop: 10,
  },
}))

export const WheelGlow = styled(Box)({
  position: 'absolute',
  inset: '5%',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(139,92,246,0.28), rgba(236,72,153,0.12) 48%, transparent 70%)',
  filter: 'blur(28px)',
})

export const Wheel = styled(Box)({
  position: 'relative',
  width: '82%',
  aspectRatio: '1',
  borderRadius: '50%',
  border: '12px solid rgba(255,255,255,0.92)',
  background:
    'conic-gradient(from -30deg, #8B5CF6 0deg 60deg, #EC4899 60deg 120deg, #F59E0B 120deg 180deg, #6366F1 180deg 240deg, #F43F5E 240deg 300deg, #14B8A6 300deg 360deg)',
  boxShadow:
    '0 0 0 5px rgba(255,255,255,0.08), 0 25px 70px rgba(0,0,0,0.45), 0 0 70px rgba(139,92,246,0.2)',
  overflow: 'hidden',
  '--wheel-rest-angle': '0deg',
  animation: 'landingWheelSpin 4.8s cubic-bezier(0.16, 1, 0.3, 1) 1 forwards',
  willChange: 'transform',

  '@keyframes landingWheelSpin': {
    '0%': {
      transform: 'rotate(0deg)',
    },

    '14%': {
      transform: 'rotate(32deg)',
    },

    '68%': {
      transform:
        'rotate(calc(5turn + var(--wheel-rest-angle) - 14deg))',
    },

    '82%': {
      transform:
        'rotate(calc(5turn + var(--wheel-rest-angle) + 7deg))',
    },

    '100%': {
      transform: 'rotate(calc(5turn + var(--wheel-rest-angle)))',
    },
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    background:
      'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.3), transparent 24%, transparent 60%, rgba(0,0,0,0.15))',
    pointerEvents: 'none',
  },
})

export const WheelLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 3,
  top: '50%',
  left: '50%',
  width: '110px',
  color: '#fff',
  fontWeight: 900,
  fontSize: 'clamp(15px, 2.2vw, 21px)',
  lineHeight: 1.1,
  textAlign: 'center',
  whiteSpace: 'normal',
  textShadow: '0 2px 8px rgba(0,0,0,0.35)',
  transform:
    'translate(-50%, -50%) rotate(var(--angle)) translateY(-128px) rotate(calc(var(--angle) * -1))',

  '&.iphone': {
    width: 118,
    fontSize: 'clamp(11px, 1.45vw, 15px)',
    lineHeight: 1.15,
    transform:
      'translate(-50%, -50%) rotate(var(--angle)) translateY(-112px) rotate(calc(var(--angle) * -1))',
  },

  '&.angpow': {
    fontSize: 'clamp(13px, 1.9vw, 18px)',
  },

  [theme.breakpoints.down('sm')]: {
    width: 78,
    fontSize: 13,
    transform:
      'translate(-50%, -50%) rotate(var(--angle)) translateY(-96px) rotate(calc(var(--angle) * -1))',

    '&.iphone': {
      width: 78,
      fontSize: 9,
      lineHeight: 1.1,
      transform:
        'translate(-50%, -50%) rotate(var(--angle)) translateY(-82px) rotate(calc(var(--angle) * -1))',
    },

    '&.angpow': {
      fontSize: 11,
    },
  },
}))

export const WheelCenter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 5,
  width: 78,
  height: 78,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #fff, #E2E8F0)',
  border: '7px solid rgba(8,11,26,0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
  pointerEvents: 'none',

  '& svg': {
    color: '#7C3AED',
    fontSize: 31,
  },

  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
    borderWidth: 6,
  },
}))

export const Pointer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 8,
  top: '4%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 0,
  height: 0,
  borderLeft: '17px solid transparent',
  borderRight: '17px solid transparent',
  borderTop: '38px solid #FBBF24',
  filter: 'drop-shadow(0 5px 8px rgba(0,0,0,0.35))',
  animation: 'pointerBounce 4.8s ease-out 1',

  '@keyframes pointerBounce': {
    '0%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },

    '20%': {
      transform: 'translateX(-50%) translateY(-3px)',
    },

    '26%': {
      transform: 'translateX(-50%) translateY(2px)',
    },

    '74%': {
      transform: 'translateX(-50%) translateY(-4px)',
    },

    '80%': {
      transform: 'translateX(-50%) translateY(-2px)',
    },

    '88%': {
      transform: 'translateX(-50%) translateY(1px)',
    },
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    borderLeftWidth: 13,
    borderRightWidth: 13,
    borderTopWidth: 30,
  },
}))
