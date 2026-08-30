'use client'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import {
  CelebrationBackdrop,
  CelebrationCard,
  CelebrationConfetti,
  CelebrationGlow,
  CelebrationHint,
  CelebrationLabel,
  CelebrationValue,
} from './styles'

interface CelebrationToastProps {
  open: boolean
  title: string
  amount: string
  onClose: () => void
}

export default function CelebrationToast({
  open,
  title,
  amount,
  onClose,
}: CelebrationToastProps) {
  if (!open) {
    return null
  }

  return (
    <CelebrationBackdrop onClick={onClose} role="presentation">
      <CelebrationCard
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Prize won"
      >
        <CelebrationGlow />
        <CelebrationConfetti />

        <CelebrationLabel>
          <AutoAwesomeIcon sx={{ fontSize: 16 }} />
          You Won
        </CelebrationLabel>

        <WorkspacePremiumOutlinedIcon
          sx={{ color: '#FBBF24', fontSize: { xs: 40, sm: 48 }, mb: 1.5, zIndex: 1 }}
        />

        <CelebrationValue>{amount}</CelebrationValue>
        <CelebrationHint>{title}</CelebrationHint>
        <CelebrationHint>Prize is now locked to your voucher.</CelebrationHint>
      </CelebrationCard>
    </CelebrationBackdrop>
  )
}
