'use client'
import Image from 'next/image'
import { Typography } from '@mui/material'
import {
  FooterRoot,
  FooterInner,
  FooterBrand,
  FooterPowered,
  FooterPoweredMark,
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
            <FooterPoweredMark>
              <Image src="/80x80.png" alt="DEVAWINBET" width={14} height={14} sizes="14px" />
            </FooterPoweredMark>
            <span>Powered by DEVAWINBET</span>
          </FooterPowered>
        </FooterBrand>

        <Typography variant="body2" color="text.secondary">
          Good luck & have fun.
        </Typography>
      </FooterInner>
    </FooterRoot>
  )
}
