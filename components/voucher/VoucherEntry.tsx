'use client'

import { KeyboardEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import BrandStatusModal from '@/components/feedback/BrandStatusModal'
import {
  VerifyLabel,
  VerifyOverlay,
  VerifyPanel,
  VerifySpinner,
  VerifySpinnerCore,
  VerifyText,
  VerifyTitle,
  VoucherButton,
  VoucherCard,
  VoucherDescription,
  VoucherEyebrow,
  VoucherForm,
  VoucherInput,
  VoucherLogo,
  VoucherShell,
  VoucherTitle,
} from './VoucherEntry.styles'

type VoucherStatusState =
  | { type: 'success' | 'error'; title: string; message: string }
  | null

export default function VoucherEntry() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<VoucherStatusState>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitPhase, setSubmitPhase] = useState<'verifying' | 'redirecting'>('verifying')

  const submitVoucher = async () => {
    if (isSubmitting) {
      return
    }

    setStatus(null)
    setIsSubmitting(true)
    setSubmitPhase('verifying')

    if (code.length !== 8) {
      setStatus({
        type: 'error',
        title: 'Invalid voucher code',
        message: 'Enter a valid 8-character voucher code.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/voucher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      const payload = (await response.json()) as { valid: boolean; message: string }

      if (!response.ok || !payload.valid) {
        setStatus({
          type: 'error',
          title: 'Voucher check failed',
          message: payload.message || 'Voucher validation failed.',
        })
        setIsSubmitting(false)
        return
      }

      setSubmitPhase('redirecting')
      router.push('/spin')
    } catch {
      setStatus({
        type: 'error',
        title: 'Unable to verify',
        message: 'Unable to verify voucher right now. Please try again.',
      })
      setIsSubmitting(false)
    }
  }

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    void submitVoucher()
  }

  return (
    <VoucherShell>
      <VoucherCard>
        {isSubmitting ? (
          <VerifyOverlay>
            <VerifyPanel>
              <VerifySpinner aria-hidden="true">
                <VerifySpinnerCore>
                  <Image
                    src="/80x80.png"
                    alt="DEVAWINBET"
                    width={34}
                    height={34}
                    priority
                    style={{ display: 'block', objectFit: 'contain' }}
                  />
                </VerifySpinnerCore>
              </VerifySpinner>
              <VerifyLabel>DEVAWINBET SECURE CHECK</VerifyLabel>
              <VerifyTitle>
                {submitPhase === 'redirecting' ? 'Loading lucky wheel' : 'Verifying voucher'}
              </VerifyTitle>
              <VerifyText>
                {submitPhase === 'redirecting'
                  ? 'Your spin session is ready. Redirecting you to the wheel now.'
                  : 'Confirming your code and preparing a one-time spin session.'}
              </VerifyText>
            </VerifyPanel>
          </VerifyOverlay>
        ) : null}

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

        <VoucherForm>
          <VoucherInput
            value={code}
            onChange={(event) =>
              setCode(
                event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)
              )
            }
            onKeyDown={handleInputKeyDown}
            placeholder="DG17GBX9"
            slotProps={{
              htmlInput: {
                maxLength: 8,
                autoCapitalize: 'characters',
                autoCorrect: 'off',
                spellCheck: false,
                inputMode: 'text',
                enterKeyHint: 'go',
                autoComplete: 'off',
              },
            }}
          />

          <VoucherButton
            type="button"
            variant="contained"
            disabled={isSubmitting}
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur()
              }

              void submitVoucher()
            }}
          >
            {isSubmitting ? 'VERIFYING…' : 'VERIFY VOUCHER'}
          </VoucherButton>
        </VoucherForm>
      </VoucherCard>

      <BrandStatusModal
        open={Boolean(status)}
        eyebrow={status?.type === 'error' ? 'DEVAWINBET NOTICE' : 'DEVAWINBET UPDATE'}
        title={status?.title ?? ''}
        message={status?.message ?? ''}
        onClose={() => setStatus(null)}
      />
    </VoucherShell>
  )
}
