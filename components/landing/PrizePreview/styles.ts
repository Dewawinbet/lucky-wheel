'use client'

import { Box, styled } from '@mui/material'

export const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '10px 0 88px',
  isolation: 'isolate',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-4%',
    top: 20,
    width: 240,
    height: 240,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34,211,238,0.16), transparent 72%)',
    filter: 'blur(10px)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-4%',
    bottom: 12,
    width: 280,
    height: 280,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(244,114,182,0.16), transparent 72%)',
    filter: 'blur(14px)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '4px 0 64px',
  },
}))

export const SectionHeader = styled(Box)({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  maxWidth: 640,
  margin: '0 auto 40px',
})

export const Cards = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 18,

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: 14,
  },
}))

export const PrizeCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: 188,
  padding: 24,
  borderRadius: 30,
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'grid',
  alignContent: 'space-between',
  gap: 16,
  background:
    'linear-gradient(165deg, rgba(14,19,41,0.95) 0%, rgba(9,12,29,0.88) 100%)',
  boxShadow:
    '0 24px 60px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.06)',
  transition:
    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '0 auto auto 0',
    width: '100%',
    height: 4,
    background: 'linear-gradient(90deg, rgba(255,255,255,0.8), transparent)',
    opacity: 0.8,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: -38,
    top: -38,
    width: 180,
    height: 180,
    borderRadius: '50%',
    opacity: 0.85,
    filter: 'blur(4px)',
    pointerEvents: 'none',
  },

  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: 'rgba(255,255,255,0.14)',
    boxShadow:
      '0 30px 72px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08)',
  },

  '&.angpow': {
    background:
      'linear-gradient(160deg, rgba(9,77,85,0.98) 0%, rgba(7,44,57,0.92) 100%)',
  },

  '&.angpow::after': {
    background: 'radial-gradient(circle, rgba(45,212,191,0.45), transparent 66%)',
  },

  '&.cash-20': {
    background:
      'linear-gradient(160deg, rgba(136,24,78,0.98) 0%, rgba(70,14,46,0.92) 100%)',
  },

  '&.cash-20::after': {
    background: 'radial-gradient(circle, rgba(244,114,182,0.42), transparent 66%)',
  },

  '&.cash-30': {
    background:
      'linear-gradient(160deg, rgba(153,82,12,0.98) 0%, rgba(88,43,6,0.92) 100%)',
  },

  '&.cash-30::after': {
    background: 'radial-gradient(circle, rgba(251,191,36,0.44), transparent 66%)',
  },

  '&.cash-50': {
    background:
      'linear-gradient(160deg, rgba(20,54,150,0.98) 0%, rgba(17,29,90,0.92) 100%)',
  },

  '&.cash-50::after': {
    background: 'radial-gradient(circle, rgba(96,165,250,0.42), transparent 66%)',
  },

  '&.cash-100': {
    background:
      'linear-gradient(160deg, rgba(192,34,92,0.98) 0%, rgba(99,15,51,0.92) 100%)',
  },

  '&.cash-100::after': {
    background: 'radial-gradient(circle, rgba(236,72,153,0.42), transparent 66%)',
  },

  '&.iphone-17-pro-max': {
    background:
      'linear-gradient(160deg, rgba(87,34,173,0.98) 0%, rgba(41,16,90,0.92) 100%)',
  },

  '&.iphone-17-pro-max::after': {
    background: 'radial-gradient(circle, rgba(167,139,250,0.46), transparent 66%)',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 172,
    padding: 20,
    borderRadius: 24,
  },
}))

export const PrizeIcon = styled(Box)({
  width: 58,
  height: 58,
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.14)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',

  '& svg': {
    fontSize: 30,
  },

  '&.angpow': {
    background: 'rgba(45,212,191,0.18)',
  },

  '&.cash-20': {
    background: 'rgba(244,114,182,0.18)',
  },

  '&.cash-30': {
    background: 'rgba(251,191,36,0.18)',
  },

  '&.cash-50': {
    background: 'rgba(96,165,250,0.18)',
  },

  '&.cash-100': {
    background: 'rgba(236,72,153,0.18)',
  },

  '&.iphone-17-pro-max': {
    background: 'rgba(167,139,250,0.18)',
  },
})

export const Probability = styled(Box)({
  marginTop: 5,
  color: '#C7D0E0',
  fontSize: 12,
})
