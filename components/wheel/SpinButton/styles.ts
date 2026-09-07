'use client'

import { Button, styled } from '@mui/material'

export const ActionButton = styled(Button)({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: 360,
  minWidth: 230,
  minHeight: 62,
  borderRadius: 999,
  color: '#FFF6D8',
  fontSize: 17,
  fontWeight: 900,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  border: '2px solid #F7C84C',
  background:
    'linear-gradient(180deg, rgba(255,246,199,0.2) 0%, rgba(255,255,255,0.02) 18%, transparent 19%), linear-gradient(135deg, #070B17 0%, #12265F 34%, #090D1B 62%, #5F130D 100%)',
  boxShadow:
    '0 18px 44px rgba(0,0,0,0.42), 0 0 26px rgba(247,200,76,0.2), inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -10px 18px rgba(0,0,0,0.42)',
  touchAction: 'manipulation',
  cursor: 'pointer',
  pointerEvents: 'auto',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitAppearance: 'none',
  textShadow: '0 2px 0 rgba(0,0,0,0.45)',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '5px 14px auto',
    height: '34%',
    borderRadius: 999,
    background:
      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 38%, rgba(255,255,255,0.12) 58%, transparent 100%)',
    opacity: 0.75,
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: 999,
    background:
      'linear-gradient(90deg, rgba(255,232,142,0.85), rgba(45,167,255,0.42), rgba(255,232,142,0.85))',
    opacity: 0.28,
    filter: 'blur(12px)',
    pointerEvents: 'none',
  },

  '& .MuiButton-endIcon': {
    position: 'relative',
    zIndex: 1,
    marginLeft: 10,
    color: '#F8CE58',
  },

  '& .MuiButton-endIcon svg': {
    fontSize: 24,
  },

  '& .MuiButton-startIcon, & .MuiButton-endIcon, & .MuiButton-icon': {
    pointerEvents: 'none',
  },

  '&:hover': {
    borderColor: '#FFE58A',
    background:
      'linear-gradient(180deg, rgba(255,246,199,0.26) 0%, rgba(255,255,255,0.03) 18%, transparent 19%), linear-gradient(135deg, #091023 0%, #17357E 34%, #0B1021 62%, #7C1A10 100%)',
    boxShadow:
      '0 20px 52px rgba(0,0,0,0.44), 0 0 34px rgba(247,200,76,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -10px 18px rgba(0,0,0,0.42)',
    transform: 'translateY(-1px)',
  },

  '&:active': {
    transform: 'translateY(1px)',
    boxShadow:
      '0 10px 26px rgba(0,0,0,0.38), 0 0 18px rgba(247,200,76,0.18), inset 0 5px 14px rgba(0,0,0,0.46)',
  },

  '&.Mui-disabled': {
    color: 'rgba(255,246,216,0.46)',
    borderColor: 'rgba(247,200,76,0.22)',
    background:
      'linear-gradient(135deg, rgba(12,16,30,0.88), rgba(27,32,48,0.92))',
    boxShadow:
      '0 12px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)',
    textShadow: 'none',
  },
})
