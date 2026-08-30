'use client'

import { Button, styled } from '@mui/material'

export const ActionButton = styled(Button)({
  minWidth: 220,
  minHeight: 58,
  borderRadius: 18,
  color: '#fff',
  fontSize: 16,
  fontWeight: 900,
  letterSpacing: '0.04em',
  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  boxShadow: '0 14px 40px rgba(139,92,246,0.28)',

  '&:hover': {
    background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
  },

  '&.Mui-disabled': {
    color: 'rgba(255,255,255,0.5)',
    background: 'rgba(255,255,255,0.08)',
  },
})
