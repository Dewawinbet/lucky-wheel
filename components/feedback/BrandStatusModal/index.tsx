'use client'

import Image from 'next/image'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import {
  StatusAction,
  StatusBackdrop,
  StatusCard,
  StatusEyebrow,
  StatusLogo,
  StatusText,
  StatusTitle,
} from './styles'

interface BrandStatusModalProps {
  open: boolean
  title: string
  message: string
  eyebrow?: string
  actionLabel?: string
  dismissible?: boolean
  onClose?: () => void
}

export default function BrandStatusModal({
  open,
  title,
  message,
  eyebrow = 'DEVAWINBET ALERT',
  actionLabel = 'OK',
  dismissible = true,
  onClose,
}: BrandStatusModalProps) {
  if (!open) {
    return null
  }

  return (
    <StatusBackdrop
      onClick={dismissible ? onClose : undefined}
      role="presentation"
    >
      <StatusCard
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <StatusLogo>
          <Image
            src="/80x80.png"
            alt="DEVAWINBET"
            width={52}
            height={52}
            priority
            style={{ display: 'block', objectFit: 'contain' }}
          />
        </StatusLogo>

        <StatusEyebrow>
          <AutoAwesomeIcon sx={{ fontSize: 16 }} />
          {eyebrow}
        </StatusEyebrow>

        <StatusTitle>{title}</StatusTitle>
        <StatusText>{message}</StatusText>

        {dismissible && onClose ? (
          <StatusAction onClick={onClose}>{actionLabel}</StatusAction>
        ) : null}
      </StatusCard>
    </StatusBackdrop>
  )
}
