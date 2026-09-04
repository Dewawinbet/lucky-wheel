'use client'

import { Box, styled } from '@mui/material'

export const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 12,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}))

export const ItemCard = styled(Box)({
  minHeight: 98,
  padding: 15,
  borderRadius: 20,
  border: '1px solid rgba(255,255,255,0.1)',
  background:
    'linear-gradient(155deg, var(--prize-card-start, rgba(20,22,48,0.96)) 0%, var(--prize-card-mid, rgba(28,17,50,0.94)) 52%, var(--prize-card-end, rgba(13,18,38,0.95)) 100%)',
  boxShadow: '0 16px 36px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
  overflow: 'hidden',

  '&[data-active="true"]': {
    borderColor: 'rgba(255,215,90,0.38)',
    boxShadow:
      '0 18px 40px rgba(0,0,0,0.24), 0 0 28px var(--prize-glow, rgba(255,111,170,0.14)), inset 0 1px 0 rgba(255,255,255,0.08)',
    transform: 'translateY(-3px)',
  },

  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
})

export const ItemIcon = styled(Box)({
  width: 42,
  height: 42,
  borderRadius: 14,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.18), var(--prize-badge, rgba(139,92,246,0.14)))',
  color: '#F6D36F',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',

  '& svg': {
    width: 32,
    height: 32,
  },

  '&[data-active="true"]': {
    background:
      'linear-gradient(145deg, rgba(255,255,255,0.24), var(--prize-badge, rgba(255,102,163,0.18)))',
    color: '#FFF0A8',
  },
})
