'use client'

import Link from 'next/link'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'
import WheelDisplay from '@/components/wheel/WheelDisplay'
import {
  HeroSection,
  HeroContent,
  Eyebrow,
  HeroTitle,
  HeroDescription,
  SpinButton,
  TrustText,
} from './styles'

const HERO_REST_ANGLE = 0

export default function Hero() {
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

        <Link href="/voucher">
          <SpinButton variant="contained" endIcon={<CasinoOutlinedIcon />}>
            Spin the Wheel
          </SpinButton>
        </Link>

        <TrustText>
          One valid voucher unlocks one spin.
        </TrustText>
      </HeroContent>

      <Link href="/voucher" aria-label="Go to voucher page">
        <WheelDisplay
          animateOnMount
          mountSpinDirection="clockwise"
          rotation={HERO_REST_ANGLE}
          interactive
          variant="hero"
        />
      </Link>
    </HeroSection>
  )
}
