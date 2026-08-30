'use client'

import { Box, styled } from '@mui/material'

export const CelebrationBackdrop = styled(Box)({
  position: 'fixed',
  inset: 0,
  zIndex: 1200,
  display: 'grid',
  placeItems: 'center',
  padding: 20,
  background: 'rgba(5, 8, 20, 0.55)',
  backdropFilter: 'blur(10px)',
})

export const CelebrationCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'min(100%, 420px)',
  overflow: 'hidden',
  borderRadius: 30,
  padding: '30px 26px',
  textAlign: 'center',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.98) 0%, rgba(8,11,26,1) 100%)',
  border: '1px solid rgba(255,255,255,0.1)',
  boxShadow: '0 30px 90px rgba(0,0,0,0.42)',
  animation: 'celebrationPop 380ms cubic-bezier(0.2, 0.9, 0.22, 1)',

  '@keyframes celebrationPop': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.9) translateY(12px)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
    },
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
    padding: '26px 18px',
  },
}))

export const CelebrationGlow = styled(Box)({
  position: 'absolute',
  inset: '-18% auto auto 50%',
  transform: 'translateX(-50%)',
  width: 320,
  height: 220,
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(236,72,153,0.24), transparent 70%)',
  pointerEvents: 'none',
})

export const CelebrationConfetti = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  background:
    'radial-gradient(circle at 12% 18%, rgba(251,191,36,0.95) 0 4px, transparent 5px), radial-gradient(circle at 84% 16%, rgba(167,139,250,0.9) 0 4px, transparent 5px), radial-gradient(circle at 76% 34%, rgba(244,114,182,0.85) 0 5px, transparent 6px), radial-gradient(circle at 26% 74%, rgba(45,212,191,0.85) 0 5px, transparent 6px), radial-gradient(circle at 90% 72%, rgba(251,191,36,0.9) 0 4px, transparent 5px), radial-gradient(circle at 18% 40%, rgba(255,255,255,0.8) 0 3px, transparent 4px)',
  opacity: 0.9,
})

export const CelebrationLabel = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 18,
  padding: '8px 14px',
  borderRadius: 999,
  color: '#FDE68A',
  background: 'rgba(251,191,36,0.1)',
  border: '1px solid rgba(251,191,36,0.2)',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
})

export const CelebrationValue = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  color: '#fff',
  fontSize: 'clamp(2.4rem, 8vw, 3.6rem)',
  fontWeight: 900,
  letterSpacing: '-0.06em',
  lineHeight: 0.95,
  marginBottom: 10,

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(2rem, 13vw, 3rem)',
  },
}))

export const CelebrationHint = styled(Box)({
  position: 'relative',
  zIndex: 1,
  color: '#CBD5E1',
  fontSize: 15,
  lineHeight: 1.6,
})
