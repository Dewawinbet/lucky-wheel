'use client'

import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import { Typography } from '@mui/material'
import { PRIZES } from '@/constants/prize'
import {
  Section,
  SectionHeader,
  Cards,
  PrizeCard,
  PrizeIcon,
} from './styles'

const getPrizeIcon = (id: string) => {
  switch (id) {
    case 'iphone-17-pro-max':
      return <PhoneIphoneOutlinedIcon />

    case 'cash-100':
      return <PaymentsOutlinedIcon />

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

export default function PrizePreview() {
  const displayPrizes = [...PRIZES].reverse()

  return (
    <Section>
      <SectionHeader>
        <Typography
          variant="overline"
          sx={{
            color: '#A78BFA',
            fontWeight: 800,
            letterSpacing: '0.14em',
          }}
        >
          WHAT CAN YOU WIN?
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: { xs: 30, sm: 38 },
          }}
        >
          Your next prize could be here
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          Take your chance and see where the wheel lands.
        </Typography>
      </SectionHeader>

      <Cards>
        {displayPrizes.map((prize) => (
          <PrizeCard key={prize.id} className={prize.id}>
            <PrizeIcon className={prize.id}>
              {getPrizeIcon(prize.id)}
            </PrizeIcon>

            <Typography
              sx={{
                fontSize: 13,
                color: 'text.secondary',
                fontWeight: 600,
              }}
            >
              {prize.label}
            </Typography>

            <Typography
              sx={{
                fontSize:
                  prize.id === 'iphone-17-pro-max' ? 17 : 23,
                fontWeight: 800,
                color: '#fff',
                mt: 0.3,
              }}
            >
              {prize.amount}
            </Typography>
          </PrizeCard>
        ))}
      </Cards>
    </Section>
  )
}
