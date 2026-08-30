'use client'

import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Typography } from '@mui/material'
import type { Prize } from '@/types/prize'
import { Grid, ItemCard, ItemIcon } from './styles'

const getPrizeIcon = (id: string) => {
  switch (id) {
    case 'iphone-17-pro-max':
      return <WorkspacePremiumOutlinedIcon />
    case 'cash-100':
      return <PhoneIphoneOutlinedIcon />
    case 'cash-50':
      return <LocalAtmOutlinedIcon />
    case 'cash-30':
      return <RedeemOutlinedIcon />
    case 'cash-20':
      return <PaymentsOutlinedIcon />
    case 'angpow':
      return <CardGiftcardOutlinedIcon />
    default:
      return <RedeemOutlinedIcon />
  }
}

interface PrizeListProps {
  prizes: Prize[]
  activePrizeId: string
}

export default function PrizeList({ prizes, activePrizeId }: PrizeListProps) {
  return (
    <Grid>
      {prizes.map((prize) => (
        <ItemCard key={prize.id} data-active={prize.id === activePrizeId ? 'true' : 'false'}>
          <ItemIcon data-active={prize.id === activePrizeId ? 'true' : 'false'}>
            {getPrizeIcon(prize.id)}
          </ItemIcon>

          <Typography sx={{ color: '#7F8AA5', fontSize: 12, fontWeight: 700 }}>
            {prize.label}
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
