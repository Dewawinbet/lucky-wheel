'use client'

import { Box, styled } from '@mui/material'

export const ResultCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 32,
  padding: '24px 22px',
  background:
    'linear-gradient(160deg, var(--prize-card-start, rgba(31,19,64,0.98)) 0%, var(--prize-card-mid, rgba(22,18,52,0.96)) 40%, var(--prize-card-end, rgba(42,14,44,0.97)) 100%)',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow:
    '0 28px 90px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -24px 48px rgba(255,99,164,0.08)',
  overflow: 'hidden',
  transform: 'translateY(-4px)',

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
    padding: '20px 16px',
    transform: 'none',
  },
}))

export const ResultAccent = styled(Box)({
  position: 'absolute',
  inset: 'auto -18% -28% auto',
  width: 260,
  height: 260,
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(255,215,90,0.24) 0%, var(--prize-glow, rgba(236,72,153,0.2)) 42%, transparent 72%)',
  pointerEvents: 'none',
})

export const ResultBurst = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: 14,
  right: 16,
  fontSize: 52,
  lineHeight: 1,
  transform: 'rotate(8deg)',
  filter: 'drop-shadow(0 12px 26px rgba(0,0,0,0.24))',
  opacity: 0.96,
  pointerEvents: 'none',

  [theme.breakpoints.down('sm')]: {
    top: 12,
    right: 12,
    fontSize: 38,
  },
}))

export const ResultBadgeRow = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  marginBottom: 18,

  [theme.breakpoints.down('sm')]: {
    gap: 8,
    marginBottom: 16,
  },
}))

export const ResultEyebrow = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 14px',
  borderRadius: 999,
  color: '#F4D9FF',
  background: 'linear-gradient(180deg, rgba(167,139,250,0.18), rgba(236,72,153,0.1))',
  border: '1px solid rgba(255,255,255,0.14)',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.12em',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
})

export const ResultValue = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  width: 'fit-content',
  marginTop: 4,
  padding: '12px 18px',
  borderRadius: 18,
  color: '#FFF8D6',
  background:
    'linear-gradient(135deg, var(--prize-value-start, rgba(255,220,116,0.22)), var(--prize-value-end, rgba(255,122,188,0.16)) 100%)',
  border: '1px solid rgba(255,229,156,0.24)',
  fontSize: 'clamp(1.45rem, 3vw, 2.05rem)',
  fontWeight: 900,
  letterSpacing: '-0.04em',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.12), 0 14px 34px rgba(0,0,0,0.18)',
})

export const ResultHero = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: '84px minmax(0, 1fr)',
  alignItems: 'center',
  gap: 18,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '72px minmax(0, 1fr)',
    gap: 14,
  },
}))

export const ResultIconWrap = styled(Box)(({ theme }) => ({
  width: 84,
  height: 84,
  borderRadius: 24,
  display: 'grid',
  placeItems: 'center',
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.18), var(--prize-badge, rgba(167,139,250,0.22)))',
  border: '1px solid rgba(255,255,255,0.14)',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.18), 0 18px 32px rgba(0,0,0,0.18)',

  '& svg': {
    width: 64,
    height: 64,
  },

  [theme.breakpoints.down('sm')]: {
    width: 72,
    height: 72,
    borderRadius: 20,

    '& svg': {
      width: 56,
      height: 56,
    },
  },
}))

export const ResultAmountRow = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
})

export const ResultHint = styled(Box)({
  position: 'relative',
  zIndex: 1,
  marginTop: 16,
  color: '#D9E1F0',
  fontSize: 14,
  lineHeight: 1.65,
})
