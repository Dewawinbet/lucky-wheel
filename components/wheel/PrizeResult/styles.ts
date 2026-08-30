'use client'

import { Box, styled } from '@mui/material'

export const ResultCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 30,
  padding: '22px 20px',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.94) 0%, rgba(8,11,26,0.98) 100%)',
  border: '1px solid rgba(167,139,250,0.16)',
  boxShadow: '0 24px 70px rgba(0,0,0,0.3)',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
    padding: '20px 16px',
  },
}))

export const ResultAccent = styled(Box)({
  position: 'absolute',
  inset: 'auto -18% -30% auto',
  width: 220,
  height: 220,
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)',
  pointerEvents: 'none',
})

export const ResultEyebrow = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 14px',
  borderRadius: 999,
  color: '#C4B5FD',
  background: 'rgba(139,92,246,0.1)',
  border: '1px solid rgba(139,92,246,0.22)',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.12em',
  marginBottom: 18,
})

export const ResultValue = styled(Box)({
  position: 'relative',
  zIndex: 1,
  color: '#F8FAFC',
  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
  fontWeight: 800,
  letterSpacing: '-0.04em',
})

export const ResultHint = styled(Box)({
  position: 'relative',
  zIndex: 1,
  marginTop: 16,
  color: '#A7B0C5',
  fontSize: 14,
  lineHeight: 1.65,
})
