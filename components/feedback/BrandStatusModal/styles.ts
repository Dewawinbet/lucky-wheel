'use client'

import { Box, Button, styled } from '@mui/material'

export const StatusBackdrop = styled(Box)({
  position: 'fixed',
  inset: 0,
  zIndex: 1300,
  display: 'grid',
  placeItems: 'center',
  padding: 20,
  background: 'rgba(6, 10, 24, 0.58)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
})

export const StatusCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'min(100%, 430px)',
  display: 'grid',
  justifyItems: 'center',
  gap: 14,
  padding: '30px 26px 24px',
  borderRadius: 30,
  overflow: 'hidden',
  textAlign: 'center',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.98) 0%, rgba(9,12,28,1) 100%)',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow: '0 34px 100px rgba(0,0,0,0.44)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-16% auto auto 50%',
    transform: 'translateX(-50%)',
    width: 280,
    height: 180,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(255,215,90,0.2) 0%, rgba(236,72,153,0.16) 42%, transparent 74%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '26px 18px 20px',
    borderRadius: 24,
  },
}))

export const StatusLogo = styled(Box)({
  position: 'relative',
  zIndex: 1,
  width: 84,
  height: 84,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(circle at 30% 30%, #FFF6D0 0%, #F3BE49 30%, #CB7F13 62%, #7B4205 100%)',
  boxShadow:
    'inset 0 2px 2px rgba(255,255,255,0.45), inset 0 -10px 16px rgba(102,50,0,0.34), 0 18px 40px rgba(0,0,0,0.24)',
})

export const StatusEyebrow = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 14px',
  borderRadius: 999,
  color: '#FDE68A',
  background: 'rgba(251,191,36,0.1)',
  border: '1px solid rgba(251,191,36,0.22)',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
})

export const StatusTitle = styled(Box)({
  position: 'relative',
  zIndex: 1,
  color: '#FFFFFF',
  fontSize: 'clamp(1.8rem, 5vw, 2.35rem)',
  lineHeight: 0.96,
  fontWeight: 900,
  letterSpacing: '-0.05em',
})

export const StatusText = styled(Box)({
  position: 'relative',
  zIndex: 1,
  color: '#CBD5E1',
  fontSize: 15,
  lineHeight: 1.65,
  maxWidth: 320,
})

export const StatusAction = styled(Button)({
  minWidth: 164,
  minHeight: 50,
  borderRadius: 16,
  color: '#fff',
  fontSize: 14,
  fontWeight: 900,
  letterSpacing: '0.08em',
  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  boxShadow: '0 14px 40px rgba(139,92,246,0.24)',

  '&:hover': {
    background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
  },
})
