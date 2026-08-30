'use client'
import { Box, styled } from '@mui/material'

export const Section = styled(Box)({
  padding: '30px 0 50px',
})

export const Steps = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 18,
  marginTop: 38,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const Step = styled(Box)({
  position: 'relative',
  padding: 26,
  borderRadius: 22,
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)',
})

export const StepNumber = styled(Box)({
  width: 42,
  height: 42,
  borderRadius: 13,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(139,92,246,0.13)',
  color: '#A78BFA',
  fontWeight: 800,
  marginBottom: 20,
})

export const IconBox = styled(Box)({
  position: 'absolute',
  right: 24,
  top: 24,
  color: 'rgba(167,139,250,0.5)',
})
