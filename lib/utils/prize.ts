import { PRIZES } from '@/constants/prize'
import type { Prize, SpinResult } from '@/types/prize'

const weightedPrizes = PRIZES.filter((prize) => prize.probability > 0)
const ANGPOW_OPTIONS = [
  { amount: '₱10', weight: 40 },
  { amount: '₱20', weight: 30 },
  { amount: '₱30', weight: 20 },
  { amount: '₱50', weight: 10 },
] as const

export function getPrizeById(prizeId: string) {
  return PRIZES.find((prize) => prize.id === prizeId) ?? null
}

export function createSpinResult(prize: Prize): SpinResult {
  const amount = prize.id === 'angpow' ? pickWeightedAngpowAmount() : prize.amount
  const label = prize.id === 'angpow' ? 'Angpow Prize' : prize.label

  return {
    prizeId: prize.id,
    label,
    amount,
    angle: prize.angle,
  }
}

export function pickWeightedPrize(randomValue = Math.random()) {
  const totalWeight = weightedPrizes.reduce(
    (sum, prize) => sum + prize.probability,
    0
  )

  if (totalWeight <= 0) {
    throw new Error('Prize probability configuration is invalid.')
  }

  let cursor = randomValue * totalWeight

  for (const prize of weightedPrizes) {
    cursor -= prize.probability

    if (cursor < 0) {
      return prize
    }
  }

  return weightedPrizes[weightedPrizes.length - 1]
}

function pickWeightedAngpowAmount(randomValue = Math.random()) {
  const totalWeight = ANGPOW_OPTIONS.reduce((sum, option) => sum + option.weight, 0)
  let cursor = randomValue * totalWeight

  for (const option of ANGPOW_OPTIONS) {
    cursor -= option.weight

    if (cursor < 0) {
      return option.amount
    }
  }

  return ANGPOW_OPTIONS[ANGPOW_OPTIONS.length - 1].amount
}
