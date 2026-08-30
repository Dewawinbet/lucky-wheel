'use client'

import { useRef, useState } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import { Typography } from '@mui/material'
import { PRIZES } from '@/constants/prize'
import type { Prize, SpinResult } from '@/types/prize'
import PrizeList from '@/components/wheel/PrizeList'
import PrizeResult from '@/components/wheel/PrizeResult'
import SpinButton from '@/components/wheel/SpinButton'
import WheelPointer from '@/components/wheel/WheelPointer'
import CelebrationToast from '@/components/wheel/CelebrationToast'
import {
  Description,
  Eyebrow,
  FooterMeta,
  HubValue,
  BurstRing,
  ResultPanelWrap,
  RevealPlaceholder,
  SpinShell,
  SpinStage,
  StageFooter,
  StageTop,
  Title,
  VoucherChip,
  WheelDisc,
  WheelGlow,
  WheelHub,
  WheelLabel,
  WheelZone,
} from './styles'

const SPINS = 6

function getRotationForPrize(prize: Prize, completedSpins: number) {
  const targetCenterAngle = prize.angle
  return completedSpins * 360 + SPINS * 360 + (360 - targetCenterAngle)
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
  const [error, setError] = useState<string | null>(null)
  const [showOutcome, setShowOutcome] = useState(hasSpun)
  const [showCelebration, setShowCelebration] = useState(false)
  const [burstActive, setBurstActive] = useState(false)
  const completedTurns = useRef(initialResult ? 1 : 0)

  const handleSpin = async () => {
    if (isSpinning || spinLocked) {
      return
    }

    setError(null)
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
        setError(payload.message || 'Could not complete your spin.')
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
      }, 5600)
    } catch {
      setError('Could not complete your spin.')
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

      <SpinStage>
        <StageTop>
          <div>
            <Eyebrow>
              <AutoAwesomeIcon sx={{ fontSize: 14 }} />
              VERIFIED VOUCHER
            </Eyebrow>

            <Title>
              Spin once. <span>Claim your prize.</span>
            </Title>

            <Description>
              Your code is confirmed and ready. Tap the wheel or press the button to
              start your one-time spin and reveal what you have won.
            </Description>
          </div>

          <VoucherChip
            icon={<ConfirmationNumberOutlinedIcon sx={{ color: '#A78BFA !important' }} />}
            label={voucherCode}
          />
        </StageTop>

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
          <WheelGlow />
          <BurstRing
            style={
              {
                '--burst-scale': burstActive ? 1.08 : 0.78,
                '--burst-opacity': burstActive ? 1 : 0,
              } as React.CSSProperties
            }
          />
          <WheelPointer />

          <WheelDisc
            style={
              {
                '--wheel-rotation': `${rotation}deg`,
                '--wheel-burst-scale': burstActive ? 1.03 : 1,
                '--wheel-burst-shadow': burstActive
                  ? '0 0 0 6px rgba(255,255,255,0.12), 0 30px 90px rgba(0,0,0,0.46), 0 0 110px rgba(251,191,36,0.45)'
                  : '0 0 0 5px rgba(255,255,255,0.06), 0 28px 70px rgba(0,0,0,0.42), 0 0 80px rgba(139,92,246,0.18)',
              } as React.CSSProperties
            }
          >
            {PRIZES.map((prize) => (
              <WheelLabel
                key={prize.id}
                className={prize.className}
                style={{ '--angle': `${prize.angle}deg` } as React.CSSProperties}
              >
                {prize.id === 'iphone-17-pro-max' ? (
                  <>
                    iPhone 17
                    <br />
                    Pro Max
                  </>
                ) : (
                  prize.shortLabel
                )}
              </WheelLabel>
            ))}

            <WheelHub>
              <HubValue>
                LUCKY
                <br />
                WHEEL
              </HubValue>
            </WheelHub>
          </WheelDisc>
        </WheelZone>

        <StageFooter>
          <FooterMeta>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>
              {spinLocked
                ? 'Your result has been locked in.'
                : 'Your voucher is ready for one secure spin.'}
            </Typography>
            <Typography sx={{ color: '#A7B0C5', fontSize: 14, lineHeight: 1.7 }}>
              {spinLocked
                ? 'This prize is already recorded and the same voucher cannot be used again.'
                : 'The result is selected on the server using your configured prize probabilities and recorded once the spin is made.'}
            </Typography>
            {error ? (
              <Typography sx={{ color: '#FCA5A5', fontSize: 14, lineHeight: 1.6 }}>
                {error}
              </Typography>
            ) : null}
          </FooterMeta>

          <SpinButton
            disabled={spinLocked}
            isSpinning={isSpinning}
            onClick={() => {
              void handleSpin()
            }}
          />
        </StageFooter>
      </SpinStage>

      <ResultPanelWrap>
        {showOutcome ? (
          <>
            <PrizeResult
              title={resolvedResult?.label ?? activePrize.label}
              amount={resolvedResult?.amount ?? activePrize.amount}
              spinning={isSpinning}
            />
            <PrizeList prizes={[...PRIZES].reverse()} activePrizeId={activePrize.id} />
          </>
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
      </ResultPanelWrap>
    </SpinShell>
  )
}
