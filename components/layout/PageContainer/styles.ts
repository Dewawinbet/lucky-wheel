'use client'
import { Box, styled } from '@mui/material'

export const PageRoot = styled(Box)({
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(circle at 15% 10%, rgba(139,92,246,0.15), transparent 32%), radial-gradient(circle at 85% 25%, rgba(236,72,153,0.11), transparent 28%), #080B1A',
})

export const PageContent = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 28px',

  [theme.breakpoints.down('sm')]: {
    padding: '0 18px',
  },
}))
