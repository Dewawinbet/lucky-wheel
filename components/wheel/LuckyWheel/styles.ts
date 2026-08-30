'use client'

import { Box, Chip, styled } from '@mui/material'

export const SpinShell = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 76px - 88px)',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.9fr) minmax(320px, 420px)',
  gap: 22,
  alignItems: 'start',
  padding: '14px 0 20px',

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    gap: 14,
    padding: '12px 0 20px',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    padding: '12px 0 22px',
  },
}))

export const SpinStage = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 36,
  padding: '18px 18px 16px',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.92) 0%, rgba(8,11,26,0.98) 100%)',
  border: '1px solid rgba(167,139,250,0.16)',
  boxShadow:
    '0 30px 90px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.06)',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -120,
    left: -60,
    width: 260,
    height: 260,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.22), transparent 72%)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: -90,
    bottom: -120,
    width: 280,
    height: 280,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236,72,153,0.16), transparent 74%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 28,
    padding: '16px 12px 14px',
  },
}))

export const StageTop = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 14,
  marginBottom: 8,

  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: 12,
  },
}))

export const Eyebrow = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 14px',
  borderRadius: 999,
  color: '#C4B5FD',
  background: 'rgba(139,92,246,0.1)',
  border: '1px solid rgba(139,92,246,0.22)',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.12em',
  marginBottom: 10,
})

export const VoucherChip = styled(Chip)({
  height: 34,
  borderRadius: 999,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#fff',
  fontWeight: 800,
  letterSpacing: '0.12em',

  '& .MuiChip-label': {
    paddingInline: 14,
  },
})

export const Title = styled(Box)(({ theme }) => ({
  maxWidth: 540,
  color: '#fff',
  fontSize: 'clamp(2rem, 3vw + 1rem, 3.9rem)',
  lineHeight: 0.9,
  fontWeight: 900,
  letterSpacing: '-0.06em',
  marginBottom: 8,

  '& span': {
    background: 'linear-gradient(90deg, #A78BFA 0%, #F472B6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(2rem, 10vw, 3rem)',
  },
}))

export const Description = styled(Box)(({ theme }) => ({
  maxWidth: 560,
  color: '#A7B0C5',
  fontSize: 15,
  lineHeight: 1.5,

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}))

export const WheelZone = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  placeItems: 'center',
  padding: '0 0 4px',
  cursor: 'pointer',
  touchAction: 'manipulation',

  [theme.breakpoints.down('sm')]: {
    paddingTop: 2,
  },
}))

export const WheelGlow = styled(Box)({
  position: 'absolute',
  inset: '12% 14%',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(139,92,246,0.28), rgba(236,72,153,0.14) 48%, transparent 72%)',
  filter: 'blur(28px)',
  pointerEvents: 'none',
})

export const WheelDisc = styled(Box)(({ theme }) => ({
  '--wheel-rotation': '0deg',
  '--wheel-burst-scale': 1,
  '--wheel-burst-shadow': '0 0 0 5px rgba(255,255,255,0.06), 0 28px 70px rgba(0,0,0,0.42), 0 0 80px rgba(139,92,246,0.18)',
  position: 'relative',
  width: 'min(40vw, 44vh, 380px, 100%)',
  aspectRatio: '1',
  borderRadius: '50%',
  border: '14px solid rgba(255,255,255,0.9)',
  background:
    'conic-gradient(from -30deg, #8B5CF6 0deg 60deg, #EC4899 60deg 120deg, #F59E0B 120deg 180deg, #6366F1 180deg 240deg, #F43F5E 240deg 300deg, #14B8A6 300deg 360deg)',
  boxShadow: 'var(--wheel-burst-shadow)',
  transform: 'rotate(var(--wheel-rotation)) scale(var(--wheel-burst-scale))',
  transition: 'transform 5.6s cubic-bezier(0.12, 0.9, 0.18, 1)',
  overflow: 'hidden',
  cursor: 'inherit',

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    background:
      'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.28), transparent 24%, transparent 60%, rgba(0,0,0,0.14))',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'min(72vw, 34vh, 280px, 100%)',
    borderWidth: 10,
  },
}))

export const WheelLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 114,
  transform:
    'translate(-50%, -50%) rotate(var(--angle)) translateY(-114px) rotate(calc(var(--angle) * -1))',
  color: '#fff',
  textAlign: 'center',
  textShadow: '0 2px 10px rgba(0,0,0,0.38)',
  fontWeight: 900,
  fontSize: 'clamp(15px, 1.8vw, 20px)',
  lineHeight: 1.1,
  letterSpacing: '-0.03em',
  pointerEvents: 'none',

  '&.iphone': {
    width: 124,
    fontSize: 'clamp(11px, 1.35vw, 15px)',
    transform:
      'translate(-50%, -50%) rotate(var(--angle)) translateY(-102px) rotate(calc(var(--angle) * -1))',
  },

  '&.angpow': {
    fontSize: 'clamp(13px, 1.6vw, 18px)',
  },

  [theme.breakpoints.down('sm')]: {
    width: 78,
    fontSize: 11,
    transform:
      'translate(-50%, -50%) rotate(var(--angle)) translateY(-76px) rotate(calc(var(--angle) * -1))',

    '&.iphone': {
      width: 84,
      fontSize: 9,
      transform:
        'translate(-50%, -50%) rotate(var(--angle)) translateY(-66px) rotate(calc(var(--angle) * -1))',
    },
  },
}))

export const WheelHub = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: '50% auto auto 50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #fff, #E2E8F0)',
  border: '8px solid rgba(8,11,26,0.84)',
  boxShadow: '0 10px 28px rgba(0,0,0,0.32)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

  [theme.breakpoints.down('sm')]: {
    width: 62,
    height: 62,
    borderWidth: 6,
  },
}))

export const BurstRing = styled(Box)({
  position: 'absolute',
  inset: '50% auto auto 50%',
  width: 'min(46vw, 50vh, 450px)',
  aspectRatio: '1',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%) scale(var(--burst-scale, 0.78))',
  opacity: 'var(--burst-opacity, 0)',
  border: '2px solid rgba(251,191,36,0.55)',
  boxShadow: '0 0 34px rgba(251,191,36,0.24)',
  pointerEvents: 'none',

  '@media (max-width: 600px)': {
    width: 'min(82vw, 40vh, 330px)',
  },
})

export const HubValue = styled(Box)(({ theme }) => ({
  color: '#7C3AED',
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: '0.14em',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: 8,
  },
}))

export const StageFooter = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 18,
  marginTop: 6,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 12,
  },
}))

export const FooterMeta = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: 6,
  color: '#A7B0C5',
  fontSize: 14,
  lineHeight: 1.6,

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

export const ResultPanelWrap = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: 10,
  alignContent: 'start',
  position: 'sticky',
  top: 84,

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    position: 'static',
  },
}))

export const RevealPlaceholder = styled(Box)(({ theme }) => ({
  borderRadius: 30,
  padding: '18px 18px',
  background:
    'linear-gradient(180deg, rgba(17,22,42,0.82) 0%, rgba(8,11,26,0.94) 100%)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 24px 70px rgba(0,0,0,0.24)',
  color: '#A7B0C5',

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
    padding: '18px 14px',
  },
}))
