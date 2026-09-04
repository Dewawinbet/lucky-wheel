'use client'

import { useRef, useState } from 'react'
import { Typography } from '@mui/material'
import BrandStatusModal from '@/components/feedback/BrandStatusModal'
import WheelDisplay from '@/components/wheel/WheelDisplay'
import { PRIZES } from '@/constants/prize'
import type { Prize, SpinResult } from '@/types/prize'
import PrizeList from '@/components/wheel/PrizeList'
import PrizeResult from '@/components/wheel/PrizeResult'
import SpinButton from '@/components/wheel/SpinButton'
import CelebrationToast from '@/components/wheel/CelebrationToast'
import {
  ActionCluster,
  BurstRing,
  ResultGrid,
  ResultPanelWrap,
  RevealPlaceholder,
  SpinFrame,
  SpinShell,
  SpinStage,
  StageHint,
  WheelZone,
} from './styles'

const SPINS = 10
const SPIN_DURATION_MS = 9200

function getRotationForPrize(prize: Prize, completedSpins: number) {
  return completedSpins * 360 + SPINS * 360 + (360 - prize.angle)
}

function getPrizeFromResult(result: Pick<SpinResult, 'prizeId'>) {
  return PRIZES.find((prize) => prize.id === result.prizeId) ?? PRIZES[0]
}

interface LuckyWheelProps {
  voucherCode: string
  initialResult: Omit<SpinResult, 'angle'> | null
  hasSpun: boolean
}

export default function LuckyWheel({
  voucherCode,
  initialResult,
  hasSpun,
}: LuckyWheelProps) {
  const lockedVoucherMessage = `Voucher ${voucherCode} has already been used for this result.`
  const initialPrize = initialResult ? getPrizeFromResult(initialResult) : PRIZES[0]
  const [activePrize, setActivePrize] = useState<Prize>(initialPrize)
  const [resolvedResult, setResolvedResult] = useState<Omit<SpinResult, 'angle'> | null>(
    initialResult
  )
  const [rotation, setRotation] = useState(
    initialResult ? getRotationForPrize(initialPrize, 0) : 0
  )
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinLocked, setSpinLocked] = useState(hasSpun)
  const [statusModal, setStatusModal] = useState<{
    title: string
    message: string
  } | null>(
    hasSpun
      ? {
          title: 'Prize already locked',
          message: `${lockedVoucherMessage} Your recorded prize is ready below.`,
        }
      : null
  )
  const [showOutcome, setShowOutcome] = useState(hasSpun)
  const [showCelebration, setShowCelebration] = useState(false)
  const [burstActive, setBurstActive] = useState(false)
  const completedTurns = useRef(initialResult ? 1 : 0)

  const handleSpin = async () => {
    if (isSpinning || spinLocked) {
      return
    }

    setStatusModal(null)
    setIsSpinning(true)
    setShowOutcome(false)
    setShowCelebration(false)
    setBurstActive(false)

    try {
      const response = await fetch('/api/spin', {
        method: 'POST',
      })

      const payload = (await response.json()) as {
        ok: boolean
        message?: string
        alreadySpun?: boolean
        result?: Omit<SpinResult, 'angle'>
      }

      if (!response.ok || !payload.ok || !payload.result) {
        setStatusModal({
          title: 'Spin could not be completed',
          message: payload.message || 'Could not complete your spin.',
        })
        setIsSpinning(false)
        return
      }

      const nextPrize = getPrizeFromResult(payload.result)
      setActivePrize(nextPrize)
      setResolvedResult(payload.result)
      setRotation(getRotationForPrize(nextPrize, completedTurns.current))
      completedTurns.current += 1
      setSpinLocked(true)

      window.setTimeout(() => {
        setIsSpinning(false)
        setShowOutcome(true)
        setBurstActive(true)
        setShowCelebration(true)

        window.setTimeout(() => {
          setBurstActive(false)
        }, 900)
      }, SPIN_DURATION_MS)
    } catch {
      setStatusModal({
        title: 'Spin could not be completed',
        message: 'Could not complete your spin.',
      })
      setIsSpinning(false)
      setShowOutcome(spinLocked)
    }
  }

  return (
    <SpinShell>
      <CelebrationToast
        open={showCelebration}
        title={resolvedResult?.label ?? activePrize.label}
        amount={resolvedResult?.amount ?? activePrize.amount}
        onClose={() => setShowCelebration(false)}
      />
      <BrandStatusModal
        open={Boolean(statusModal)}
        eyebrow="DEVAWINBET NOTICE"
        title={statusModal?.title ?? ''}
        message={statusModal?.message ?? ''}
        onClose={() => setStatusModal(null)}
      />

      <SpinFrame>
        <SpinStage>
          <WheelZone
            role={spinLocked ? undefined : 'button'}
            tabIndex={spinLocked ? -1 : 0}
            aria-label={spinLocked ? undefined : 'Spin the wheel'}
            onClick={() => {
              void handleSpin()
            }}
            onKeyDown={(event) => {
              if (!spinLocked && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                void handleSpin()
              }
            }}
          >
            <BurstRing
              style={
                {
                  '--burst-scale': burstActive ? 1.08 : 0.78,
                  '--burst-opacity': burstActive ? 1 : 0,
                } as React.CSSProperties
              }
            />

            <WheelDisplay
              rotation={rotation}
              labelRotation={spinLocked && !isSpinning ? rotation : 0}
              interactive={!spinLocked}
              variant="hero"
              role={spinLocked ? undefined : 'button'}
              tabIndex={spinLocked ? -1 : 0}
              ariaLabel={spinLocked ? undefined : 'Spin the wheel'}
              onClick={() => {
                void handleSpin()
              }}
              onKeyDown={(event) => {
                if (!spinLocked && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault()
                  void handleSpin()
                }
              }}
            />

            <ActionCluster>
              <SpinButton
                disabled={spinLocked}
                isSpinning={isSpinning}
                onClick={() => {
                  void handleSpin()
                }}
              />
              <StageHint>
                {spinLocked
                  ? lockedVoucherMessage
                  : `Voucher ${voucherCode} is verified and ready to spin.`}
              </StageHint>
            </ActionCluster>
          </WheelZone>
        </SpinStage>
      </SpinFrame>

      <ResultGrid>
        {showOutcome ? (
          <ResultPanelWrap>
            <PrizeResult
              prizeId={activePrize.id}
              title={resolvedResult?.label ?? activePrize.label}
              amount={resolvedResult?.amount ?? activePrize.amount}
              spinning={isSpinning}
            />
            <PrizeList prizes={[...PRIZES].reverse()} activePrizeId={activePrize.id} />
          </ResultPanelWrap>
        ) : (
          <RevealPlaceholder>
            <Typography sx={{ color: '#fff', fontSize: 24, fontWeight: 800, mb: 1.5 }}>
              Prize reveal pending
            </Typography>
            <Typography sx={{ color: '#A7B0C5', fontSize: 15, lineHeight: 1.7 }}>
              Spin the wheel to reveal your final prize. Once the wheel settles, your
              redeemed result and full prize list will appear here.
            </Typography>
          </RevealPlaceholder>
        )}
      </ResultGrid>
    </SpinShell>
  )
}
