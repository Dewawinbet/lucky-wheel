'use client'
import Link from 'next/link'
import { Box, styled } from '@mui/material'

export const HeaderRoot = styled(Box)({
  width: '100%',
  position: 'relative',
  zIndex: 10,
  isolation: 'isolate',
  overflow: 'hidden',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  background:
    'linear-gradient(180deg, rgba(8,11,26,0.96) 0%, rgba(8,11,26,0.94) 100%)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  boxShadow: '0 10px 28px rgba(0,0,0,0.18)',
})

export const HeaderInner = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  minHeight: 76,
  margin: '0 auto',
  padding: '0 28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 14,

  [theme.breakpoints.down('sm')]: {
    minHeight: 68,
    padding: '0 18px',
    gap: 10,
  },
}))

export const Brand = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 11,
  fontSize: 20,
  fontWeight: 800,
  letterSpacing: '-0.03em',
})

export const BrandLink = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 11,
  textDecoration: 'none',
})

export const BrandMark = styled(Box)({
  width: 34,
  height: 34,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HeaderAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  color: theme.palette.text.secondary,
  fontSize: 14,
  fontWeight: 600,

  [theme.breakpoints.down('sm')]: {
    gap: 6,
    flexShrink: 0,
  },
}))

export const PoweredBy = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,

  [theme.breakpoints.down('sm')]: {
    gap: 6,
  },
}))

export const PoweredLabel = styled('span')(({ theme }) => ({
  color: '#717B94',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',

  [theme.breakpoints.down('sm')]: {
    fontSize: 9,
    letterSpacing: '0.1em',
  },
}))

export const PoweredBrand = styled('span')(({ theme }) => ({
  color: '#F8FAFC',
  fontSize: 14,
  fontWeight: 800,
  letterSpacing: '-0.02em',

  [theme.breakpoints.down('sm')]: {
    fontSize: 11,
  },
}))
