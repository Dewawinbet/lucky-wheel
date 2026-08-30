'use client'

import { Box, styled } from '@mui/material'

export const Section = styled(Box)({
  padding: '24px 0 72px',
})

export const SectionHeader = styled(Box)({
  textAlign: 'center',
  maxWidth: 640,
  margin: '0 auto 34px',
})

export const Cards = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 16,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const WinnerCard = styled(Box)(({ theme }) => ({
  minHeight: 184,
  padding: 24,
  borderRadius: 26,
  border: '1px solid rgba(255,255,255,0.07)',
  background:
    'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.018) 65%)',
  boxShadow: '0 18px 44px rgba(0,0,0,0.22)',

  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    padding: 20,
  },
}))

export const WinnerMark = styled(Box)({
  width: 46,
  height: 46,
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 16,
  background: 'rgba(139,92,246,0.13)',
  color: '#C4B5FD',
})

export const MetaRow = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  marginTop: 18,
  color: '#A7B0C5',
  fontSize: 13,
  fontWeight: 600,
})

export const EmptyState = styled(Box)({
  borderRadius: 28,
  padding: '28px 24px',
  textAlign: 'center',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.72) 0%, rgba(8,11,26,0.9) 100%)',
  border: '1px solid rgba(255,255,255,0.08)',
})
