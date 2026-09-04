'use client'

import type { CSSProperties } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Typography } from '@mui/material'
import { PrizeMiniIcon, prizeCardVars } from '@/components/wheel/prizeVisuals'
import {
  ResultAmountRow,
  ResultBadgeRow,
  ResultCard,
  ResultEyebrow,
  ResultHero,
  ResultValue,
  ResultHint,
  ResultAccent,
  ResultBurst,
  ResultIconWrap,
} from './styles'

interface PrizeResultProps {
  prizeId: string
  title: string
  amount: string
  spinning: boolean
}

export default function PrizeResult({
  prizeId,
  title,
  amount,
  spinning,
}: PrizeResultProps) {
  return (
    <ResultCard style={prizeCardVars(prizeId) as CSSProperties}>
      <ResultAccent />
      <ResultBurst>🎊</ResultBurst>

      <ResultBadgeRow>
        <ResultEyebrow>
          {spinning ? (
            <AutoAwesomeIcon sx={{ fontSize: 15 }} />
          ) : (
            <WorkspacePremiumOutlinedIcon sx={{ fontSize: 15 }} />
          )}
          {spinning ? 'SPINNING NOW' : 'YOUR PRIZE'}
        </ResultEyebrow>

        {!spinning ? (
          <ResultEyebrow sx={{ color: '#FFF1A8', borderColor: 'rgba(255,215,90,0.28)' }}>
            <CelebrationRoundedIcon sx={{ fontSize: 15 }} />
            WIN CONFIRMED
          </ResultEyebrow>
        ) : null}
      </ResultBadgeRow>

      <ResultHero>
        <ResultIconWrap>
          <PrizeMiniIcon prizeId={prizeId} />
        </ResultIconWrap>

        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: 30, sm: 40 },
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.96,
            mb: 1,
            maxWidth: 460,
          }}
        >
          {title}
        </Typography>
      </ResultHero>

      <ResultAmountRow>
        <ResultValue>{amount}</ResultValue>
      </ResultAmountRow>

      <ResultHint>
        {spinning
          ? 'The wheel is settling into your final result.'
          : 'Your voucher has been successfully redeemed for this prize.'}
      </ResultHint>
    </ResultCard>
  )
}
