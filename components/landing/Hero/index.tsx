'use client'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined'
import { useRouter } from 'next/navigation'
import { PRIZES } from '@/constants/prize'
import {
  HeroSection,
  HeroContent,
  Eyebrow,
  HeroTitle,
  HeroDescription,
  SpinButton,
  TrustText,
  WheelVisual,
  WheelGlow,
  Wheel,
  WheelLabel,
  WheelCenter,
  Pointer,
} from './styles'

const HERO_REST_ANGLE = 0

export default function Hero() {
  const router = useRouter()

  return (
    <HeroSection>
      <HeroContent>
        <Eyebrow>
          <AutoAwesomeIcon sx={{ fontSize: 16 }} />
          YOUR LUCK STARTS HERE
        </Eyebrow>

        <HeroTitle>
          Spin the wheel.
          <br />
          <span>Win something.</span>
        </HeroTitle>

        <HeroDescription>
          Enter your voucher, take your chance and discover what you’ve won.
          Every spin brings a little excitement.
        </HeroDescription>

        <SpinButton
          variant="contained"
          endIcon={<CasinoOutlinedIcon />}
          onClick={() => router.push('/voucher')}
        >
          Spin the Wheel
        </SpinButton>

        <TrustText>
          One valid voucher unlocks one spin.
        </TrustText>
      </HeroContent>

      <WheelVisual
        role="link"
        aria-label="Go to voucher page"
        tabIndex={0}
        onClick={() => router.push('/voucher')}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            router.push('/voucher')
          }
        }}
      >
        <WheelGlow />

        <Pointer />

        <Wheel
          style={
            {
              '--wheel-rest-angle': `${HERO_REST_ANGLE}deg`,
            } as React.CSSProperties
          }
        >
          {PRIZES.map((prize) => (
            <WheelLabel
              key={prize.id}
              className={prize.className}
              style={
                {
                  '--angle': `${prize.angle}deg`,
                } as React.CSSProperties
              }
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
        </Wheel>

        <WheelCenter>
          <RedeemOutlinedIcon />
        </WheelCenter>
      </WheelVisual>
    </HeroSection>
  )
}
