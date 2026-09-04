'use client'

import { Box, styled } from '@mui/material'

export const SpinShell = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 76px - 88px)',
  display: 'grid',
  gap: 18,
  padding: '10px 0 18px',

  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    gap: 14,
    padding: '8px 0 16px',
  },
}))

export const SpinFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 40,
  padding: '4px 26px 18px',
  background:
    'linear-gradient(180deg, rgba(10,14,30,0.82) 0%, rgba(6,9,20,0.9) 100%)',
  border: '1px solid rgba(255,255,255,0.05)',
  boxShadow:
    '0 30px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04)',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -140,
    left: -80,
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 72%)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: -120,
    bottom: -140,
    width: 360,
    height: 360,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.03), transparent 74%)',
    pointerEvents: 'none',
  },

  '& > *': {
    position: 'relative',
    zIndex: 1,
  },

  '&:before, &:after': {
    mixBlendMode: 'screen',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 28,
    padding: '16px 14px 14px',
  },
}))

export const SpinStage = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  justifyItems: 'center',
})

export const WheelZone = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  justifyItems: 'center',
  width: '100%',
  padding: '2px 0 0',
  cursor: 'pointer',
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
  userSelect: 'none',
  gap: 10,

  [theme.breakpoints.down('sm')]: {
    gap: 12,
  },
}))

export const BurstRing = styled(Box)({
  position: 'absolute',
  inset: '50% auto auto 50%',
  width: 'min(54vw, 60vh, 560px)',
  aspectRatio: '1',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%) scale(var(--burst-scale, 0.78))',
  opacity: 'var(--burst-opacity, 0)',
  border: '2px solid rgba(251,191,36,0.55)',
  boxShadow: '0 0 34px rgba(251,191,36,0.24)',
  pointerEvents: 'none',

  '@media (max-width: 600px)': {
    width: 'min(86vw, 52vh, 360px)',
  },
})

export const ActionCluster = styled(Box)({
  width: '100%',
  display: 'grid',
  justifyItems: 'center',
  gap: 8,
  marginTop: -18,
  pointerEvents: 'none',

  '& > *': {
    pointerEvents: 'auto',
  },
})

export const StageHint = styled(Box)({
  color: '#7F8AA5',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.02em',
  textAlign: 'center',
  marginTop: -2,
})

export const StageFooter = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  justifyItems: 'center',
  minHeight: 24,
  marginTop: 8,
})

export const ResultGrid = styled(Box)({
  position: 'relative',
  display: 'grid',
  justifyItems: 'center',
  isolation: 'isolate',
  overflow: 'hidden',
})

export const ResultPanelWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  width: '100%',
  maxWidth: 1160,
  gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 390px)',
  gap: 18,
  alignItems: 'start',
  padding: '8px 0 10px',
  isolation: 'isolate',
  overflow: 'hidden',

  '& > :first-of-type': {
    gridColumn: 2,
  },

  '& > :last-of-type': {
    gridColumn: 1,
    gridRow: 1,
  },

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    gap: 14,
    padding: '4px 0 8px',

    '& > :first-of-type': {
      gridColumn: 'auto',
    },

    '& > :last-of-type': {
      gridColumn: 'auto',
      gridRow: 'auto',
    },
  },
}))

export const RevealPlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1160,
  justifySelf: 'center',
  borderRadius: 30,
  padding: '22px 22px',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.82) 0%, rgba(8,11,26,0.94) 100%)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 24px 70px rgba(0,0,0,0.24)',
  color: '#A7B0C5',

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
    padding: '18px 14px',
  },
}))
