'use client'

import { Box, styled } from '@mui/material'

export const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '30px 0 86px',
  isolation: 'isolate',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -12,
    left: '-8%',
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,95,162,0.22), transparent 70%)',
    filter: 'blur(10px)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-6%',
    bottom: -18,
    width: 340,
    height: 340,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(66,214,255,0.18), transparent 68%)',
    filter: 'blur(16px)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '18px 0 64px',
  },
}))

export const SectionHeader = styled(Box)({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  maxWidth: 700,
  margin: '0 auto 40px',
})

export const Cards = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 22,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: 14,
  },
}))

export const WinnerCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: 212,
  padding: 26,
  borderRadius: 32,
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.1)',
  background:
    'linear-gradient(160deg, rgba(20,24,52,0.98) 0%, rgba(11,15,34,0.95) 45%, rgba(30,14,40,0.96) 100%)',
  boxShadow:
    '0 28px 80px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -18px 34px rgba(8,10,24,0.24)',
  transition:
    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '0 0 auto 0',
    height: 5,
    background: 'linear-gradient(90deg, #FFD66B 0%, #FF5C9F 28%, #8E6BFF 62%, #39E6D4 100%)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 1,
    borderRadius: 31,
    background:
      'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 34%, transparent 58%)',
    opacity: 0.9,
    pointerEvents: 'none',
  },

  '& > *': {
    position: 'relative',
    zIndex: 1,
  },

  '& .winner-orb': {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(2px)',
    opacity: 0.9,
    pointerEvents: 'none',
  },

  '& .winner-burst': {
    position: 'absolute',
    top: 20,
    right: 22,
    zIndex: 1,
    fontSize: 34,
    lineHeight: 1,
    transform: 'rotate(8deg)',
    filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.18))',
    opacity: 0.92,
    pointerEvents: 'none',
  },

  '& .winner-orb-1': {
    top: 16,
    right: 18,
    width: 72,
    height: 72,
  },

  '& .winner-orb-2': {
    right: 38,
    bottom: 18,
    width: 96,
    height: 96,
    opacity: 0.68,
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.01)',
    borderColor: 'rgba(255,255,255,0.18)',
    boxShadow:
      '0 34px 88px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px rgba(255,97,160,0.12)',
  },

  '&:nth-of-type(6n + 1)': {
    background:
      'linear-gradient(160deg, #2B1A7A 0%, #6A3CFF 42%, #C86BFF 100%)',
  },

  '&:nth-of-type(6n + 2)': {
    background:
      'linear-gradient(160deg, #4A0B58 0%, #E43696 44%, #FF8BC4 100%)',
  },

  '&:nth-of-type(6n + 3)': {
    background:
      'linear-gradient(160deg, #0B3268 0%, #1494FF 44%, #6EE7FF 100%)',
  },

  '&:nth-of-type(6n + 4)': {
    background:
      'linear-gradient(160deg, #5A2300 0%, #FF9821 46%, #FFD76A 100%)',
  },

  '&:nth-of-type(6n + 5)': {
    background:
      'linear-gradient(160deg, #005E5D 0%, #18D7C7 42%, #9EFFF1 100%)',
  },

  '&:nth-of-type(6n + 6)': {
    background:
      'linear-gradient(160deg, #4B145D 0%, #9A36F0 42%, #FF7EDB 100%)',
  },

  '&:nth-of-type(6n + 1) .winner-orb-1': {
    background: 'radial-gradient(circle, rgba(255,213,92,0.95), rgba(255,102,156,0.16) 62%, transparent 76%)',
  },

  '&:nth-of-type(6n + 1) .winner-orb-2': {
    background: 'radial-gradient(circle, rgba(57,230,212,0.4), transparent 70%)',
  },

  '&:nth-of-type(6n + 2) .winner-orb-1': {
    background: 'radial-gradient(circle, rgba(142,107,255,0.92), rgba(255,255,255,0.12) 58%, transparent 76%)',
  },

  '&:nth-of-type(6n + 2) .winner-orb-2': {
    background: 'radial-gradient(circle, rgba(255,95,162,0.36), transparent 72%)',
  },

  '&:nth-of-type(6n + 3) .winner-orb-1': {
    background: 'radial-gradient(circle, rgba(66,214,255,0.92), rgba(255,255,255,0.12) 58%, transparent 76%)',
  },

  '&:nth-of-type(6n + 3) .winner-orb-2': {
    background: 'radial-gradient(circle, rgba(255,213,92,0.28), transparent 72%)',
  },

  '&:nth-of-type(6n + 4) .winner-orb-1': {
    background: 'radial-gradient(circle, rgba(255,95,162,0.88), rgba(255,255,255,0.1) 58%, transparent 76%)',
  },

  '&:nth-of-type(6n + 4) .winner-orb-2': {
    background: 'radial-gradient(circle, rgba(142,107,255,0.32), transparent 72%)',
  },

  '&:nth-of-type(6n + 5) .winner-orb-1': {
    background: 'radial-gradient(circle, rgba(57,230,212,0.9), rgba(255,255,255,0.12) 58%, transparent 76%)',
  },

  '&:nth-of-type(6n + 5) .winner-orb-2': {
    background: 'radial-gradient(circle, rgba(66,214,255,0.3), transparent 72%)',
  },

  '&:nth-of-type(6n + 6) .winner-orb-1': {
    background: 'radial-gradient(circle, rgba(255,213,92,0.94), rgba(255,255,255,0.12) 58%, transparent 76%)',
  },

  '&:nth-of-type(6n + 6) .winner-orb-2': {
    background: 'radial-gradient(circle, rgba(255,95,162,0.3), transparent 72%)',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    padding: 20,
    borderRadius: 24,

    '& .winner-burst': {
      top: 18,
      right: 18,
      fontSize: 28,
    },
  },
}))

export const WinnerMark = styled(Box)({
  width: 58,
  height: 58,
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 16,
  background:
    'linear-gradient(145deg, rgba(255,214,107,0.28), rgba(255,95,162,0.22) 52%, rgba(57,230,212,0.14) 100%)',
  color: '#F8FAFC',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.24), 0 14px 30px rgba(13,18,39,0.34)',
})

export const MetaRow = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 18,
  padding: '9px 13px',
  borderRadius: 999,
  color: '#EEF3FB',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.02em',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
})

export const EmptyState = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  borderRadius: 30,
  padding: '34px 28px',
  textAlign: 'center',
  overflow: 'hidden',
  background:
    'linear-gradient(165deg, rgba(17,22,42,0.88) 0%, rgba(10,12,28,0.96) 100%)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 24px 70px rgba(0,0,0,0.24)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-30% auto auto -8%',
    width: 240,
    height: 240,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(167,139,250,0.18), transparent 70%)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-6%',
    bottom: '-20%',
    width: 220,
    height: 220,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(45,212,191,0.12), transparent 70%)',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
    padding: '28px 18px',
  },
}))
