'use client'

import { Box, styled } from '@mui/material'

export const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '8px 0 58px',
  isolation: 'isolate',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-5%',
    top: 10,
    width: 280,
    height: 280,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.14), transparent 72%)',
    filter: 'blur(14px)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-4%',
    bottom: 0,
    width: 280,
    height: 280,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251,191,36,0.14), transparent 72%)',
    filter: 'blur(16px)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0 0 44px',
  },
}))

export const Steps = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 20,
  marginTop: 42,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const Step = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: 230,
  padding: '28px 26px 24px',
  borderRadius: 30,
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.08)',
  background:
    'linear-gradient(165deg, rgba(12,17,39,0.96) 0%, rgba(8,11,26,0.92) 100%)',
  boxShadow:
    '0 24px 64px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -70,
    right: -40,
    width: 180,
    height: 180,
    borderRadius: '50%',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    opacity: 0.95,
  },

  '&:nth-of-type(1)::before': {
    background: 'radial-gradient(circle, rgba(59,130,246,0.32), transparent 66%)',
  },

  '&:nth-of-type(1)::after': {
    background: 'linear-gradient(90deg, #60A5FA 0%, #8B5CF6 100%)',
  },

  '&:nth-of-type(2)::before': {
    background: 'radial-gradient(circle, rgba(45,212,191,0.3), transparent 66%)',
  },

  '&:nth-of-type(2)::after': {
    background: 'linear-gradient(90deg, #2DD4BF 0%, #38BDF8 100%)',
  },

  '&:nth-of-type(3)::before': {
    background: 'radial-gradient(circle, rgba(244,114,182,0.3), transparent 66%)',
  },

  '&:nth-of-type(3)::after': {
    background: 'linear-gradient(90deg, #F472B6 0%, #F59E0B 100%)',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    padding: '24px 20px 20px',
    borderRadius: 24,
  },
}))

export const StepNumber = styled(Box)({
  width: 50,
  height: 50,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#F8FAFC',
  fontWeight: 900,
  letterSpacing: '0.08em',
  marginBottom: 20,
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14)',
})

export const IconBox = styled(Box)({
  position: 'absolute',
  right: 22,
  top: 22,
  width: 58,
  height: 58,
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  background:
    'linear-gradient(145deg, rgba(167,139,250,0.24), rgba(45,212,191,0.12))',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',

  '& svg': {
    fontSize: 28,
  },
})
