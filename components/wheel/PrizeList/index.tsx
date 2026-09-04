'use client'

import type { CSSProperties } from 'react'
import { Typography } from '@mui/material'
import { PrizeMiniIcon, prizeCardVars } from '@/components/wheel/prizeVisuals'
import type { Prize } from '@/types/prize'
import { Grid, ItemCard, ItemIcon } from './styles'

interface PrizeListProps {
  prizes: Prize[]
  activePrizeId: string
}

export default function PrizeList({ prizes, activePrizeId }: PrizeListProps) {
  return (
    <Grid>
      {prizes.map((prize) => (
        <ItemCard
          key={prize.id}
          data-active={prize.id === activePrizeId ? 'true' : 'false'}
          style={prizeCardVars(prize.id) as CSSProperties}
        >
          <ItemIcon data-active={prize.id === activePrizeId ? 'true' : 'false'}>
            <PrizeMiniIcon prizeId={prize.id} />
          </ItemIcon>

          <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 800 }}>
            {prize.shortLabel}
          </Typography>

          <Typography
            sx={{
              color: '#fff',
              fontSize: prize.id === 'iphone-17-pro-max' ? 16 : 21,
              fontWeight: 800,
              mt: 0.5,
              letterSpacing: '-0.03em',
            }}
          >
            {prize.amount}
          </Typography>
        </ItemCard>
      ))}
    </Grid>
  )
}
