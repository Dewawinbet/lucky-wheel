'use client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'
import theme from '@/theme/theme'
import EmotionRegistry from './EmotionRegistry'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionRegistry>
  )
}
