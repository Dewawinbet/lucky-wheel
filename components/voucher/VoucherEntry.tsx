'use client'

import { FormEvent, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import {
  VoucherButton,
  VoucherCard,
  VoucherDescription,
  VoucherEyebrow,
  VoucherForm,
  VoucherInput,
  VoucherLogo,
  VoucherShell,
  VoucherStatus,
  VoucherTitle,
} from './VoucherEntry.styles'

type VoucherStatusState =
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }
  | null

export default function VoucherEntry() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<VoucherStatusState>(null)
  const [isPending, startTransition] = useTransition()

  const normalizedCode = code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setStatus(null)

    startTransition(async () => {
      if (normalizedCode.length !== 8) {
        setStatus({
          type: 'error',
          message: 'Enter a valid 8-character voucher code.',
        })
        return
      }

      try {
        const response = await fetch('/api/voucher', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: normalizedCode }),
        })

        const payload = (await response.json()) as { valid: boolean; message: string }

        if (!response.ok || !payload.valid) {
          setStatus({
            type: 'error',
            message: payload.message || 'Voucher validation failed.',
          })
          return
        }

        setStatus({
          type: 'success',
          message: 'Voucher verified. Redirecting to the wheel…',
        })

        router.push('/spin')
      } catch {
        setStatus({
          type: 'error',
          message: 'Unable to verify voucher right now. Please try again.',
        })
      }
    })
  }

  return (
    <VoucherShell>
      <VoucherCard>
        <VoucherLogo>
          <ConfirmationNumberOutlinedIcon sx={{ color: '#fff', fontSize: 38 }} />
        </VoucherLogo>

        <VoucherEyebrow>
          <AutoAwesomeIcon sx={{ fontSize: 14 }} />
          VOUCHER CHECKPOINT
        </VoucherEyebrow>

        <VoucherTitle>Enter Voucher</VoucherTitle>

        <VoucherDescription>
          Enter your 8-character code to unlock one secure spin session.
        </VoucherDescription>

        <VoucherForm onSubmit={handleSubmit}>
          <VoucherInput
            value={normalizedCode}
            onChange={(event) => setCode(event.target.value)}
            placeholder="DG17GBX9"
            slotProps={{
              htmlInput: {
                maxLength: 8,
                autoCapitalize: 'characters',
                autoCorrect: 'off',
                spellCheck: false,
              },
            }}
          />

          <VoucherButton type="submit" variant="contained" disabled={isPending}>
            {isPending ? 'VERIFYING…' : 'VERIFY VOUCHER'}
          </VoucherButton>
        </VoucherForm>

        {status ? (
          <VoucherStatus severity={status.type === 'success' ? 'success' : 'error'}>
            {status.message}
          </VoucherStatus>
        ) : null}
      </VoucherCard>
    </VoucherShell>
  )
}
