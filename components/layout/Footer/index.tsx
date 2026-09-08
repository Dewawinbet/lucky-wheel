'use client'
import Image from 'next/image'
import { Typography } from '@mui/material'
import {
  FooterRoot,
  FooterInner,
  FooterBrand,
  FooterPowered,
  FooterPoweredLogo,
} from './styles'

export default function Footer() {
  return (
    <FooterRoot>
      <FooterInner>
        <FooterBrand>
          <Typography variant="body2" color="text.secondary">
            LuckyWheel
          </Typography>
          <FooterPowered>
            <span>Powered by</span>
            <FooterPoweredLogo>
              <Image src="/newLogoDeva.png" alt="DEVAWINBET" fill sizes="100px" />
            </FooterPoweredLogo>
          </FooterPowered>
        </FooterBrand>

        <Typography variant="body2" color="text.secondary">
          Good luck & have fun.
        </Typography>
      </FooterInner>
    </FooterRoot>
  )
}
