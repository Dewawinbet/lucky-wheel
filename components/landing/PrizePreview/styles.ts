'use client'
import { Box, styled } from '@mui/material'

export const Section = styled(Box)({
  padding: '40px 0 80px',
})

export const SectionHeader = styled(Box)({
  textAlign: 'center',
  maxWidth: 600,
  margin: '0 auto 38px',
})

export const Cards = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: 14,

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 10,
  },
}))

export const PrizeCard = styled(Box)({
  minHeight: 150,
  padding: 20,
  borderRadius: 20,
  border: '1px solid rgba(255,255,255,0.07)',
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  transition: 'transform 0.25s ease, border-color 0.25s ease',

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(139,92,246,0.35)',
  },
})

export const PrizeIcon = styled(Box)({
  width: 48,
  height: 48,
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 12,
  background: 'rgba(139,92,246,0.13)',
  color: '#A78BFA',
})

export const Probability = styled(Box)({
  marginTop: 5,
  color: '#737D96',
  fontSize: 12,
})
