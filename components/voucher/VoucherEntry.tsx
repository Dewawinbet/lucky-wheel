'use client'

import { KeyboardEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Alert, Snackbar } from '@mui/material'
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
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }
  | null

export default function VoucherEntry() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<VoucherStatusState>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitVoucher = async () => {
    if (isSubmitting) {
      return
    }

    setStatus(null)
    setIsSubmitting(true)

    if (code.length !== 8) {
      setStatus({
        type: 'error',
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
          message: payload.message || 'Voucher validation failed.',
        })
        setIsSubmitting(false)
        return
      }

      setStatus({
        type: 'success',
        message: 'Voucher verified. Redirecting to the wheel…',
      })

      setIsSubmitting(false)
      router.push('/spin')
    } catch {
      setStatus({
        type: 'error',
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
              <VerifyTitle>Verifying voucher</VerifyTitle>
              <VerifyText>
                Confirming your code and preparing a one-time spin session.
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

      <Snackbar
        open={Boolean(status)}
        autoHideDuration={status?.type === 'success' ? 1200 : 2800}
        onClose={() => setStatus(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        disableWindowBlurListener
        key={status?.message}
      >
        <Alert
          onClose={() => setStatus(null)}
          severity={status?.type === 'success' ? 'success' : 'error'}
          variant="filled"
          sx={{
            width: '100%',
            minWidth: { xs: 'calc(100vw - 32px)', sm: 360 },
            borderRadius: 2,
            boxShadow: '0 18px 44px rgba(0,0,0,0.32)',
            alignItems: 'center',
            background:
              status?.type === 'success'
                ? 'linear-gradient(135deg, #0f766e, #14b8a6)'
                : 'linear-gradient(135deg, #b91c1c, #ef4444)',
          }}
        >
          {status?.message ?? ''}
        </Alert>
      </Snackbar>
    </VoucherShell>
  )
}
