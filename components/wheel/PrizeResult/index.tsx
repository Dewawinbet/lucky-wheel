'use client'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Typography } from '@mui/material'
import {
  ResultCard,
  ResultEyebrow,
  ResultValue,
  ResultHint,
  ResultAccent,
} from './styles'

interface PrizeResultProps {
  title: string
  amount: string
  spinning: boolean
}

export default function PrizeResult({
  title,
  amount,
  spinning,
}: PrizeResultProps) {
  return (
    <ResultCard>
      <ResultAccent />

      <ResultEyebrow>
        {spinning ? (
          <AutoAwesomeIcon sx={{ fontSize: 15 }} />
        ) : (
          <WorkspacePremiumOutlinedIcon sx={{ fontSize: 15 }} />
        )}
        {spinning ? 'SPINNING NOW' : 'YOUR PRIZE'}
      </ResultEyebrow>

      <Typography
        sx={{
          color: '#fff',
          fontSize: { xs: 28, sm: 36 },
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <ResultValue>{amount}</ResultValue>

      <ResultHint>
        {spinning
          ? 'The wheel is settling into your final result.'
          : 'Your voucher has been successfully redeemed for this prize.'}
      </ResultHint>
    </ResultCard>
  )
}
