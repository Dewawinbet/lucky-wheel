'use client'

import { Box, Button, TextField, styled } from '@mui/material'

export const VoucherShell = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 76px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 0 56px',

  [theme.breakpoints.down('sm')]: {
    padding: '20px 0 36px',
  },
}))

export const VoucherCard = styled(Box)(({ theme }) => ({
  width: 'min(100%, 560px)',
  position: 'relative',
  borderRadius: 34,
  padding: '42px 34px 34px',
  textAlign: 'center',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.94) 0%, rgba(8,11,26,0.98) 100%)',
  border: '1px solid rgba(167,139,250,0.2)',
  boxShadow:
    '0 30px 90px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-20% auto auto -10%',
    width: 220,
    height: 220,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.24), transparent 68%)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 'auto -14% -18% auto',
    width: 260,
    height: 260,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 28,
    padding: '28px 18px 22px',
  },
}))

export const VoucherLogo = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 82,
  height: 82,
  marginBottom: 24,
  borderRadius: 24,
  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  boxShadow: '0 16px 42px rgba(139,92,246,0.28)',
})

export const VoucherEyebrow = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 18,
  padding: '8px 14px',
  borderRadius: 999,
  color: '#C4B5FD',
  background: 'rgba(139,92,246,0.1)',
  border: '1px solid rgba(139,92,246,0.22)',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.12em',
})

export const VoucherTitle = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  lineHeight: 1,
  fontWeight: 900,
  letterSpacing: '-0.05em',
  color: '#fff',
  marginBottom: 14,

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(1.8rem, 9vw, 2.5rem)',
  },
}))

export const VoucherDescription = styled(Box)(({ theme }) => ({
  maxWidth: 380,
  margin: '0 auto 28px',
  color: '#A7B0C5',
  fontSize: 16,
  lineHeight: 1.65,

  [theme.breakpoints.down('sm')]: {
    marginBottom: 22,
  },
}))

export const VoucherForm = styled('form')({
  position: 'relative',
  zIndex: 1,
})

export const VoucherInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: 18,

  '& .MuiOutlinedInput-root': {
    borderRadius: 20,
    background: 'rgba(255,255,255,0.03)',
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: '0.34em',
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    paddingRight: 0,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',

    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.1)',
    },

    '&:hover fieldset': {
      borderColor: 'rgba(167,139,250,0.45)',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#A78BFA',
      borderWidth: 1,
    },
  },

  '& .MuiOutlinedInput-input': {
    padding: '22px 24px',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      padding: '18px 18px',
      letterSpacing: '0.24em',
    },
  },

  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(255,255,255,0.22)',
    opacity: 1,
    letterSpacing: '0.24em',
  },
}))

export const VoucherButton = styled(Button)({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: 320,
  minWidth: 220,
  minHeight: 58,
  borderRadius: 18,
  color: '#fff',
  fontSize: 15,
  fontWeight: 900,
  letterSpacing: '0.08em',
  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  boxShadow: '0 14px 40px rgba(139,92,246,0.28)',
  cursor: 'pointer',
  userSelect: 'none',

  '&:hover': {
    background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
  },

  '&.Mui-disabled': {
    pointerEvents: 'none',
  },
})

export const VerifyOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 5,
  display: 'grid',
  placeItems: 'center',
  padding: 24,
  background:
    'linear-gradient(180deg, rgba(10,14,30,0.82) 0%, rgba(8,11,26,0.9) 100%)',
  backdropFilter: 'blur(10px)',
})

export const VerifyPanel = styled(Box)({
  width: 'min(100%, 320px)',
  display: 'grid',
  justifyItems: 'center',
  gap: 14,
  padding: '24px 22px',
  borderRadius: 24,
  background:
    'linear-gradient(180deg, rgba(20,26,50,0.96) 0%, rgba(10,14,30,0.98) 100%)',
  border: '1px solid rgba(167,139,250,0.24)',
  boxShadow:
    '0 26px 60px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.06)',
  textAlign: 'center',
})

export const VerifySpinner = styled(Box)({
  position: 'relative',
  width: 88,
  height: 88,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'conic-gradient(from 0deg, rgba(139,92,246,0.12), rgba(236,72,153,0.9), rgba(251,191,36,0.92), rgba(59,130,246,0.84), rgba(139,92,246,0.12))',
  animation: 'voucherSpin 1.15s linear infinite',
  boxShadow:
    '0 0 24px rgba(236,72,153,0.16), 0 0 44px rgba(139,92,246,0.18)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 8,
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #141c35 0%, #0b1123 100%)',
  },

  '@keyframes voucherSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
})

export const VerifySpinnerCore = styled(Box)({
  position: 'relative',
  zIndex: 1,
  width: 54,
  height: 54,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(circle at 30% 30%, #fff6d1 0%, #f3be49 30%, #cb7f13 62%, #7b4205 100%)',
  boxShadow:
    'inset 0 2px 2px rgba(255,255,255,0.45), inset 0 -8px 14px rgba(102,50,0,0.34)',
})

export const VerifyLabel = styled(Box)({
  color: '#C4B5FD',
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
})

export const VerifyTitle = styled(Box)({
  color: '#fff',
  fontSize: 24,
  fontWeight: 900,
  letterSpacing: '-0.04em',
  lineHeight: 1,
})

export const VerifyText = styled(Box)({
  color: '#9FA9C3',
  fontSize: 14,
  lineHeight: 1.65,
  maxWidth: 260,
})
