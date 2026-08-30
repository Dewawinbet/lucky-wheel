'use client'

import { Box, styled } from '@mui/material'

export const Pointer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '2%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 5,
  width: 0,
  height: 0,
  borderLeft: '18px solid transparent',
  borderRight: '18px solid transparent',
  borderTop: '40px solid #FBBF24',
  filter: 'drop-shadow(0 7px 10px rgba(0,0,0,0.35))',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: -8,
    top: -42,
    width: 16,
    height: 16,
    borderRadius: '50%',
    background: '#FFE08A',
    boxShadow: '0 0 18px rgba(255,224,138,0.7)',
  },

  [theme.breakpoints.down('sm')]: {
    borderLeftWidth: 13,
    borderRightWidth: 13,
    borderTopWidth: 30,
  },
}))
