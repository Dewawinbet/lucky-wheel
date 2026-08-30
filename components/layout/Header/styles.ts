'use client'
import Link from 'next/link'
import { Box, styled } from '@mui/material'

export const HeaderRoot = styled(Box)({
  width: '100%',
  position: 'relative',
  zIndex: 10,
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  background: 'rgba(8,11,26,0.72)',
  backdropFilter: 'blur(18px)',
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

  [theme.breakpoints.down('sm')]: {
    minHeight: 68,
    padding: '0 18px',
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
  width: 38,
  height: 38,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  boxShadow: '0 8px 30px rgba(139,92,246,0.28)',
})

export const HeaderAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  color: theme.palette.text.secondary,
  fontSize: 14,
  fontWeight: 600,

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const PoweredBy = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
})

export const PoweredLabel = styled('span')({
  color: '#717B94',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
})

export const PoweredBrand = styled('span')({
  color: '#F8FAFC',
  fontSize: 14,
  fontWeight: 800,
  letterSpacing: '-0.02em',
})
