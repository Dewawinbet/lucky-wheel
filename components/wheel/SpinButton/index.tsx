'use client'

import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'
import { ActionButton } from './styles'

interface SpinButtonProps {
  disabled?: boolean
  isSpinning: boolean
  onClick: () => void
}

export default function SpinButton({
  disabled = false,
  isSpinning,
  onClick,
}: SpinButtonProps) {
  return (
    <ActionButton
      type="button"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      endIcon={<CasinoOutlinedIcon />}
    >
      {isSpinning ? 'Spinning…' : 'Spin Now'}
    </ActionButton>
  )
}
