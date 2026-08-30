'use client'

import { Box, styled } from '@mui/material'

export const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 10,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}))

export const ItemCard = styled(Box)({
  minHeight: 92,
  padding: 14,
  borderRadius: 18,
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))',
  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',

  '&[data-active="true"]': {
    borderColor: 'rgba(167,139,250,0.48)',
    boxShadow: '0 10px 28px rgba(139,92,246,0.16)',
    transform: 'translateY(-2px)',
  },
})

export const ItemIcon = styled(Box)({
  width: 38,
  height: 38,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  background: 'rgba(139,92,246,0.12)',
  color: '#A78BFA',

  '&[data-active="true"]': {
    background: 'rgba(236,72,153,0.18)',
    color: '#F9A8D4',
  },
})
