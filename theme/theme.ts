'use client'
import { createTheme } from '@mui/material/styles'
import typography from './typography'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#6D28D9',
    },
    secondary: {
      main: '#EC4899',
      light: '#F472B6',
      dark: '#BE185D',
    },
    background: {
      default: '#080B1A',
      paper: '#11162A',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#A7B0C5',
    },
    warning: {
      main: '#FBBF24',
    },
  },
  typography,
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: '12px 24px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
})

export default theme