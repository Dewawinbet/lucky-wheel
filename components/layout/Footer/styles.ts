'use client'
import { Box, styled } from '@mui/material'

export const FooterRoot = styled(Box)({
  width: '100%',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  padding: '28px 0',
  marginTop: 60,
})

export const FooterInner = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
  fontSize: 13,

  [theme.breakpoints.down('sm')]: {
    padding: '0 18px',
    flexDirection: 'column',
    gap: 10,
    textAlign: 'center',
  },
}))

export const FooterBrand = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: 4,
  color: theme.palette.text.secondary,
}))

export const FooterPowered = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: '#A7B0C5',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})

export const FooterPoweredLogo = styled('span')(({ theme }) => ({
  position: 'relative',
  width: 100,
  height: 20,
  display: 'inline-block',
  flexShrink: 0,

  [theme.breakpoints.down('sm')]: {
    width: 88,
    height: 18,
  },

  '& img': {
    objectFit: 'contain',
  },
}))
